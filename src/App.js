import React from 'react';
import theme from './ui/Themes'
import { ThemeProvider } from '@material-ui/styles';
// import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
// import GridLayout from './component/Grid/Grid'



function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter> */}
         <Navbar/>
       
         {/* <Switch> */}
          
          

         {/* </Switch> */}
      {/* </BrowserRouter> */}
     
      
    </ThemeProvider>
    
  
  );
}

export default App;