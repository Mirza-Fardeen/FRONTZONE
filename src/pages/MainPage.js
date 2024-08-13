import { Outlet, useNavigate } from "react-router-dom";

import classes from './MainPage.module.css';
import { SideBar } from "./SideBar";

import { StyledEngineProvider } from "@mui/material";
import { useEffect } from "react";
export function MainPage(){
	const nav = useNavigate();
	useEffect(()=>{

		nav('/dashboard')
	},[])
return(<>

<div className={classes.screens}>
<div className={classes['screen-sidebar']}>
	<StyledEngineProvider injectFirst>
	<SideBar/>
	</StyledEngineProvider>

</div>
<div className={classes['screen-main']}>
<Outlet/>
</div>

</div>

</>)
}