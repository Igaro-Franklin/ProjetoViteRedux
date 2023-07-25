import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reduces:{

    }
})
export default userSlice.reducer;