import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MuiListItem from "@material-ui/core/ListItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
	root: {
	  width: "100%",

	  backgroundColor: theme.palette.background.paper
	}
  }));

const ListItem = withStyles({
	root: {
		borderRadius: '5px',
	  "&$selected": {
		backgroundColor: "black",
		color: "white",
		"& .MuiListItemIcon-root": {
		  color: "white"
		}
	  },
	  "&$selected:hover": {
		backgroundColor: "purple",
		color: "white",
		"& .MuiListItemIcon-root": {
		  color: "white"
		}
	  },
	  "&:hover": {
		backgroundColor: "grey",
		color: "white",
		"& .MuiListItemIcon-root": {
		  color: "white"
		}
	  }
	},
	selected: {}
  })(MuiListItem);





export function SideBar(props){

	const classes = useStyles();

	const navigate = useNavigate();

const [selectedIndex, setSelectedIndex] = React.useState(0);
	const [open, setOpen] = React.useState(true);

  const handleClick = (event , index) => {

	setSelectedIndex(index);

	switch(index){
		case 0:{
			navigate('/dashboard');
		}
		break;
		case 1:{
			navigate('/analytics')
		}
	}
  };


	return (<>

	<div className={classes.root}>
	<List
      sx={{ width: '100%',height: '100vh', maxWidth: 360 , }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"
		sx={{backgroundColor : 'white' , textAlign : 'center' , fontSize : '20px'
		,fontStyle :'italic' } }>


<h3>FRONTZONE</h3>
        </ListSubheader>
      }
    >


<ListItem
button
	selected={selectedIndex === 0}
	onClick={(event) => handleClick(event, 0)}

	 >
        <ListItemIcon >
          <HomeIcon/>
        </ListItemIcon >
        <ListItemText  primary="Dashboard" />
      </ListItem>

	  <ListItem
	  button
	selected={selectedIndex === 1}
	onClick={(event) => handleClick(event, 1)}


	 >
        <ListItemIcon >
		<AnalyticsIcon/>
        </ListItemIcon >
        <ListItemText  primary="Analyse"  />
      </ListItem>
	  <ListItem
	  button
	selected={selectedIndex === 2}
	onClick={(event) => handleClick(event, 2)}

	 >
        <ListItemIcon >
		<AccessTimeIcon/>
        </ListItemIcon >
        <ListItemText  primary="Update"  />
      </ListItem>


    </List>
	</div>
	</>)
}