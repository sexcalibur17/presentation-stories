import React from 'react';
import {
	AddButton,
	AltAvatar,
	ButtonWrapper,
	DirectionButton, HeaderInfo,
	HeaderSettings,
	ProfileAvatar,
	Slide,
	StoryHeader
} from './style';
import MovableImg from '../../movableImg/movableImg';
import {useDispatch} from 'react-redux';
import {editStory} from '../../../store/mainReducer';
import add from '../../../assets/icons/addStory.svg'


const StoriesItem = (props) => {

	const {setCurrent,last,index,settings,isCurrent,setHolding,story} = props
	const {width, imgSrc:profileImgSrc} = settings
	const {id, images} = story

	const dispatch = useDispatch()

	const prev = () => {
		setCurrent(index)
	}

	const next = () => {
		setCurrent(index+2)
	}

	const stopScroll = () => {
		if(isCurrent){
			setHolding(true)
		}
	}

	const continueScroll = () => {
		if(isCurrent){
			setHolding(false)
		}
	}

	const uploadFile = (e) => {
		const file = e.target.files[0]
		console.log(file)
		const newImg = {
			id: Date.now(),
			src:URL.createObjectURL(file)
		}
		dispatch(editStory(id, newImg))
	}


	return (
		<Slide isCurrent={isCurrent} width={width} onMouseDown={stopScroll} onMouseUp={continueScroll}>
			<StoryHeader>
				<HeaderInfo>
					{profileImgSrc ? <ProfileAvatar src={profileImgSrc} alt={'avatar'}/> : <AltAvatar/>}
					{settings.username}
				</HeaderInfo>
				<HeaderSettings>
					{isCurrent && <ButtonWrapper>
						<AddButton type='file' onChange={uploadFile}/>
						<img src={add} alt=""/>
					</ButtonWrapper>}
				</HeaderSettings>
			</StoryHeader>
			<div>
				{Boolean(images.length) && images.map(image=>{
					return <MovableImg imgSrc={image.src} key={image.id}/>
				})}
			</div>
			{isCurrent && <DirectionButton position={'left'} disabled={index === 0} onClick={prev}>{`<`}</DirectionButton>}
			{isCurrent && <DirectionButton position={'right'} disabled={last} onClick={next}>{`>`}</DirectionButton>}
		</Slide>
	)
}


export default StoriesItem