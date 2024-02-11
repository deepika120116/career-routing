import {createBrowserRouter, createRoutesFromElements,Route, RouterProvider} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './screens/Home';
import About from './screens/About';
import NavBar from './components/NavBar';
import ContactLayout from './layouts/ContactLayout';
import Mail from './screens/Mail';
import Phone from './screens/Phone';
import PageNotFound from './screens/PageNotfound';
import CareerLayout from './layouts/CareerLayout';
import Careers,{careerLoader} from './screens/Careers';
import CareerError from './screens/CareerError';
import CareerDetails,{jobDetails} from './screens/CareerDetails';

function App() {
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<ContactLayout/>}>
        <Route path="mail" element={<Mail/>}/>
        <Route path="phone" element={<Phone/>}/>
      </Route>
      <Route path="career" element={<CareerLayout/>}>
        <Route index element={<Careers/>} loader={careerLoader} errorElement={<CareerError/>}/>
        <Route path=":id" element={<CareerDetails/>} loader={jobDetails} errorElement={<CareerError/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </Route>
  )
)

  return (
    
    <RouterProvider router={router}>
     <NavBar/>
    </RouterProvider>
    
  )
}

export default App
