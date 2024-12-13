import { useState } from 'react'
import './FormFile.css'






export const Form = ()=>{

    const [user, setUser] = useState({
        firstName : "",
})

const handleInputChange = (event)=>{
    console.log(handleInputChange)
    const {name, value} = event.target
    setUser((prev) =>({...prev,[name]:value}))
}

 const handleFormSubmit =(e)=>{
  e.preventDefault()
  console.log(user)

 }

    return(
        <>
        <div className="main-form">

            <div className="heading">
                <h1>Form In react</h1>
            </div>

            <fieldset>
     <form onClick={handleFormSubmit} >

    <label htmlFor="firstname">
First Name
    </label>

<input 
type="text"
id='firstName'
name="firstName"
value={user.firstName}
onChange={handleInputChange}
placeholder='First Name'
required
/>

<br />

<label htmlFor="Lastname">
Last Name
    </label>

<input 
type="text"
id='LastName'
name="LasstName"
value={user.LastName}
onChange={handleInputChange}
placeholder='Last Name'
required
/>
{/* 
<br />

<label for="Email">
First Name
    </label>

<input 
type="email"
id='email'
name="email"
// value={firstName}
// onChange={}
placeholder='email'
required
/> */}

{/* <br/>
<label for="Contact">
Contact
    </label>
<input 
type="contact"
id='contact'
name="contact"
value={firstName}
onChange={}
placeholder='contact'
required
/>

<br/>  */}

{/* <label for="gender">Gender</label>
<input 
type='radio'
name='gender'
checked
id='male'
value="male"
// onChange={}
/>
Male 
<input
type='radio'
name='gender'
id='female'
checked
value="female"
// onChange={}
/>
Female 

<input
type='radio'
name='gender'
id='other'
checked
value="other"
// onChange={}
/>
other
<br />
<label for="Lang">Your Best Subject</label>
<input 
type='checkbox'
name='lang'
checked
id='english'
// value="english"
// onChange={}
/>
English

<input 
type='checkbox'
name='lang'
checked
id='maths'
value=""
// onChange={}
/>
Maths
<input 
type='checkbox'
name='lang'
checked
id='physics'
value="male"
// onChange={}
/>
Physics 

<br />
<label for="file">uplord Resume</label>
<input 
type='file'
name='file'
id='file'
// onChange={}
placeholder='Enter Upload File'
required
/>


<label for="url">Enter URL</label>
<input 
type='url'
name='url'
id='url'
// onChange={}
placeholder='Enter url'
required
/>
<br />
<label htmlFor="select">Select Your Choice</label>
      <select
        name="select"
        id="select"
        // value={selectedValue}
        // onChange={handleChange}
      >
        <option value="" disabled>
          Select your answer
        </option>
        <optgroup label="Beginners">
          <option value="1">HTML</option>
          <option value="2">CSS</option>
          <option value="3">JavaScript</option>
        </optgroup>
        <optgroup label="Advanced">
          <option value="5">Node</option>
          <option value="6">C</option>
          <option value="7">Java</option>
        </optgroup>
      </select>
      <br /> */}



<button type='submit'>Submit</button>



</form>
</fieldset>
 </div>
        </>
    )
}