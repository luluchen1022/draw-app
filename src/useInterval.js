import { useRef, useEffect } from 'react'

export default function (callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    if (delay == null) {
      return
    }
    const id = setInterval(() => {
      savedCallback.current()
    }, delay);
    return () => clearInterval(id)
  }, [delay])
}