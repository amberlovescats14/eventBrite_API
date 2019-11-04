import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: '10px'
  },
}));



//CATEGORY RUNNING: 108 SUB 8001


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
      <Paper className="MuiPaper-elevation7">
        <Typography>HI</Typography>
      </Paper>
      {console.log(`in component: `, runs.arr)}
      {arr.map((a,i)=> (
        <Paper key={i} className={classes.root}>
          <Typography variant='h4'>{a.name.html}</Typography>
          <Typography variant="subtitle1">{a.description.text}</Typography>
        </Paper>
      ))}
    
    </div>
  )
}

export default EventBrite
