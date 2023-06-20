import { Redis } from 'ioredis'
import { getRedisKey } from '../../utils'

export default defineEventHandler(async (event) => {
  const redis = new Redis(process.env.REDIS_URL as string)

  const { uid } = getQuery(event)
  const redisKey = getRedisKey(uid as string)
  console.log(redisKey)

  let data
  try {
    data = await redis.get(redisKey)
  }
  catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: `Failed to fetch stored data.${(e as Error).message}` || Object.prototype.toString.call(e),
    })
  }
  await redis.quit()

  setHeaders(event, {
    'content-type': 'application/json',
    'cache-control': 'public, s-maxage=1800, stale-while-revalidate=2400',
  })

  return data
})
