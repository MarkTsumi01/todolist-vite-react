import PropTypes from "prop-types"

const Image = ({ imageUrl }) => {
  return (
    <img src={imageUrl} alt="this is image"/>
  )
}

export default Image


Image.propTypes = {
    imageUrl: PropTypes.string
}
