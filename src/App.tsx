import { useEffect, useState, useRef } from 'react'
import { Fireworks } from '@fireworks-js/react'
import type { FireworksHandlers } from '@fireworks-js/react'

export function App() {
  const ref = useRef<FireworksHandlers>(null);
  const [content, setContent] = useState(null)
  const [from, setFrom] = useState(null)

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams: any, prop: any) => searchParams.get(prop),
    });

    setContent(params.content)
    setFrom(params.from)
  }, [])

  return (
    <div>
      <Fireworks
        ref={ref}
        options={{ opacity: 0.5, particles: 50, delay: { min: 60, max: 80 }, traceSpeed: 1 }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: '#000',
          zIndex: -1
        }}
      />
      <div
        style={{ 
          height: "100vh", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center" 
        }}
      >
        <div
          style={{ 
            fontSize: "23px",
            color: "white", 
          }}
        >{content}</div>
        <div
          style={{ 
            position: "absolute",
            bottom: 0,
            color: "white", 
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center" 
          }}
        >
          <div>from</div>
          <div>{from}</div>
        </div>
      </div>
    </div>
  )
}
