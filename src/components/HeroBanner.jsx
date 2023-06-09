import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
	return (
		<Box
		sx={{marginTop: {lg: '212px', xs: '70px'}, marginLeft: {sm: '50px'}}}
		>
			<Typography color="#FF2625" fontWeight="600" fontSize="26px">
				Fitness Club
			</Typography>
			<Typography fontWeight="700" sx={{fontSize: {lg: '44px', xs: '40px'}}} mb="22px" mt="30px">
				Sweat, Smile <br />and Repeat
			</Typography>
			<Typography fontSize="22px" lineHeight="35px" mb={4}>
				Check out the most effective exercises
			</Typography>
			<Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: "#FF2625", padding: '10px'}}>
				Explore Exercises
			</Button>
			<Typography fontWeight="700" color="#FF2625" sx={{display: {lg: 'block', xs: 'none'}, opacity: 0.1}} fontSize="200px">
				Exercise
			</Typography>
			<img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
		</Box>
	)
}

export default HeroBanner