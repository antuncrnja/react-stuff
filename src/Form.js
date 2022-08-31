import {useState} from 'react';

const Form = () => {

	const [formData, setFormData] = useState({});
	const [checked, setChecked] = useState(false);

	const handleFormChange = (e) => {
			const name = e.target.name;
			const value = e.target.value;
			setFormData(values => ({...values, [name]: value, checkbox: checked}))
	}
  return (
	<div>
		<h1>React Form</h1>

		<form>
			<input type="text" placeholder="text" name="text" value={formData.text} onChange={handleFormChange}/><br />
			<input type="email" placeholder="email" name="email" value={formData.email} onChange={handleFormChange}/><br />
	
			<input type="checkbox" value="checked" name="checkbox" onChange={()=> {setChecked(oldValue => !oldValue)}}/><br />
		
			<fieldset value={formData.radio}>
				<input type="radio"  value="radio1" name="radio" onChange={handleFormChange}/>
				<input type="radio" value='radio2' name="radio" onChange={handleFormChange}/>
			</fieldset>

			<select name="select" value={formData.select} onChange={handleFormChange}>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
			</select><br /><br />

		</form>

		<h2>Form data</h2>
		<p>text: {formData.text}</p>
		<p>email: {formData.email}</p>
		<p>radio: {formData.radio}</p>
		<p>checkbox: {checked.toString()}</p>
		<p>Select: {formData.select}</p>
	</div>
  )
}
export default Form