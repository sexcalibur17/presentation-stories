const ADD_STORY = 'ADD_STORY'
const EDIT_SETTINGS = 'EDIT_SETTINGS'

const InitialState = {
	settings:{
		username: '',
		imgSrc: '',
		width: 300,
		isPlaying: false
	},
	stories: []
}

export const mainReducer = (state=InitialState, action) => {
	switch (action.type){
		case ADD_STORY: return {
			...state,
			stories: [...state.stories, action.payload]
		}
		case EDIT_SETTINGS: return {
			...state,
			settings: {
				...state.settings,
				...action.payload}
		}
		default: return state
	}
}

export const addStory = (newBody) => ({
	type: ADD_STORY,
	payload: newBody
})

export const editSettings = (prop, value) => ({
	type: EDIT_SETTINGS,
	payload: {
		[prop]:value
	}
})
