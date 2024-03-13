import { Key } from "../components/Key";
import '../styles/Keys.css'

export const Keys = () => {
  const labels = [7, 8, 9, "÷", 4, 5, 6, "×", 1, 2, 3, "−", "AC", 0, "=", "+"]
  return (
    <div className="keys">
      {labels.map((e, i) => (
        <Key key={i} label={e} />
      ))}
    </div>
  )
}