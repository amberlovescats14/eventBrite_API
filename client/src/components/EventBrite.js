import React, {useEffect} from 'react'


const EventBrite = (props) => {
  const {test, runs, getRuns} = props
  const {loading, arr} = runs
  useEffect(()=> {
    getRuns()
  }, [getRuns])
  console.log(arr);
  return (
    <div>
      <h1>eventbrite</h1>
      {test}
    </div>
  )
}

export default EventBrite
