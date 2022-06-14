import styled from 'styled-components';


const Slide = styled.div`
  overflow: hidden;
  border: 2px solid black;
  border-radius: 5px;
  min-width: ${props => props.width ? props.width + 'px' : '300px'};
  height: ${props => props.height ? props.height + 'px' : '600px'};
  position: relative;
  transform: scale(${props => props.isCurrent ? '1.1' : '1'});
  transition: transform 0.35s ease;
`

const DirectionButton = styled.button`
  height: 30px;
  width: 30px;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  background: none;
  ${props => props.position}: 10px;
  top: 50%;
  transform: translateY(-50%);

  &:disabled {
    border: 2px solid #717171;
  }
`

const AddButton = styled.input`
  position: absolute;
  width:1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`

const ButtonWrapper = styled.label`
  cursor: pointer;
  border: 2px solid black;
  padding: 0;
  display: inline-block;
  position: relative;
`

const StoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  
`


const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const ProfileAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
const AltAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
`


const HeaderSettings = styled.div`
  display: flex;

`

export {Slide, DirectionButton, AddButton,
  ButtonWrapper, StoryHeader, ProfileAvatar,
  AltAvatar, HeaderInfo, HeaderSettings}