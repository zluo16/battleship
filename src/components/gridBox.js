import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carrier from './ships/carrier'

export default class GridBox extends Component {
  static propTypes = {
    carrierPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  }

  constructor(props) {
    super(props)
    this.state = {}
  }



  render() {
    return (
      <div className={this.props.wrapper}>
        <div className='box'></div>
        <div className='box'>1</div>
        <div className='box'>2</div>
        <div className='box'>3</div>
        <div className='box'>4</div>
        <div className='box'>5</div>
        <div className='box'>6</div>
        <div className='box'>7</div>
        <div className='box'>8</div>
        <div className='box'>9</div>
        <div className='box'>10</div>

        <div className='box'>A</div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>

        <div className='box'>B</div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>

        <div className='box'>C</div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>

        <div className='box'>D</div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>

        <div className='box'>E</div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>

        <div className='box'>F</div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>

        <div className='box'>G</div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>

        <div className='box'>H</div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>

        <div className='box'>I</div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>

        <div className='box'>J</div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </div>
    )
  }
}
