import axios from 'axios'

export const getRuns = () => async (dispatch) => {

  try {
    const res = await axios.get('https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=6307+Donely+pl%2C+san+antonio%2Ctx&location.within=20mi&categories=108&subcategories=8001&start_date.range_start=2019-10-01T01%3A01%3A00Z&start_date.range_end=2019-12-31T01%3A01%3A00Z&token=KXBIEIL3SS3GWKDXSU7F')
    console.log(`RUNS: `, res.data)
    dispatch({
      type: `GET_RUNS`,
      payload: res.data
    })
  } catch (error) {
    console.log(`GET ERROR`);
    console.error(error.message)
  }
}

export const getSearchItems = () => async (dispatch) => {
  const token = process.env.REACT_APP_YELP_KEY
  const url = `https://api.yelp.com/v3/businesses/search?term=deli&longitude=-98.491142&latitude=29.424349`
  const config = {
    headers: {
      'Authorization': ` Bearer ${token}`,
      // "accept": "application/json",
      // "x-requested-with": "xmlhttprequest",
      // "Access-Control-Allow-Origin":"*",

    }
  }
  try {
     let res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=deli&longitude=-98.491142&latitude=29.424349`, config )
     console.log(res.data)
    dispatch({
      type: `GET_YELP`,
      payload: res.data
    })
  } catch (error) {
    console.log(`YELP ERROR`)
  }
}