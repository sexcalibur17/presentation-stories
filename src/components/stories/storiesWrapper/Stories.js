import React, {useEffect, useState} from 'react';
import {Wrapper} from './style';
import StoriesItem from '../storiesItem/StoriesItem';
import {useDispatch, useSelector} from 'react-redux';
import {editSettings} from '../../../store/mainReducer';

const Stories = () => {

	const settings = useSelector(state => state.main.settings)
	const stories = useSelector(state => state.main.stories)
	const dispatch = useDispatch()

	const [current, setCurrent] = useState(1)
	const [isHolding, setHolding] = useState(false)

	useEffect(() => {
		const timerId = setInterval(() => {
			if (settings.isPlaying && (current < stories.length)) {
				setCurrent(prevState => prevState + 1)
			}
			if (settings.isPlaying && (current === stories.length)){
				dispatch(editSettings('isPlaying',false))
				setCurrent(1)
			}
		}, 2000)
		if (isHolding) {
			clearInterval(timerId)
		}
		return () => {
			clearInterval(timerId)
		}
	}, [isHolding, current, stories.length, settings.isPlaying, dispatch])



	return (
		<Wrapper current={current} width={settings.width}>
			{stories && stories.map((story, index) => <StoriesItem index={index}
																   story={story}
																   setCurrent={setCurrent}
																   setHolding={setHolding}
																   isCurrent={current === index + 1}
																   last={index === stories.length - 1}
																   key={story.id}
																   settings={settings}/>)}
		</Wrapper>
	)
}

export default Stories