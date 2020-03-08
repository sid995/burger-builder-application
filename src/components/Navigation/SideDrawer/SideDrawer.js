import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import './SideDrawer.css'

const SideDrawer = props => {
	return (
		<div className='SideDrawer'>
			<Logo />
			<nav>
				<NavigationItems />
			</nav>
		</div>
	)
}

export default SideDrawer
