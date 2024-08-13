import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { DashBoard } from './pages/DashBoard';
import { Analytics } from './pages/Analytics';


const router = createBrowserRouter([
	{path :'/' , element:<MainPage/> , children:[
		{path :'/dashboard' , element: <DashBoard/>},
		{path : '/analytics', element: <Analytics/>}
	]}
])
function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
