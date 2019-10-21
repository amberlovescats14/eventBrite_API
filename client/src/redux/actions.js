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