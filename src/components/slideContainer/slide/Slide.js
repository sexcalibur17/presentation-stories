import React from 'react';
import {SlideContainer} from './style';


const Slide = (props) => {

	const {setCurrent,last,index,width,isCurrent} = props

	const prev = () => {
		setCurrent(index)
	}

	const next = () => {
		setCurrent(index+2)
	}


	return (
		<SlideContainer width={width}>
			{isCurrent && <button disabled={index === 0} onClick={prev}>{`<`}</button>}
			{index+1}
			{isCurrent && <button disabled={last} onClick={next}>{`>`}</button>}
		</SlideContainer>
	)
}


export default Slide