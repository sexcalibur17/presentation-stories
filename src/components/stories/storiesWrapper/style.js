import styled from 'styled-components';

const gap = 20

const Wrapper = styled.div`
  display: flex;
  //overflow: hidden;
  position: absolute;
  left: 50%;
  gap: ${gap}px;
  transform: translateX(-${props => props.width / 2 - gap}px);
  margin-left: -${props => ((props.current - 1) * props.width) + (gap * props.current)}px;
  transition: margin-left 0.3s ease;
`

export {Wrapper}