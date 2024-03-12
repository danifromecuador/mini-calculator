import { useState, useEffect } from 'react'
import '../styles/Display.css'


export const Display = () => {
  const [result, setResult] = useState(0);
   useEffect(() => {
    setResult(9999);
    if (result > 999) {
      setResult("too big")
    }
  }, []);

  
  return (
    <div className="display">
      {result}
    </div>
  )
}