import {useState} from 'react';

const Form2 = () => {
	
	const [formData, setFormData] = useState({});
	const [checked, setChecked] = useState(false);

	const handleForm = (e) => {
		e.preventDefault();
		setFormData(values => ({...values, checked: checked}))

		console.log(formData)
		
		//Add formData to database

		
	}

	const handleFormChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData(values => ({...values, [name]: value}))
	}
  return (
	<div>
		<h1>onSubmit to console</h1>

		<form onSubmit={handleForm}>
			<input type="text" placeholder="text" name="text" value={formData.text ? formData.text : ''} onChange={handleFormChange}/><br />
			<input type="email" placeholder="email" name="email" value={formData.email ? formData.email : ''} onChange={handleFormChange}/>
				<br /><br />

				<input type="checkbox" value={checked} name="checkbox" onChange={ ()=> setChecked(oldValue => !oldValue) }/>
			
				<br /><br />
		
				<input type="radio" value="radio1" name="radio" onChange={handleFormChange} />
				<input type="radio" value="radio2" name="radio" onChange={handleFormChange} />
		
				<br /><br />

			<select name="select" onChange={handleFormChange}>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
			</select><br /><br />

			<button type="submit">Submit</button>
		</form>

	</div>
  )
}
export default Form2