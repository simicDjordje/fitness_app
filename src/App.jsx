import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'

const App = () => {
	return (
		<Box>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/exercise/:id" element={<ExerciseDetail />} />
			</Routes>
			<Footer />
		</Box>
	)
}

export default App