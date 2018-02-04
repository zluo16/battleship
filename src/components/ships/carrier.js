import React, { Component } from 'react'
import Draggable from 'react-draggable'
import PropTypes from 'prop-types'

export default class Carrier extends Component {

  render() {
    return (
      <Draggable>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </Draggable>
    )
  }
}
