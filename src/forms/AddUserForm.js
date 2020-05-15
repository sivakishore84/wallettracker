import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, date: '', description: '', income:'', amount:'' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.date || !user.description || !user.income ||!user.amount ) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Date</label>
			<input type="date" name="date" value={user.date} onChange={handleInputChange} />
			<label>Description</label>
			<input type="text" name="description" value={user.description} onChange={handleInputChange} />
			<label>Income/Expense</label>
			<input type="text" name="income" value={user.income} onChange={handleInputChange} />
			<label>Amount</label>
			<input type="number" name="amount" value={user.amount} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
