import React,{useEffect,useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import {Link,BrowserRouter, Route,Switch} from 'react-router-dom'
import Page from './Page'
const Vendors=()=>{

  

  useEffect(() => {
    console.log('inside vendors')
  }, [])

  function refreshPage(){ 
    window.location.reload(); 
}

  return(
    <>
    <Grid
    container
    direction='row'
    justify='center'
    alignItem='center'
    >
      <Box
        boxShadow={20}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '70rem', height: '50rem',backgroundColor:'grey' }}
        
      >{
        <div>
          <BrowserRouter>
          <Link to="/page" ><h1>Mendhi</h1></Link>
          <Link><h1>Sangeeta Decorations</h1></Link>
          <Link><h1>Flowers</h1></Link>
          
          </BrowserRouter>
          
            
        </div>
        
        }</Box>
    </Grid>
    </>
  )


}

export default Vendors