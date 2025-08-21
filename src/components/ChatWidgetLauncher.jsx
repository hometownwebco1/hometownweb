import { useState, useCallback } from 'react'

export default function ChatWidgetLauncher() {
  const [loaded, setLoaded] = useState(false)

  const loadScript = useCallback(() => {
    if (loaded) return
    const s = document.createElement('script')
    s.src = 'https://widgets.leadconnectorhq.com/loader.js'
    s.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js')
    s.setAttribute('data-widget-id', '68a77aefd9f018c1a7ade8fb') // your widget id
    s.async = true
    s.onload = () => setLoaded(true)
    document.body.appendChild(s)
  }, [loaded])

  return (
    <>
      {!loaded && (
        <button
          aria-label="Open chat"
          onClick={loadScript}
          className="fixed bottom-5 right-5 z-50 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
        >
          Chat with us
        </button>
      )}
    </>
  )
}
