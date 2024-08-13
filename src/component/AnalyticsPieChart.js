import { Box, Grid } from "@mui/material";
import { AnalyticsPie } from "./AnalyticsPie";

export function AnalyticsPieChart(){
	return(<>

	<Box component="section" sx={{ p: 2, border: '1px solid grey' , marginRight :'2%' , marginTop: '5%' , marginBottom : '5%'}}>
	<Grid container spacing={2}
		sx={{alignContent :'center' , alignItems :'center' , textAlign:'center'}}>
		<Grid item xs={12}>
<h2>Average % of Products sold by category</h2>

  </Grid>
  <Grid item xs={12} sx={{alignContent :'center' , alignItems :'center' , textAlign:'center'}}>
	<AnalyticsPie/>
  </Grid>



		</Grid>

	</Box>
	</>)
}