import { useEffect, useState } from 'react';

export function Item({ item, onChange, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
 
    
    let listItem;

    if(isEditing){
        listItem =(
            <Form 
                onSubmit={(e) =>{
                    e.preventDefault()

                    setIsEditing(false)
                }}>
                    <input
                        value={item.text}
                        aria-label='input field'
                        placeholder='Input'
                        onChange={(e) => {
                        onUpdate({
                            ...item,
                            text: e.target.value
                        })
                        }}
                        />
                    <button aria-label='submit item'>
                        Add Item
                    </button>
                </Form>
        )
    } else {
        listItem = (
            <>
            <p>{item.text}</p>
            <button
            onClick={() => setIsEditing(true)}
            >Edit</button>
            </>
        )
    }
    return(
    <input
    type='checkbox'
    checked={item.done}
    onChange={(e) => {
        onUpdate({
            ...item,
            done: e.target.checked,
        })
    }}
    />
     ); {listItem}
    <button
    type='button'
    onClick={() => onDelete(item.id)}
    aria-Label='delete button'
    >
        Delete 
    </button>
}