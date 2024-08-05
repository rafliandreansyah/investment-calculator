import { useState } from 'react';

export default function Input({ labelName, onChangeInput }) {
    const [value, setValue] = useState('')

    function onChangedHandler(event) {
        setValue(event.target.value)
        onChangeInput(event.target.value)
    }

    return (
        <div>
            <label>{labelName}</label>
            <input type="number" value={value} onChange={onChangedHandler} required />
        </div>
    )
}