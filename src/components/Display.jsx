import { useState, useEffect } from 'react'
import '../styles/Display.css'


export const Display = () => {
  let result = 42
  return (
    <div className="display">
      {result}
    </div>
  )
}