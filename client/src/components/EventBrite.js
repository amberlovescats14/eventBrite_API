import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));






const EventBrite = (props) => {
  const { runs, getRuns} = props
  const { arr} = runs
  const classes = useStyles();
  useEffect(()=> {
    getRuns()
  }, [])
  return (
    <div>
      <h1>eventbrite</h1>
      <Paper className={classes.root}>
        <Typography>HI</Typography>
      </Paper>
      {console.log(`in component: `, runs.arr)}
    
    </div>
  )
}

export default EventBrite
