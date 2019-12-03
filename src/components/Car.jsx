import React from 'react'
import '../css/uscars.css'

function Car (props) {
    const { car: { id, VIN, stateNum, owner, maker, model, color }, onCarClick } = props
    return <ul className="list-bg" style={{ margin: '20px', listStyle: 'none' }}
        onClick={() => onCarClick(id)}>
        <li>id: {id}</li>
        <li>VIN: {VIN}</li>
        <li>სახელმწიფო ნომერი: {stateNum}</li>
        <li>მფლობელი: {owner}</li>
        <li>მარკა: {maker}</li>
        <li>მოდელი: {model}</li>
        <li>ფერი: {color}</li>
    </ul>
}

export default Car;