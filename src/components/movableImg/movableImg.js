import {Rnd} from 'react-rnd';
import React from 'react';

const MovableImg = ({imgSrc}) => {
	return (
	<Rnd
		style={{border:'2px solid black'}}
		default={{
			x: 0,
			y: 0,
			width: 'auto',
			height: 'auto',
		}}
		minWidth={100}
		minHeight={100}
		lockAspectRatio={true}
	>
		<img draggable={false} style={{width:'100%', height:'100%'}} src={imgSrc} alt={'stories'}/>
	</Rnd>
	)
}

export default MovableImg