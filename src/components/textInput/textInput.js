import React, {useState} from 'react';
import {Rnd} from 'react-rnd';

const TextInput = () => {


	const [value, setValue] = useState('')
	const [editMode, setEditMode] = useState(true)

	const changeHandler = (e) => {
		setValue(e.target.value)
	}

	const editText = () => {
		setEditMode(true)
	}

	const closeEdit = () => {
		setEditMode(false)
	}


	return (
		<Rnd
			style={{border:'2px solid black'}}
			default={{
				x: 0,
				y: 0,
				width: 'auto',
				height: 'auto',
			}}
		>
			{editMode
				? <input autoFocus={true} type='text' value={value} onChange={changeHandler} onBlur={closeEdit}/>
				: <span style={{display:'block', width:'100%', height:'100%',
					border:'2px solid black', fontSize:'3vh'}} onDoubleClick={editText}>{value}</span>
			}
		</Rnd>
	)
}

export default TextInput