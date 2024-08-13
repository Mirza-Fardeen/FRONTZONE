import { css, keyframes } from "@emotion/react";
import { Dial } from "../component/Dial";
import { Header } from "../component/Header";
import { LineChart } from "../component/LineChart";
import { StackedColumnChart } from "../component/StackedColumnChart";
import { TotalRevenue } from "../component/TotalRevenue";
import classes from './Dashboard.module.css'
import { Component } from "react";
import { style } from "@mui/system";
import styled from "@emotion/styled";
export function DashBoard(){


	const revenues = [
		{key: 0, headline : 'Total Revenue' , total : '$714,500' , percentage : 4.7},
		{key: 1, headline : 'Total Customers' , total : '4140' , percentage : 6.7},
		{key: 2, headline : 'Total Transactions' , total : '563' , percentage : 1.3},
		{key: 3, headline : 'Total Products' , total : '882' , percentage : 1.2}
	]
	return(<>
	<Header/>
	<div className={classes['first-row']}>
		{revenues.map(e=> <div key={e.key}> <TotalRevenue
		key={e.key}
		headline={e.headline}
		total={e.total}
		percentage={e.percentage}
		/></div>)}

	</div>

	<div className={classes['second-row']}>
		{/* <div className={classes.dial}>
			<Dial/>



		</div> */}
		<div>
			<LineChart/>
		</div>
		<div>
			<StackedColumnChart/>
		</div>

	</div>

	</>)
}