import React, { useState , useEffect } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes , Route } from "react-router-dom";
import "./contact.css"
function ContactForm(props) {
  
    const [firstInputStyle, setFirstInputStyle] =useState("")
    const [lastInputStyle, setLastInputStyle] =useState("")
    const [mailInputStyle, setMailInputStyle] =useState("")
    const [messageInputStyle, setMessageInputStyle] =useState("")
    const [inputDefault, setInputDefault]=useState("inputDefault")

    const intialValues = {
        firstName:"",
        lastName:"",
        email:"",
        message:"",

    };
    

    
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) =>{
        console.log(e.target)
        const {name,value} = e.target
        setFormValues({...formValues,[name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

  
    useEffect(() =>{
        if(Object.keys(formErrors).length === 0 && isSubmit){
        }
    }, [formErrors])

    
 

    const validate = (values)=> {
        const errors={}
       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
       if (!values.firstName){
        errors.firstName= "First Name is required"
        setFirstInputStyle("firstinputError")
       }else{
        setFirstInputStyle("")
       }

       if (!values.lastName){
        errors.lastName= "Last Name is required"
        setLastInputStyle("lastinputError")
       }else{
        setLastInputStyle("")
       }

       if (!values.email){
        errors.email= "Email is required"
        setMailInputStyle("mailinputError")

       }else if(!regex.test(values.email)){
            errors.email="This is not a valid email format!"
       }else{
        setMailInputStyle("")

       }


       if (!values.message){
        errors.message= "Please enter a message"
        setMessageInputStyle("messageinputError")
       }else{
        setMessageInputStyle("")

       }


       return errors;
    }
    const[btn ,setBtn]= useState(true)

    const ConfirmCheck = (e) => {
        const checked = e.target.checked;
        
        if (!checked) {
            setBtn(true)

        } else {
            setBtn(false)

        }           

    }
 
    return(
        
        <div className="body">
            {/* <pre>{JSON.stringify(formValues, undefined ,2)}</pre> */}
            <div className="form">
                <h1>Contact Me</h1>
                <p>Hi there,contact me to ask me about anything you have in mind</p>
                <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="field" id="firstfield" >
                            <label >  First name</label>
                            <input
                            id="first_name" 
                            count={"one"}
                            className={firstInputStyle}  

                            name="firstName" 
                            type={"text"} 
                            placeholder="Enter your first name"
                            value={formValues.firstName} 
                            onChange={handleChange}
                            />
                            <span>{formErrors.firstName}</span>

                        </div>
                        <div className="field" id="lastfield" >
                            <label>
                                Last name   
                            </label>
                            <input 
                            id="last_name" 
                            className={lastInputStyle}

                            name="lastName" 
                            type={"text"} 
                            placeholder="Enter your last name"
                            value={formValues.lastName} 
                            onChange={handleChange}
        
                            />
                             <span>{formErrors.lastName}</span>

                        </div>

                    </div>

                    <div className="field">
                        <label>
                            Email
                        </label>
                        <input 
                        id="email" 
                        className={mailInputStyle}
                        name="email" 
                        placeholder="yourname@email.com" 
                        type={"email"} 
                        value={formValues.email}
                        onChange={handleChange}
    
                        />
                        <p className="email-txt">This is a hint text to help the user</p>
                    </div>
                    <span>{formErrors.email}</span>

                
                <div className="field">
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea 
                    id="message"
                    className={messageInputStyle} 
                    name="message" 
                    placeholder="send me a message and I'll reply you as soon as possible ..." 
                    value={formValues.message}
                    onChange={handleChange}

                    />
                </div>
                <span>{formErrors.message}</span>

                
                <div className="checkfield">
                    
                        <input   
                         onClick={(e) => {
                                ConfirmCheck(e);
                            }}
                         name="checkBox"
                          type={"checkbox"} />
                        <label>
                            You agree to providing your data to (name) who may contact you
                        </label>

                </div>
                    

                    <button disabled={btn} id="btn__submit">Send message</button>
                
                </form>
            </div>
        </div>
    )
}
export default ContactForm
