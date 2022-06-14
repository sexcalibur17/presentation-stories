import React, {useState} from 'react';
import {Wrapper} from './style';

const Movable = () => {

	const [holding, setHolding] = useState(false)
	const [diff, setDiff] = useState({x:0, y:0})
	const [coordinates, setCoordinates] = useState({top:0, left:0})

	const holdHandler = (e) => {
		setDiff({
			x:e.screenX - e.currentTarget.getBoundingClientRect().left,
			y:e.screenY - e.currentTarget.getBoundingClientRect().top
		})
		setHolding(true)
	}

	const unHoldHandler = (e) => {
		setHolding(false)
		console.log('stop holding')
	}
	const moveHandler = (e) => {
		if(holding){
			setCoordinates({
				top: e.screenY - diff.y,
				left: e.screenX - diff.x
			})
		}
	}

	const mouseLeave = (e) => {
		setHolding(false)
	}

	return (
		<Wrapper
			onMouseDown={holdHandler}
			onMouseUp={unHoldHandler}
			onMouseMove={moveHandler}
			onMouseLeave={mouseLeave}
			style={coordinates}
			top={coordinates.top} left={coordinates.left}
			holding={holding}
		>
			Move me
		</Wrapper>
	)
}

export default Movable