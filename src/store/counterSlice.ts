import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice ({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increase(state: any, action: any){
             state.count++
            },
        decrease(state: any, action: any){
            state.count--
           }
    }
})

export const { increase, decrease } = counterSlice.actions
export default counterSlice.reducer