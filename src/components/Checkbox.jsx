const Checkbox = ({ text, isChecked}) => {
  let resultCheckbox = ''
  isChecked ? resultCheckbox = (<div>{text} is done</div>) : resultCheckbox = <div>{text} is in progress</div>  
  return (
    <>
        {resultCheckbox}
    </>
  )
}

export default Checkbox



