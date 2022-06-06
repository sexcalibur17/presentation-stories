import styled from 'styled-components';


const Slide = styled.div`
  border: 2px solid black;
  min-width: ${props => props.width ? props.width+'px' : '300px'};
  height: ${props => props.height ? props.height+'px' : '600px'};
  position: relative;
`

const DirectionButton = styled.button`
	height: 100%;
  	width: 50%;
  	position: absolute;
  	background: none;
  	${props => props.position}:0;
`

export { Slide, DirectionButton }