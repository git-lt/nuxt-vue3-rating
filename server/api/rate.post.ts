import { Redis } from 'ioredis'
import { createNewRating, getRedisKey } from '../../utils'
import type { PostRateData, RateData } from '../../types'

export default defineEventHandler(async (event) => {
  const redis = new Redis(process.env.REDIS_URL as string)

  const body = await readBody<PostRateData>(event)
  const redisKey = getRedisKey(body.uid)

  let data: RateData
  try {
    const stored = await redis.get(redisKey)
    data = stored ? JSON.parse(stored) : createNewRating()
  }
  catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: `Failed to fetch stored data.${(e as Error).message}` || Object.prototype.toString.call(e),
    })
  }

  setHeaders(event, {
    'content-type': 'application/json',
    'cache-control': 'public, s-maxage=1800, stale-while-revalidate=2400',
  })

  const { rate, oldRate, uid } = body

  const key = `r${rate}` as keyof RateData
  data[key] += 1
  if (oldRate) {
    const key = `r${oldRate}` as keyof RateData
    data[key] -= 1
  }

  const hour = Date.now() / 36e5 % 1000 >> 0
  const stored = JSON.stringify(data)
  await Promise.all([
    redis.set(redisKey, stored),
    redis.set(`${uid}_${hour}`, stored, 'EX', 86400 * 30),
  ])

  await redis.quit()

  return data
})
