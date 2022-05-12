import { Item } from './ItemDetail';

export function ItemList({ items, changeItem, deleteItem }){
    return(
        <ul>
        {items.map((item) => (
            <li key={item.id}>
            <Item item={item}
            onChange={changeItem}
            onDelete={deleteItem} 
            />
            </li>
        ))}
        </ul>
    )
}