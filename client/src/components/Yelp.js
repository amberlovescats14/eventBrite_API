import React, {useEffect} from 'react'

const Yelp = (props) => {
  const {yelp, getSearchItems} = props
  useEffect(()=> {
    getSearchItems()
  }, )
  console.log(`yelping: `, yelp)
  return (
    <div>
      <h1>yelp</h1>
    </div>
  )
}

export default Yelp

//rafc

