import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment } from '$redux/actions'

import './Counter.css'

import bg from '../assets/bg.jpg'
const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(increment, dispatch)
})

const Counter = ({ count, increment }) => (
  <div>
    <a className='counter'
      href='javascript: void(0)'
      onClick={increment}>
      {count}
    </a>
    <img className='img' src={bg} />
  </div>
)

Counter.prototype.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
