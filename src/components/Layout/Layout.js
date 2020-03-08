import React from 'react'
import Aux from '../../hoc/Auxx'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = props => (
	<Aux>
		<Toolbar />
		<SideDrawer />
		<main className='Content'>{props.children}</main>
	</Aux>
)

export default Layout
