import TextField from '@mui/material/TextField';

export function SearchBar(){

	function changeInput(data){


	}
	return(<>

	<div style={{display: 'flex' ,flexWrap: 'nowrap'}} >
	<TextField
	onChange={changeInput}
          id="filled-multiline-flexible"
          label="Search"
          multiline
          maxRows={4}
          variant="filled"
		  sx={{
			width: '30vb',
			"& .MuiFilledInput-root": {
			  color: "#000",
			  fontFamily: "Arial",
			  fontWeight: "bold",

			  borderTopLeftRadius: "7px",
			  borderTopRightRadius: "7px",
			  "&:before": {
				borderColor: "#2e2e2e",
				borderWidth: "2px",
			  },
			  "&:after": {
				borderColor: "black",
				borderWidth: "3px",
			  },
			},
			"& .MuiInputLabel-filled": {
			  color: "#000",
			  fontWeight: "bold",
			  "&.Mui-focused": {
				color: "black",
				fontWeight: "bold",
			  },
			},
		  }}
        />
	</div>

	</>)
}