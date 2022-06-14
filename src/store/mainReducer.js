const ADD_STORY = 'ADD_STORY'
const EDIT_SETTINGS = 'EDIT_SETTINGS'
const EDIT_STORY = 'EDIT_STORY'

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
		case EDIT_STORY: return {
			...state,
			stories: state.stories.map(story=>{
				if(action.payload.id === story.id){
					return {
						...story,
						images:[...story.images ,action.payload.src]
					}
				}
				return story
			})
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

export const editStory = (id, src) => ({
	type:EDIT_STORY,
	payload: {
		id,
		src
	}
})
