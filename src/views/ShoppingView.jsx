import ItemList from '../components/Items/ItemList';
import { getList } from '../context/ListContext';
import AddItemToList from '../components/Items/AddItem';

export function Shopping(){
    const { items, handleAddItem, boughtItem, deleteItem, clearList } = getList()

    return(
        <>
        <AddItemToList addItem={handleAddItem}/>
        <ItemList items={items} changeItem={boughtItem} deleteItem={deleteItem} />
        
        </>
    )
}