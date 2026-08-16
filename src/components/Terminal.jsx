import { useEffect, useState } from 'react'

const LINES = [
  { prompt: 'whoami', output: 'beeresh_muragannavar' },
  { prompt: 'role --current', output: 'Software Engineer · CSE Student' },
  { prompt: 'stack --primary', output: 'Python · C++ · React · YOLO' },
  { prompt: 'status', output: 'Building AI-driven solutions...' },
]

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0)
  const [promptText, setPromptText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [phase, setPhase] = useState('prompt') // prompt -> output -> pause
  const [history, setHistory] = useState([])
  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReduced) {
      setHistory(LINES)
      return
    }

    const current = LINES[lineIndex]
    let timeout

    if (phase === 'prompt') {
      if (promptText.length < current.prompt.length) {
        timeout = setTimeout(() => setPromptText(current.prompt.slice(0, promptText.length + 1)), 45)
      } else {
        timeout = setTimeout(() => setPhase('output'), 250)
      }
    } else if (phase === 'output') {
      if (outputText.length < current.output.length) {
        timeout = setTimeout(() => setOutputText(current.output.slice(0, outputText.length + 1)), 20)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 600)
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => {
        setHistory((h) => [...h, current])
        setPromptText('')
        setOutputText('')
        if (lineIndex < LINES.length - 1) {
          setLineIndex((i) => i + 1)
          setPhase('prompt')
        } else {
          setPhase('done')
        }
      }, 400)
    }

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, promptText, outputText, lineIndex])

  return (
    <div className="w-full max-w-md rounded-xl border border-slate-hair bg-midnight-900/80 backdrop-blur-sm shadow-card overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-hair bg-charcoal-900/60">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-slate-400">beeresh@dev — zsh</span>
      </div>
      <div className="p-4 font-mono text-[13px] leading-relaxed min-h-[168px]">
        {history.map((line, i) => (
          <div key={i} className="mb-2">
            <div className="text-slate-400">
              <span className="text-cyan-accent">➜</span> <span className="text-cyan-soft">~</span> {line.prompt}
            </div>
            <div className="text-slate-200">{line.output}</div>
          </div>
        ))}

        {phase !== 'done' && (
          <div>
            <div className="text-slate-400">
              <span className="text-cyan-accent">➜</span> <span className="text-cyan-soft">~</span> {promptText}
              {phase === 'prompt' && <span className="inline-block w-1.5 h-3.5 bg-cyan-accent ml-0.5 animate-blink align-middle" />}
            </div>
            {phase !== 'prompt' && (
              <div className="text-slate-200">
                {outputText}
                {phase === 'output' && <span className="inline-block w-1.5 h-3.5 bg-cyan-accent ml-0.5 animate-blink align-middle" />}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
