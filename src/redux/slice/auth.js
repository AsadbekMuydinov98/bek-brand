import {createSlice} from '@reduxjs/toolkit'
import { setItem, removeItem } from '../../helpers/persistance-storage'

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signUserStart: state => {
			state.isLoading = true
		},
		profileUser: (state, action) => {
			state.loggedIn = true
			state.isLoading = false
			state.user = action.payload
		},
		signUserSuccess: (state, action) => {
			state.loggedIn = true
			state.isLoading = false
			state.user = action.payload.user
			setItem('accessToken', action.payload.accessToken)
		},
		signUserFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		logoutUser: state => {
			state.user = null
			state.loggedIn = false
			removeItem('accessToken')
		},
	},
})

export const {profileUser, signUserFailure, signUserStart, signUserSuccess, logoutUser} = authSlice.actions
export default authSlice.reducer