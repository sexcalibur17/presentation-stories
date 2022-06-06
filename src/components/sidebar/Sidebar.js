import React from 'react';
import {Wrapper} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {addStory, editSettings} from '../../store/mainReducer';

const Sidebar = (props) => {

	const {visible, setVisible} = props


	const dispatch = useDispatch()
	const settings = useSelector(state => state.main.settings)
	const stories = useSelector(state => state.main.stories)


	const addSlide = () => {
		const newStory = {
			id:Date.now()
		}
		dispatch(addStory(newStory))
	}

	const togglePlaying = () => {
		dispatch(editSettings('isPlaying',!settings.isPlaying))
	}


	const changeHandler = (e) => {
		const propName = e.target.name
		const value = e.target.value
		dispatch(editSettings(propName, value))
	}

	const closeSettings = () => {
		setVisible(prev=> !prev)
	}

	return (
		<Wrapper visible={visible}>
			<div style={{margin: "0 0 0 auto"}}>
				<button onClick={closeSettings}>x</button>
			</div>
			<label>
				width:
				<input name='width' type='number' value={settings.width} onChange={changeHandler}/>
			</label>
			<label>
				username:
				<input name='username' type='text' value={settings.username} onChange={changeHandler}/>
			</label>
			<label>
				image:
				<input name='imgSrc' type='text' value={settings.imgSrc} onChange={changeHandler}/>
			</label>
			<button onClick={addSlide}>Add story</button>
			<button disabled={stories.length<2} onClick={togglePlaying}> {settings.isPlaying ? 'pause' : 'play'} </button>
		</Wrapper>
	)
}
export default Sidebar