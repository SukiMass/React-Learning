import { useState } from "react";

function MyForm() {

    // const[name,setName] = useState("");
    // const[age,setAge] = useState("");
    // const[email,setEmail] = useState("");
    // console.log(`Current State ${name}`);
    const [inputs, setInputs] = useState({ Email: "@gmail.com", Country: "India",Phone: "+91",About: "Iam a Student" })

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form Submitted!')
        console.log("Your Details are ", inputs);
    }

    function handleChange(formValue) {
        const value = formValue.target.value;
        const name = formValue.target.name;
        setInputs((previousInput) => { return { ...previousInput, [name]: value } })
    }

    return <form onSubmit={handleSubmit}>

        <label>Enter your Name <input type="text" name="Name" onChange={handleChange} /></label><br />

        <label>Enter your Age <input type="text" name="Age" onChange={handleChange} /></label><br />

        <label>Enter your Email <input type="text" name="Email" onChange={handleChange} value={inputs.Email} /></label><br />

        <label>Enter your Phone Number <input type="text" name="Phone" onChange={handleChange} value={inputs.Phone} /></label><br />

        <label>Select your Country
            <select name="Country" value={inputs.Country} onChange={handleChange}>
                <option value="">Select</option>
                <option value="America">America</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Russia">Russia</option>
            </select>
        </label><br/>

        <label>Enter about you : <textarea value={inputs.About} name="About" onChange={handleChange} ></textarea> </label>
        <input type="submit" value="Submit Form" />
    </form>

}
export default MyForm;