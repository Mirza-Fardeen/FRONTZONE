import classes from './Header.module.css'
import { SearchBar } from './SearchBar'
export function Header(){
	return(<>
	<div className={classes['main-layout']}>
		<h2>Overview</h2>
		<div className={classes['searchbar']}>
		<SearchBar />
		</div>

	</div>
	</>)
}