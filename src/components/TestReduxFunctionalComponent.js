import React from 'react'
import { useDispatch } from 'react-redux'
import { useCountSelector, useMultipliedSelector } from '../store/storeSelectors'

const TestReduxFunctionalComponent = () => {
	const dispatch = useDispatch()
	const counter = useCountSelector()
	const counterMultiplied = useMultipliedSelector(10)
	const increment = () => dispatch({ type: 'INCREMENT' })
	const decrement = () => dispatch({ type: 'DECREMENT' })

	return (
		<>
			<h1 data-testid='counter'>{counter}</h1>
			<h2 data-testid='counter-multiplied'>{counterMultiplied}</h2>
			<button data-testid='button-up' onClick={increment}>
				Up
			</button>
			<button data-testid='button-down' onClick={decrement}>
				Down
			</button>
		</>
	)
}

export default TestReduxFunctionalComponent
