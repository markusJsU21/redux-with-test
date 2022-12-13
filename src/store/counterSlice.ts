import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice ({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increase: state => {
             state.count++
            },
        decrease: state => {
            state.count--
           },
           increaseByX(state, action){
            state.count += action.payload
           }
    }
})

export const { increase, decrease, increaseByX } = counterSlice.actions
export default counterSlice.reducer