import { useState } from 'react';

export function Item({ item, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let listItem;

    if(isEditing){
        listItem =(
            <form 
                onSubmit={(e) =>{
                    e.preventDefault()
                    setIsEditing(false)
                }}>

                    <input
                        value={item.text}
                        aria-label='input field'
                        placeholder='Input'
                        onChange={(e) => {
                        onChange({
                            ...item,
                            text: e.target.value
                        })
                        }}
                        />
                    <button aria-label='submit item change'>
                        Submit Item Change
                    </button>
                </form>
        )
    } else {
        listItem = (
            <>
            <p>{item.text}</p>
            <button
            aria-label={`${item.text}-edit`}
            onClick={() => setIsEditing(true)}
            >Edit</button>
            </>
        )
    }
    return(
        <div>
    <input
    type='checkbox'
    checked={item.done}
    onChange={(e) => {
        onChange({
            ...item,
            done: e.target.checked,
        })
    }}
    />
    { listItem }
    <button
    type='button'
    onClick={() => onDelete(item.id)}
    aria-label={`${item.text}-delete`}
    >
        Delete 
    </button>
    </div>
    )} 