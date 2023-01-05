import { useEffect, useState } from 'react';
import './App.css';
import Tourmain from './components/Tourmain';
const url = `https://course-api.com/react-tours-project`

function App() {
  const [users,setuser] = useState([])

  function deleteuser(id){
    const deleteone = users.filter((user)=> user.id !== id);
    setuser(deleteone)
   }

  const getuser = async ()=>{
    const responce = await fetch(url);
    const users = await responce.json();
    setuser(users)
  };
  useEffect(()=>{
    getuser();
  },[])




  return (
    <main>
    <Tourmain tours={users} deleteuser={deleteuser}/>
    </main>
  );
}

export default App;
