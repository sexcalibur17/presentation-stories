import React from 'react';
import {DirectionButton, Slide} from './style';


const StoriesItem = (props) => {

	const {setCurrent,last,index,settings,isCurrent,setHolding} = props
	const {width} = settings

	const prev = () => {
		setCurrent(index)
	}

	const next = () => {
		setCurrent(index+2)
	}

	const stopScroll = () => {
		if(isCurrent){
			setHolding(true)
		}
	}

	const continueScroll = () => {
		if(isCurrent){
			setHolding(false)
		}
	}

	return (
		<Slide width={width} onMouseDown={stopScroll} onMouseUp={continueScroll}>
			{settings.username}
			{isCurrent && <DirectionButton position={'left'} disabled={index === 0} onClick={prev}>{`<`}</DirectionButton>}
			{isCurrent && <DirectionButton position={'right'} disabled={last} onClick={next}>{`>`}</DirectionButton>}
		</Slide>
	)
}


export default StoriesItem