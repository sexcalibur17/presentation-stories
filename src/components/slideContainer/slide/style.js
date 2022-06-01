import styled from 'styled-components';


const SlideContainer = styled.div`
  border: 2px solid black;
  min-width: ${props => props.width ? props.width+'px' : '300px'};
  height: ${props => props.height ? props.height+'px' : '600px'};
`

export { SlideContainer }