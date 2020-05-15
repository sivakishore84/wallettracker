import React from 'react'

const UserTable = props => (
  <table className="ml-4">
    <thead>
      <tr>
        <th>S.No.</th>
        <th>Date</th>
        <th>Description</th>
        <th>Income/Expense</th>
        <th>Amount</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.date}</td>
            <td>{user.description}</td>
            <td>{user.income}</td>
            <td>{user.amount}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={6}>No users</td>
          </tr>
        )}
    </tbody>
  </table>
)

export default UserTable
