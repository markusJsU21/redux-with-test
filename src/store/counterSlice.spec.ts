import reducer, {increase, decrease, increaseByX} from './counterSlice'

describe('counterSlice', () => {

    it("should return the initial state", () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
            count: 0
        })
    })

    it('increase by one when dispatch increase', () => {
        const previousState = { count: 5 };
        expect(reducer(previousState, increase())).toEqual({
            count: 6
        })
    })
    it('decrease by one when dispatch decrease', () => {
        const previousState = { count: 5 };
        expect(reducer(previousState, decrease())).toEqual({
            count: 4
        })
    })
    it('should increase state count by X amount', () => {
        const previousState = { count: 5 };
        expect(reducer(previousState, increaseByX(5))).toEqual({
            count: 10
        })
    })
    it('should decrease state count by X amount when passed a negative number', () => {
        const previousState = { count: 5 };
        expect(reducer(previousState, increaseByX(-5))).toEqual({
            count: 0
        })
    })
})