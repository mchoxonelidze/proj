import React from 'react'
import '../css/uscars.css'

const User = (props) => {
    const { user: { id, name, lastName, idNum, fname, Email, date }, onUserClick } = props
    return <ul className="list-bg" style={{ margin: '20px', listStyle: 'none' }}
        onClick={() => onUserClick(id)}>
        <li  key={id}>id: {id}</li>
        <li  key={name}>სახელი: {name}</li>
        <li  key={lastName}>გვარი: {lastName}  </li>
        <li  key={idNum}>პირადი ნომერი: {idNum} </li>
        <li  key={fname}>მამის სახელი: {fname}  </li>
        <li  key={Email}>მეილი: {Email} </li>
        <li  key={date}>დაბადების თარიღი: {date} </li>
    </ul>
}

export default User;