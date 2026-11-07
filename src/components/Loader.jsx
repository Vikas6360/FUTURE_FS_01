import { useEffect, useState } from 'react'

/**
 * Animated splash screen loader showing 0-100% progress
 */
export default function Loader({ onComplete, name = 'VIKAS S M' }) {
  const [count, setCount] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    const duration = 1600 // snappy 1.6s intro loader
    const startTime = performance.now()
    let frameId
    let timerId

    const updateProgress = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.round(progress * 100))

      if (progress < 1) {
        frameId = requestAnimationFrame(updateProgress)
      } else {
        setIsFadingOut(true)
        timerId = setTimeout(() => {
          onComplete?.()
        }, 500)
      }
    }

    frameId = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(frameId)
      clearTimeout(timerId)
    }
  }, [onComplete])

  return (
    <div className={`loader ${isFadingOut ? 'out' : ''}`} aria-hidden={isFadingOut}>
      <div className="loader-count">{count}</div>
      <p className="loader-name">{name}</p>
      <div className="loader-bar">
        <span style={{ width: `${count}%` }} />
      </div>
    </div>
  )
}
