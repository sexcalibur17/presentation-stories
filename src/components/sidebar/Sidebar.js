import React, {useState} from 'react';
import {Wrapper} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {addStory, editSettings} from '../../store/mainReducer';
import ResizeTest from '../movableText/resizeTest';

const Sidebar = (props) => {

	const {visible, setVisible} = props

	const dispatch = useDispatch()
	const settings = useSelector(state => state.main.settings)
	const stories = useSelector(state => state.main.stories)


	//image input
	const [imgUrl, setImgUrl] = useState('')
	const [radioValue, changeRadioValue] = useState('file')

	const uploadFile = (e) => {
		const file = e.target.files[0]
		setImgUrl(URL.createObjectURL(file))
	}

	const onImgSrcChange = (e) => {
		changeRadioValue(e.target.value)
	}



	const addSlide = () => {
		const newStory = {
			id:Date.now(),
			images:[]
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
				<fieldset>
					<label>
						from file
						<input type="radio" checked={radioValue==='file'} value='file'  onChange={onImgSrcChange}/>
					</label>
					<label>
						from src
						<input type="radio" checked={radioValue==='text'} value='text' onChange={onImgSrcChange}/>
					</label>
					{radioValue==='file'
						? <input name="file" type="file" onChange={uploadFile}/>
						: <input name="imgSrc" type="text" value={settings.imgSrc} onChange={changeHandler}/>}
				</fieldset>
			</label>
			<button onClick={addSlide}>Add story</button>
			<button disabled={stories.length<2} onClick={togglePlaying}> {settings.isPlaying ? 'pause' : 'play'} </button>
			<ResizeTest/>
		</Wrapper>
	)
}
export default Sidebar

//TODO fix warn on image input