import { Key } from "../components/Key";

export const Keys = () => {
  const labels = [1, 2, 3, 4]
  return (
    <div className="keys">
      {labels.map((e, i) => (
        <Key key={i} label={e} />
      ))}
    </div>
  )
}