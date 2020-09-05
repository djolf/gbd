import { connect } from 'react-redux'
import { toggleMenu } from '../actions'
import { Header } from '../components/Header'

const mapStateToProps = state => (
  {
    open: state
  }
)

const mapDispatchToProps = dispatch => ({
  toggleMenu: open => dispatch(toggleMenu(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)