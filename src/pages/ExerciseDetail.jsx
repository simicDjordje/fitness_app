import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {exerciseOptions, youtubeSearchOptions, fetchData} from '../utils/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({})
	const [exerciseVideos, setExerciseVideos] = useState([])
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])
	const {id} = useParams()

	useEffect(() => {
		const fetchExerciseDetailData = async () => {

			const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions)
			setExerciseDetail(exerciseDetailData)

			const youtubeSearchData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=gym tutorial ${exerciseDetail.name}`, youtubeSearchOptions)
			setExerciseVideos(youtubeSearchData.contents)

			const targetMuscleExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetail.target}`, exerciseOptions);
			setTargetMuscleExercises(targetMuscleExercisesData);

			const equimentExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetail.equipment}`, exerciseOptions);
			setEquipmentExercises(equimentExercisesData);

		}

		fetchExerciseDetailData()
	}, [])

		
	if (!exerciseDetail) return <div>No Data</div>;

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
			<SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
		</Box>
	)
}

export default ExerciseDetail