import React from 'react';
import './styles/app.css';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Work from './pages/index';
import About from './pages/about';
import Play from './pages/play';
import Layout from './components/layout';
import ProjectOne from './pages/transloc-rd';
import ProjectTwo from './pages/study-buddy';
import ProjectThree from './pages/study-space';
import Resume from './pages/resume';


function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Work />} />
					<Route path="transloc-redesign" element={<ProjectOne />} />
					<Route path="study-buddy" element={<ProjectTwo />} />
					<Route path="study-space" element={<ProjectThree />} />
					<Route path="play" element={<Play />} />
					<Route path="about" element={<About />} />
					<Route path="resume" element={<Resume />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
