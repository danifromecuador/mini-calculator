export const Key = (props) => {
  const {label} = props;
  const showBtnValue = (e) => {
    console.log(e.target.value*10)
  }
  return (
    <div className="key">
      <button
        value={label}
        onClick={(e) => {showBtnValue(e)}}
      >
        {label}
      </button>
    </div>
  )
}