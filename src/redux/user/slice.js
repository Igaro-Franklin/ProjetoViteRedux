import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: { 
    
    createUser: (state, action) => { 

      return { 
            ...state,
            user:{
                name: action.payload.name,
                email: action.payload.email,
                address:  null,
            }
        };

    },
    logoutUser: (state) =>{
      return {
        ...state,
        user:null,
      }
    },
    addAddress: (state, action) =>{
      if(action.payload.location === "" || action.payload.number === ""){
        alert("Preencha todoas os campos")
        return{...state}
      }

      if(state.user === null){
        alert("Faça o login para cadastrar um enderreço")

        return {...state}
      }

      alert("Dados atualizados com sucesso!")
      return{
        ...state,
        user: {
          ...state.user,
          address:{
            location: action.payload.location,
            number: action.payload.number,
          }
        }
      }
    },
    deleteAddress: (state) =>{
      return{
        ...state,
        user:{
          ...state.user,
          address: null,
        }
      }
    }
  }
})

export const { createUser, logoutUser, addAddress, deleteAddress } = userSlice.actions;

export default userSlice.reducer;
