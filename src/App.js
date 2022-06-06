import './App.css'
import Stories from './components/stories/storiesWrapper/Stories';
import Sidebar from './components/sidebar/Sidebar';
import React, {useState} from 'react';

const App = () => {

	const [visible, setVisible] = useState(true)

	return (
		<div className="App">
			<Stories/>
			<Sidebar visible={visible}
					 setVisible={setVisible}/>
		</div>
	);
}

export default App;
