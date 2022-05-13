import { useState } from 'react'

export default function AddItemToList({ addItem }) {
    const [text, setNewText] = useState('')

    const submitItem = (e) => {
        e.preventDefault()
        addItem(text)
        setNewText('')

    }

    return(
        <form onSubmit={submitItem}>
            <input
            placeholder='Add New Item Here'
            value={text}
            onChange={(e) => setNewText(e.target.value)} />
            
            <button
            type='submit'>
                Add New Item
            </button>
        </form>
    )
}