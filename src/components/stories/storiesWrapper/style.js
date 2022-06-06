import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  left: 50%;
  transform: translateX(-${props => props.width/2}px);
  margin-left: -${props => (props.current-1)*props.width}px;
  transition: margin-left 0.3s ease;
`

export {Wrapper}