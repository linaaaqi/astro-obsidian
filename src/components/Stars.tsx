import { useEffect, useState } from 'react'

const Star = function () {
  const [time, setTime] = useState(Math.random() * 2 * Math.PI)
  const {
    top,
    left,
    opacity: baseOpacity,
    size,
    blinkSpeed,
  } = useState(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.3 + 0.3,
    size: Math.random() < 0.3 ? 2 : 1,
    // 每个星星添加随机闪烁速度（1-4 之间的随机值）
    blinkSpeed: Math.random() * 3 + 1,
  }))[0]

  useEffect(() => {
    const animate = () => {
      setTime((t) => t + 0.01)
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [])

  // 使用正弦波创建闪烁效果，透明度在 30%-100% 基础值之间波动
  const currentOpacity = baseOpacity * (0.65 + 0.35 * Math.sin(time * blinkSpeed))

  return (
    <div
      className="absolute bg-white rounded-full"
      style={{
        top,
        left,
        opacity: currentOpacity,
        width: size,
        height: size,
        transform: `translate(
          ${Math.sin(time) * 5}px, 
          ${Math.cos(time) * 5}px
        )`,
      }}
    />
  )
}

export const Stars = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-1">
      {[...Array(300)].map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  )
}
