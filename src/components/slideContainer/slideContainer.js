import React, {useState} from 'react';
import {StyledContainer} from './style';
import Slide from './slide/Slide';

const SlideContainer = (props) => {

	const {stories,width} = props

	const [current, setCurrent] = useState(1)


	return (
		<StyledContainer current={current} width={width}>
			{stories && stories.map((story,index) => <Slide index={index}
															setCurrent={setCurrent}
															isCurrent={current === index+1}
															last={index === stories.length-1}
															key={story.id}
															width={width}/>)}
		</StyledContainer>
	)
}

export default SlideContainer