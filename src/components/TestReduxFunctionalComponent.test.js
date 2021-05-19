import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react'
import reducer from '../store/reducers'
import TestReduxFunctionalComponent from './TestReduxFunctionalComponent'

const renderWithRedux = (
	component,
	{ initialState, store = createStore(reducer, initialState) } = { count: { count: 0 } }
) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	}
}

describe('<TestReduxFunctionalComponent />', () => {
	afterEach(cleanup)

	it('checks initial state is equal to 0', () => {
		const { getByTestId } = renderWithRedux(<TestReduxFunctionalComponent />)
		expect(getByTestId('counter')).toHaveTextContent('0')
		expect(getByTestId('counter-multiplied')).toHaveTextContent('0')
	})

	it('increments the counter through redux', () => {
		const { getByTestId } = renderWithRedux(<TestReduxFunctionalComponent />, {
			initialState: { count: { count: 5 } },
		})
		fireEvent.click(getByTestId('button-up'))
		expect(getByTestId('counter')).toHaveTextContent('6')
		expect(getByTestId('counter-multiplied')).toHaveTextContent('60')
	})

	it('decrements the counter through redux', () => {
		const { getByTestId } = renderWithRedux(<TestReduxFunctionalComponent />, {
			initialState: { count: { count: 100 } },
		})
		fireEvent.click(getByTestId('button-down'))
		expect(getByTestId('counter')).toHaveTextContent('99')
		expect(getByTestId('counter-multiplied')).toHaveTextContent('990')
	})
})
