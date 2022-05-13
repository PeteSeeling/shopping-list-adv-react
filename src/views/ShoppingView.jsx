import { ItemList } from '../components/Items/ItemList';
import { getList } from '../context/ListContext';

export function Shopping(){
    const { items, addItem, boughtItem, deleteItem, clearList } = getList()

    return(
        <>
        
        <ItemList items={items} onChangeItem={boughtItem} onDeleteItem={deleteItem} />
        
        </>
    )
}