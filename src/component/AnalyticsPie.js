import ReactApexChart from "react-apexcharts";

export function AnalyticsPie(){

	const data = {

		series: [44, 55, 13, 43],
		options: {
		  chart: {
			width: 380,
			type: 'pie',
		  },
		  labels: ['Loafers', 'Formal Shoes', 'Hiking Shoes', 'Slip ons'],
		  responsive: [{
			breakpoint: 480,
			options: {
			  chart: {
				width: 200
			  },
			  legend: {
				position: 'bottom'
			  }
			}
		  }]
		},


	  };

	return(<>
 <div>
              <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type="pie" width={500} />
              </div>

            </div>
	</>)
}