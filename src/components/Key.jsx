import '../styles/Key.css'
import PropTypes from 'prop-types'

export const Key = ({label}) => {
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

Key.propTypes = {
  label: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
}