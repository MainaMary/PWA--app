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
      console.log( {state: state.value})
      console.log({ payload: action.payload })
        state.value.map((user)=>{
            //console.log(`user updated ${user.id}  ${action.payload.name}`)
            if(user.id === action.payload.id){
              user.name = action.payload.name
            }
            

            return user
        }
        )
    }
   
  },
});
export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
