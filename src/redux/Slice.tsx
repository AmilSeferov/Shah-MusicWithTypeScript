import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stateType } from '../types/types'



const initialState:stateType = {
  isLoading:false,
  error:false,
  data:[],
  menu:true,
  addPlayList:false

}

export const counterSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setmenu:(state)=>{
     state.menu=!state.menu
    },
    setAddList:(state)=>{
 state.addPlayList=!state.addPlayList
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {setmenu, setAddList } = counterSlice.actions

export default counterSlice.reducer