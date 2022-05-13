import Header from './components/Header';
import { ListProvider } from './context/ListContext';
import { Shopping } from './views/ShoppingView';


export default function App() {
  return (
    <div>
      <ListProvider>
    <Header />
    <Shopping />
    </ListProvider>
    </div>
  );


}
