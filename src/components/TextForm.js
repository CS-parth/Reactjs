import React,{useState} from 'react'


export default function TextForm(props) {
    const ChangeToupper = ()=>{
        let newText = text.toUpperCase("You have clicked on handleUpClick");
        setText(newText);
    }
    const handleOnClick = (event)=>{
        console.log("Chnages Have been made")
        setText(event.target.value);
    }
    const ChangeTolower = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
    }
    const ClearText = ()=>{
        const newText = "";
        setText(newText);
    }
    const [text, setText] = useState('Enter text here');  
    // not allowed text = "dasas"
    // They are like internal props
    // settext("new text"); 
    return (
        <>
            <div className='container' style={{color: props.Mode==="light" ? "grey" : "white"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" style={{backgroundColor: props.Mode==="light" ? "white" : "grey"}} id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} style={{backgroundColor: props.Mode==="light" ? "white" : "grey"}} onChange={handleOnClick} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="btn btn-primary mx-2" onClick={ChangeToupper}>
                    Convert to upper-case
                </div>
                <div className="btn btn-primary mx-2" onClick={ChangeTolower}>
                    Convert to lower-case
                </div>
                <div className="btn btn-primary mx-2" onClick={ClearText}>
                    Clear text
                </div>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} 300 words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
            </div>
        </>
  )
}

