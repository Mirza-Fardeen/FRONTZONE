import {styled} from '@mui/material'
import { Table  , TableBody,TableCell ,
	TableContainer , TableHead , TableRow, Paper ,Box , Grid} from "@mui/material"
	import  { tableCellClasses } from '@mui/material/TableCell';


function createData(state, noOfBuyers, sales) {
	return { state, noOfBuyers, sales};
  }

  const rows = [
	createData('UP', 159, 119480),
	createData('MP', 172, 78768),
	createData('Maharashtra', 154, 6548),
	createData('Kerela', 78, 63990),
  ];
export function AnalyticsTable(){
	return(<>
	<Box component="section" sx={{ p: 2, border: '1px solid grey' , marginRight :'2%'}}>
		<Grid container spacing={2}
		sx={{alignContent :'center' , alignItems :'center' , textAlign:'center'}}>
		<Grid item xs={12}>
  <Tables/>
  </Grid>
  </Grid>
  </Box>
	</>)
}

function Tables(){
	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
		  backgroundColor: theme.palette.common.black,
		  color: theme.palette.common.white,
		},
		[`&.${tableCellClasses.body}`]: {
		  fontSize: 14,
		},
	  }));

	return(<>
	 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{}}>
            <StyledTableCell align="center">STATE</StyledTableCell>
            <StyledTableCell align="right">NO OF BUYERS</StyledTableCell>
            <StyledTableCell align="right">SALES</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="center">{row.state}</TableCell>
              <TableCell align="right">{row.noOfBuyers}</TableCell>
              <TableCell align="right">{row.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</>)
}