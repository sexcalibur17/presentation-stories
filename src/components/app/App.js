import './App.css'
import SlideContainer from '../slideContainer/slideContainer';
import Sidebar from '../sidebar/Sidebar';
import {useState} from 'react';

const App = () => {

	const [Width, setWidth] = useState(300)
	const [stories, setStories] = useState([])
	const [visible, setVisible] = useState(true)


	return (
		<div className="App">
			<SlideContainer width={Width} stories={stories}/>
			<Sidebar setStories={setStories}  width={Width}
					 setWidth={setWidth} visible={visible}
					 setVisible={setVisible}/>
		</div>
	);
}

export default App;
