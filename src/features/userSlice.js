import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user: null,
        isLoggedIn: null
    },
    reducers: {
        login: (state, action)=>{
            state.user = action.payload;
            state.isLoggedIn = action.payload.isLoggedIn;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        }
    }
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state)=> state.user.user ;

export default userSlice.reducer;