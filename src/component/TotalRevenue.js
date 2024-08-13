import classes from './TotalRevenue.module.css'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export function TotalRevenue(props){
	return(<>
	<div className={classes['main-box']}>
		<div>
			<h3>{props.headline}</h3>
			<div className={classes['top-icon']}>
			<AccessAlarmIcon />
			</div>

		</div>
		<div>
			<h1>{props.total}</h1>
			<div className={classes['down-right-content']}>

<div style={{display:'flex'}}>
<ArrowDropDownIcon sx={{color:'red'}}/>
				<p style={{marginTop : '2px' , color:'red'}}>{props.percentage}</p>
</div>
<p style={{marginTop : '1px' , fontSize: '0.75rem' }}> from last week</p>

			</div>

		</div>

	</div>
	</>)
}