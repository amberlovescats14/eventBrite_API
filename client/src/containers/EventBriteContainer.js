import EventBrite from '../components/EventBrite'
import { connect } from 'react-redux'
import { getRuns } from '../redux/actions'

const mapStateToProps = state => ({
  runs: state.runs
})

const mapDispatchToProps = dispatch => ({
  getRuns: () => dispatch(getRuns())
})

export default connect(mapStateToProps, mapDispatchToProps)(EventBrite)