import React from "react";
import { useState } from "react";
import logo from './logo.svg';  

function Form(){

const [formData,setFormData] = useState({});

const handleChange = (e) => {
const name = e.target.name
const value = e.target.value
setFormData(values => ({...values , [name]: value}))
}


const handleSubmit = (e) =>{e.preventDefault()
localStorage.setItem(formData.email, JSON.stringify(formData));

}


return (
    <><div className="container"><div className="left"><img src={logo} className="App-logo" alt="logo" /></div><div className="right"><img src={logo} className="App-logo" alt="logo" /></div>
    <form className="myForm"><header>React localStorage Form</header>
<label>Name:</label><input  className='input' type = 'text' name = 'firstname' value = {formData.firstname}  onChange={handleChange} /><br/> 
<label>Surname:</label><input  className='input' type = 'text' name = 'lastname' value = {formData.lastname}  onChange={handleChange} /><br/> 
<label>Id Number:</label><input  className='input' type = 'text' name = 'idNumber' value = {formData.idNumber}  onChange={handleChange} /><br/> 
<label>Email Address:</label><input  className='input' type = 'text' name = 'email' value = {formData.email}  onChange={handleChange} /><br/> 
<label>Residenstial Address:</label><input  className='input' type = 'text' name = 'address' value = {formData.address}  onChange={handleChange} /><br/> 
<br/>
<label></label>User Description:<textarea type = 'textarea' name = 'description' value = {formData.description}  onChange={handleChange} /><br/> 

<button className="submit" type="submit" onClick={handleSubmit}>Submit</button>
    </form></div>
    </>
)





}
export default Form