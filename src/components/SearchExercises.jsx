import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import {exerciseOptions, fetchData} from '../utils/fetchData'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
	const [search, setSearch] = useState('')
	const [bodyParts, setBodyParts] = useState([])


	useEffect(()=>{
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
			setBodyParts(['all', ...bodyPartsData])
		}

		fetchExercisesData()
	}, [])

	const handleSearch = async () => {
		if(search){
			const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
			const searchedExercises = exercisesData.filter(exercise => exercise.name.toLowerCase().includes(search)
			|| exercise.equipment.toLowerCase().includes(search)
			|| exercise.bodyPart.toLowerCase().includes(search)
			)
			setSearch('')
			setExercises(searchedExercises)

		}
	}

	return (
		<Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
			<Typography fontWeight="700" sx={{fontSize: {lg: '44px', xs: '30px'}}} mb="30px" textAlign="center">
				Awesome Exercises<br /> You Should Know
			</Typography>
			<Box position="relative" mb="72px">
				<TextField
				sx={{
					input: {border: 'none', borderRadius: '4px', fontWeight: '700'}, 
					width: {lg: '1170px', xs: '350px'}, 
					backgroundColor: '#fff'}}
				height="72px"
				
				onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
				placeholder="Search Exercises"
				type="text"
				 />
				<Button onClick={handleSearch} sx={{backgroundColor: '#FF2625', height: '56px'}} variant="contained" color="error" className="search-btn">
					Search
				</Button>
			</Box>
			<Box position="relative" sx={{width: '100%', p: '20px'}}>
				<HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart />
			</Box>
		</Stack>
	)
}

export default SearchExercises