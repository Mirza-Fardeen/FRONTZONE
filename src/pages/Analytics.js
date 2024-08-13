import { AnalyticsGeneral } from "../component/AnalyticsGeneral";
import { AnalyticsPieChart } from "../component/AnalyticsPieChart";
import { AnalyticsTable } from "../component/AnalyticsTable";

export function Analytics(){
	return(<>
	<AnalyticsGeneral/>
	<AnalyticsPieChart/>
	<AnalyticsTable/>
	</>)
}