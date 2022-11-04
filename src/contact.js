import React, { useState , useEffect } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes , Route } from "react-router-dom";
import "./contact.css"
function ContactForm(props) {
  
    const [firstInputStyle, setFirstInputStyle] =useState("")
    const [lastInputStyle, setLastInputStyle] =useState("")
    const [mailInputStyle, setMailInputStyle] =useState("")
    const [messageInputStyle, setMessageInputStyle] =useState("")

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

    const[formSubmit,setFormSubmit]=useState("failed")


    

  
    useEffect(() =>{
        if(Object.keys(formErrors).length === 0 && isSubmit){
            setFormSubmit("success")
        }else if(Object.keys(formErrors).length > 0){
            setFormSubmit("failed")
    }}, [formErrors])

    


    const validate = (values)=> {

        const errors=[]
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

    
    let name = "Gbadeyan Daniel"
    return(
        
        <div className="body">
            {/* <pre>{JSON.stringify(formValues, undefined ,2)}</pre> */}
            <div className="form">
               
                <h1>Contact Me</h1>
                <p>Hi there,contact me to ask me about anything you have in mind</p>
                <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="field" id="firstfield" >
                            <label  htmlFor="first_name">  First name</label>
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
                            <label htmlFor="last_name">
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
                        <label htmlFor="email">
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
                         id="check_box"
                          type={"checkbox"} />
                        <label htmlFor="check_box">
                            You agree to providing your data to {name} who may contact you
                        </label>

                </div>
                    

                    <button disabled={btn} type="submit" id="btn__submit">Send message</button>
                    <div  className={formSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>

                    <h1>Submitted</h1>

                </div>
                </form>
            </div>
        </div>
    )
}
export default ContactForm
