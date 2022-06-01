import styled from 'styled-components';

const Wrapper = styled.aside`
  min-height: 100vh;
  border: 2px solid black;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  left: ${props => props.visible ? '0' : '-380px'};
  transition: left 0.5s ease;
  background-color: #808080;
`

export {Wrapper}