import { useEffect, useRef } from 'react'

// Subtle animated node-link graph — nods to Beeresh's AI/ML + graph-heavy
// project work (RAG retrieval, obstacle-detection graphs) without being loud.
export default function NetworkCanvas({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width, height, nodes
    let animationId
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const NODE_COUNT = 42
    const LINK_DIST = 130

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect()
      width = canvas.width = rect.width * window.devicePixelRatio
      height = canvas.height = rect.height * window.devicePixelRatio
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    }

    function init() {
      const rect = canvas.parentElement.getBoundingClientRect()
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    function draw() {
      const rect = canvas.parentElement.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > rect.width) n.vx *= -1
        if (n.y < 0 || n.y > rect.height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(45, 225, 252, ${0.16 * (1 - dist / LINK_DIST)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(123, 232, 255, 0.55)'
        ctx.fill()
      }

      if (!prefersReduced) animationId = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    const onResize = () => {
      resize()
      init()
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
