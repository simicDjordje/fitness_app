import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = ({exerciseVideos, name}) => {
	if (!exerciseVideos.length) return <Loader />
	return (
		<Box sx={{mt: {lg: '200px', xs: '20px'}, p: '20px'}}>
			<Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
	        	Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
	        </Typography>
	        <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="space-around" flexWrap="wrap" alignItems="center">
	        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
	          <a
	            key={index}
	            className="exercise-video"
	            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
	            target="_blank"
	            rel="noreferrer"
	          >
	            <img style={{ borderTopLeftRadius: '20px' }} src={item?.video?.thumbnails[0].url} alt={item?.video?.title} />
	            <Box>
	              <Typography sx={{ fontSize: { lg: '18px', xs: '15px' } }} fontWeight={600} color="#000" ml="10px">
	                {item?.video?.title}
	              </Typography>
	              <Typography fontSize="14px" color="#000" mt="20px" ml="10px">
	                {item?.video?.channelName}
	              </Typography>
	            </Box>
	          </a>
	        ))}
	      </Stack>
		</Box>
	)
}

export default ExerciseVideos