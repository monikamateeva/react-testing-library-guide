import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const logger = () => next => action => {
	// const logger = store => next => action
	const logMore = true

	if (logMore && action.debug) {
		console.group(action.type, '-----------', ...action.debug)
	} else {
		console.group(action.type)
	}
	const result = next(action)

	// console.log('next state', store.getState())
	// console.groupEnd(action.type)
	return result
}

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))
