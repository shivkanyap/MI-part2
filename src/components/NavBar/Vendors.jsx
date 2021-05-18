import React,{useEffect,useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
const Vendors=()=>{

  

  useEffect(() => {
    console.log('inside vendors')
  }, [])



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
            <h1>Mendhi</h1>
          <h1>Sangeeta Decorations</h1>
          <h1>Flowers</h1>
          <h1>Destination Weddings</h1>
        </div>
        }</Box>
    </Grid>
    </>
  )


}

export default Vendors