import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px;
  height: 20px;
  background-color: black;
  color: white;
  position: absolute;
  // pointer-events: ${props =>props.holding ? 'none' : 'auto'};
  pointer-events: auto;
`

export {Wrapper}