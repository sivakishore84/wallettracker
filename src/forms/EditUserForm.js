import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  
  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Date</label>
      <input type="date" name="name" value={user.date} onChange={handleInputChange} />
      <label>Description</label>
      <input type="text" name="description" value={user.description} onChange={handleInputChange} />
      <label>Income/Expense</label>
      <input type="text" name="income" value={user.income} onChange={handleInputChange} />
      <label>Amount</label>
      <input type="number" name="amount" value={user.amount} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
