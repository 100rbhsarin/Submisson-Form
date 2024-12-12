import './FormFile.css'






export const Form = ()=>{


    return(
        <>
        <div className="main-form">
            <div className="heading">
                <h1>Form In react</h1>
            </div>
            <fieldset>
<form action="">

    <label for="firstname">
First Name
    </label>

<input 
type="text"
id='FirstName'
name="FirstName"
// value={firstName}
// onChange={}
placeholder='First Name'
required
/>

<br />

<label for="Lastname">
Last Name
    </label>

<input 
type="text"
id='LastName'
name="LasstName"
// value={firstName}
// onChange={}
placeholder='Last Name'
required
/>

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
/>

<br/>
<label for="Contact">
Contact
    </label>
<input 
type="contact"
id='contact'
name="contact"
// value={firstName}
// onChange={}
placeholder='contact'
required
/>

<br/>

<label for="gender">Gender</label>
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











</form>
</fieldset>
 </div>
        </>
    )
}