import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {addUser, deleteUser, updateUser} from "./redux/Users"

function App() {
  const dispatchAction= useDispatch()
  const usersList = useSelector((state) => state.users.value);
  
  const [name, setName]= useState("")
  const [email, setEmail] = useState("")
  
  const handleName= (e)=>{
  setName(e.target.value)
  }
  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }

  
  const newId=  usersList.length && usersList[usersList.length -1].id + 1
  
   
  return (
    <div className="App">
      <div>
        <form className="add-user" onSubmit={(e)=>{e.preventDefault() 
        dispatchAction(addUser({id:newId , name:name, email: email}))
        }}>
          <input type="text" palceholder="Name"  onChange={handleName}/>
          <input type="text" placeholder="Email" onChange={handleEmail} />
          <button >Add user</button>
        </form>
        <div className="display-users">
          {usersList.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <input type="text" />
               
                <i 
                onClick={()=>{
                  dispatchAction(updateUser({
                    id: user.id,
                    name: name
                  }))
                }}
                className="fas fa-user-edit"></i>


                <i onClick= {()=>{
                  dispatchAction(deleteUser({id:user.id}))
                }}className="fas fa-trash-alt"></i>
               
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
