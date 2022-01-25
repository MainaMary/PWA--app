import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addUser, deleteUser, updateUser } from "./redux/Users";

function App() {
  const dispatchAction = useDispatch();
  const usersList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [newuserName, setNewusername] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNewUserName = (e) => {
    setNewusername(e.target.value);
  };

  const newId = usersList.length && usersList[usersList.length - 1].id + 1;

  return (
    <div className="App">
      <div className ="wrapper">
        <h2>Books List</h2>
        <form
          className="add-user"
          onSubmit={(e) => {
            e.preventDefault();
            dispatchAction(addUser({ id: newId, name: name}));
          }}
        >
          <input type="text" palceholder="Add books..." onChange={handleName} />
          <button>Add Books</button>
        </form>
        <div className="display-users">
          {usersList.map((user) => {
            return (
              <div key={user.id}>
               <div className='text-content'>
               <p>{user.name}</p>
               
               </div>
              
                <input
                  type="text"
                  placeholder="Edit book..."
                  onChange={handleNewUserName}
                />

                <i
                  onClick={() => {
                    console.log(user.id, newuserName);
                    dispatchAction(
                      updateUser({
                        id: user.id,

                        name: newuserName,
                      })
                    );
                  }}
                  className="fas fa-user-edit"
                ></i>

                <i
                  onClick={() => {
                    dispatchAction(deleteUser({ id: user.id }));
                  }}
                  className="fas fa-trash-alt"
                ></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
