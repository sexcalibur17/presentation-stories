import React, {useEffect, useRef, useState} from 'react';
import {Rnd} from 'react-rnd';
import {TextInput, Wrapper} from './style';


const ResizeTest = () => {
	const [width, setWidth] = useState(10)
	const [height, setHeight] = useState(10)
	const [value, setValue] = useState('')
	const [editMode, setEditMode] = useState(true)
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)
	const [fz, setFz] = useState(18)
	const [ratio, setRatio] = useState(undefined)

	const textRef = useRef(null)

	const changeHandler = (e) => {
		setValue(e.target.value)
	}

	const editText = () => {
		setEditMode(true)
	}

	const closeEdit = () => {
		setEditMode(false)
	}

	useEffect(() => {
		const nextWidth = textRef.current.offsetWidth
		setWidth(nextWidth)
		setHeight(textRef.current.offsetHeight)
		const newRatio = nextWidth/fz
		if(!isNaN(newRatio) && newRatio>0){
			setRatio(newRatio)
		}
	}, [value, fz])


	useEffect(()=>{
		if(ratio){
			const elWidth = parseInt(width, 10)
			const fontsize = Math.round(elWidth/ratio)
			if(fontsize!==0){
				setFz(fontsize)
			}
		}
	},[width, ratio])



	return (
		<Wrapper>
				<TextInput top={y} left={x}
						   style={editMode ? {display:'block'} : {display: 'none'}} autoFocus={true} value={value} onChange={changeHandler} onBlur={closeEdit}/>
				<Rnd
					onDragStop={(e, d) => {
						setX(d.x)
						setY(d.y)
					}}
					style={editMode ? {visibility:'hidden', border: '2px solid black'} : {visibility:'visible', border: '2px solid black'}}
					size={{width: width, height: height}}
					onResize={(e, direction, ref) => {
						setWidth(ref.style.width)
						setHeight(ref.style.height)
					}}
					lockAspectRatio={true}
				>
					<span
						style={{fontSize:`${fz}px`}}
						ref={textRef} onDoubleClick={editText}>{value}</span>
				</Rnd>

		</Wrapper>
	);
}

export default ResizeTest