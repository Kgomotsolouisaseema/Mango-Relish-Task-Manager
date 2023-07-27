
const Button = ({color , text, onClick })=>{

    return <button onClick={onClick} style={{backgroundColor:color}} className="btn">{text}</button>   //className="btn">{text} why is it like this 
}

export default Button;

//In this component, three props (color, text, onClick) were passed into it from the Header Component, 
//which we will create in the next section.