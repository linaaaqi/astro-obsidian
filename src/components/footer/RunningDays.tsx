import { useLayoutEffect, useState } from 'react'
import { getDiffInDays } from '@/utils/date'
import Config from '@/astro-obsidian.config'

const { footer } = Config

export function RunningDays() {
  const [days, setDays] = useState(0)

  useLayoutEffect(() => {
    const diffDays = getDiffInDays(new Date(footer.startTime))
    setDays(diffDays)
  }, [])

  if (days < 0) {
    return <span>Ops! 网站还没有发布</span>
  }

  return <span>已经运行了 {days} 天</span>
}
