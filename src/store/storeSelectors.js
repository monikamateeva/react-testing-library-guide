import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

export const getCount = state => state.count.count

const getOwnPropsMultiplier = (_, multiplier) => multiplier

export const useCountSelector = () => useSelector(state => getCount(state))

const makeMultipliedSelector = () =>
	createSelector([getCount, getOwnPropsMultiplier], (count, multiplier) => count * multiplier)

export const useMultipliedSelector = multiplier => {
	const multipliedSelector = useMemo(makeMultipliedSelector, [])
	return useSelector(state => multipliedSelector(state, multiplier))
}
