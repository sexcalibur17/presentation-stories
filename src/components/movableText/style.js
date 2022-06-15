import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative`

const TextInput = styled.textarea`
  position: absolute;
  top: ${props => props.top+'px'};
  left: ${props => props.left+'px'};
`

export {TextInput, Wrapper}