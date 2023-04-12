import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
	return (
		<Stack
		direction="row"
		px='20px'
		sx={{ gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}}}
		>
			<Link to="/">
				<img src={Logo} alt="Logo" style={{width: '48px', height: '48px', margin: '0 20px'}} />
			</Link>
			<Stack
			direction="row"
			spacing={4}
			fontSize={24}
			alignItems="flex-end"
			>
				<Link to="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>
					Homeeeee
				</Link>
				<a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
			</Stack>
		</Stack>
	)
}

export default Navbar