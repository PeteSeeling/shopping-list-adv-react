import { getList } from "../context/ListContext"

export default function Header(){
    const { clearList, items } = getList()

    return(
        <><h1>Shopping List App</h1><hr />
        <section>Total Items: <span>{items.length}</span>{' '}
            <button onClick={clearList}>Clear Cart</button>
        </section>
        </>

    )
}