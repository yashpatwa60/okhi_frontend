import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import { isLogin } from '../utils';
// Common components
import NavbarPrivate from './general/NavbarPrivate'
// import PageHeading from './PageHeading'
// import Footer from './Footer'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ? (   
            <div id="main">   
        		<NavbarPrivate />
    			{/*<PageHeading title="Home Page" />*/}
      			<Component {...props} />
				    
			</div>  )
         	
         	: <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;