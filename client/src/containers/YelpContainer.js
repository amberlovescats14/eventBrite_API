import Yelp from '../components/Yelp'
import { connect } from 'react-redux'
import {getSearchItems} from '../redux/actions'

const mapStateToProps = state => ({
  yelp: state.yelp
})

const mapDispatchToProps = dispatch => ({
  getSearchItems: () => dispatch(getSearchItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Yelp)