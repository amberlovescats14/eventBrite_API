import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const API_KEY = process.env.TEST





const EventBrite = (props) => {
  const {test, runs, getRuns} = props
  const {loading, arr} = runs
 const {events } = arr
  console.log(`KEY: `, API_KEY)
  const classes = useStyles();
  useEffect(()=> {
    getRuns()
  }, [getRuns])
  return (
    <div>
      <h1>eventbrite</h1>
      {console.log(arr)}
      <div>sadf{process.env.REACT_KEY_TEST}</div>
    
    </div>
  )
}

export default EventBrite
