import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import TodoBoard from './component/TodoBoard';

//1.인풋창이 있고 버튼이 있다.
//2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가 된다.
//3. 아이템 삭제버튼을 누르면 삭제가 가능하다.

function App() {
  const [inputvalue, setinputvalue] = useState('')
  //배열을 저장하는 useState
  const[todoList, setTodoList] = useState([])
  const addItem=()=>{
    //클릭하면 아이템 추가 
    //어디다가? 배열에다가~ 
    setTodoList([...todoList, inputvalue])
    // ...(기존꺼 유지하고 새로 추가한다는 뜻)
  }
  return (
    <main>
      {/* 인풋창에서 입력한 값 저장해주기 */}
    <input value = {inputvalue} type="text" onChange={(event)=>setinputvalue(event.target.value)}/>
    <button onClick={addItem}>추가 </button>
    {/* 저장한거 전달하기-> props */}
    <TodoBoard todoList={todoList}/>
    </main>
  );
}

export default App;
