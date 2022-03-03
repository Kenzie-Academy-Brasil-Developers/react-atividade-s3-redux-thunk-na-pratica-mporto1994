import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addCommentThunk } from './store/modules/user/thunks';

function App() {
  const [inputComent , setInputComent] = useState("")
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);

  return (
    <div className="App">
      {user.comments.map((comment)=><p>{comment}</p>)}
      <input onChange={(e)=>setInputComent(e.target.value)}/>
      <button onClick={()=>dispatch(addCommentThunk(inputComent))}>Gravar</button>
      
    </div>
  );
}

export default App;
