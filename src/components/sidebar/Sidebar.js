import React from 'react';
import {Wrapper} from './style';

const Sidebar = (props) => {

	const {setWidth, width, setStories, visible, setVisible} = props

	const changeHandler = (e) => {
		setWidth(e.target.value)
	}

	const addStory = () => {
		const newStory = {
			id:Date.now()
		}
		setStories(prev=>[...prev, newStory])
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
				<input type='number' value={width} onChange={changeHandler}/>
			</label>
			<button onClick={addStory}>Add story</button>
		</Wrapper>
	)
}
export default Sidebar