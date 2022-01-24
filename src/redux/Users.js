import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./UsersData";
export const userSlice = createSlice({
  name: "users",
  initialState: { value: userData },
  reducers: {
    addUser: (state, action) => {
      //add a user to the state
      state.value.push(action.payload);
    },
    //delete user
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },


    updateUser: (state, action) =>{
        state.value.forEach((user)=>{
            console.log(`user updated ${user.id}  ${action.payload.name}`)
            
            const newUser =  user.name = action.payload.name
            const newName = user.id === action.payload.id ? newUser : null

            return newName
        }
        )
    }
   
  },
});
export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
