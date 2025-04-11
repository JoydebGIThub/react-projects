
function Buttons(props) {
    return(
        <>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: props.color}}
            onClick={()=> props.handleChange(props.color)}
            >{props.buttonText}</button>
        </>
    )
}
export default Buttons