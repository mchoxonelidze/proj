import React from 'react'
import '../css/uscars.css'

function User(props) {
    const { user: { id, name, lastName, idNum, fname, email, date }, onUserClick } = props
    return <ul className="list-bg" style={{ margin: '20px', listStyle: 'none' }}
        onClick={() => onUserClick(id)}>
        <li >id: {id}</li>
        <li >სახელი: {name}</li>
        <li >გვარი: {lastName}  </li>
        <li >პირადი ნომერი: {idNum} </li>
        <li >მამის სახელი: {fname}  </li>
        <li >მეილი: {email} </li>
        <li >დაბადების თარიღი: {date} </li>
        <li> მანქანა: აქ უნდა ჩანდეს რომელი მანქანაა მისი</li>
    </ul>
}

export default User;