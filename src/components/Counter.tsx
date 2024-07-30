import { useState } from 'react';
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement, incrementBy } from '../redux/features/counter/counterSlice';

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0)
    return (
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <input
                type="number"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(Number(e.target.value))}
            />
            <button onClick={() => dispatch(incrementBy(incrementAmount))}>Increment By Amount</button>
        </div>
    )
}
