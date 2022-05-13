
import { createContext, useReducer, useEffect, useContext } from 'react'

const cachedItems = localStorage.getItem('list')
const initialItems = cachedItems
    ? JSON.parse(cachedItems)
    : [
        { id: 0, text: 'Beef', done: false},
        { id: 1, text: 'Fish', done: false},
        { id: 2, text: 'Tuna', done: false},
        { id: 3, text: 'Avacado', done: false},
    ]
const addToStorage = (list) => localStorage.setItem('list', JSON.stringify(list))

function reducer(items, action) {
    switch(action.type){
        case 'added' :{
            return [
                ...items,
                {
                    id: action.id,
                    text: action.text,
                    done:false,
                },
            ]
        }
        case 'bought' : {
            return items.map((item) => {
                if(item.id === action.job.id){
                    return action.job
                }
                return item
            })
        }
        case 'deleted':{
            return items.filter((item) => item.id !== action.id)
        }
        case 'clear': {
            return []
        }
    }
}

export const ListContext = createContext()

export const ListProvider = ({ children }) => {
    const [items, dispatch ] = useReducer(reducer, initialItems)

    useEffect(() => {
        addToStorage(items)
    })

    const handleAddItem = (text) => {
        dispatch({
            type: 'added',
            id: items.length,
            text,
        })
    }

    const boughtItem = (task) => {
        dispatch({
            type:'bought',
            id: jobId
        })
    }

    const deleteItem = (jobId) => {
        dispatch({
            type: 'deleted',
            id: jobId,
        })
    }

    const clearList = () => {
        dispatch({ type: 'clear' })
    }

    return (
        <ListContext.Provider
        value={{ items, handleAddItem, boughtItem, deleteItem, clearList }}
        >
            {children}
        </ListContext.Provider>
    )
}

export const getList = () => {
    const context = useContext(ListContext)

    if(!context)
    throw new Error('Need context')

    return context
}
