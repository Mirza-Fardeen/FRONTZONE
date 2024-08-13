import { Box, Grid } from "@mui/material";

export function AnalyticsGeneral(){
	return(<>
	<Box component="section" sx={{ p: 2, border: '1px solid grey' , marginRight :'2%'}}>
		<Grid container spacing={2}
		sx={{alignContent :'center' , alignItems :'center' , textAlign:'center'}}>
		<Grid item xs={12}>
   <h3> Order Delay Percentage </h3>
   <h2> 42%</h2>

  </Grid>
  <Grid item xs={12}>
  <h3> Order Cancellation Percentage </h3>
   <h2> 15%</h2>
  </Grid>

  <Grid item xs={12}>
  <h3> Order fullfilment Percentage </h3>
   <h2> 68%</h2>
  </Grid>

		</Grid>

	</Box>
	</>)
}