import React, {useEffect} from 'react'

const Yelp = (props) => {
  const {yelp, getSearchItems} = props
  useEffect(()=> {
    getSearchItems()
  }, [getSearchItems])
  console.log(`yelping: `, yelp)
  return (
    <div>
      
    </div>
  )
}

export default Yelp

//rafc

