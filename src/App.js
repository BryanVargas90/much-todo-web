import {useState} from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';

function App() {

const [loading, setLoading ] = useState(true)
const [itemList, setItemList] = useState ()

  return (
    <main>
     <h1>Much Todo</h1>
     <Header setLoading={setLoading} setItemsList={setItemList}/>
     <TodoList 
     itemList={itemList} 
     setItemList={setItemList} 
     loading={loading} 
     setLoading={setLoading} 
     />
    </main>
  );
}

export default App;
