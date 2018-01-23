import React, { Component } from 'react'
import GridBox from './gridBox'

export default class GameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const gw = 'grid-wrapper'
    const ogw = 'opponent-grid-wrapper'

    return (
      <div className='wrapper'>
        <GridBox wrapper={gw} />
        <GridBox wrapper={ogw} />
      </div>
    )
  }
}
