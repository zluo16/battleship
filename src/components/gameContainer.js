import React, { Component } from 'react'
import GridBox from './gridBox'
import OpponentGridBox from './opponentGridBox'

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
        <OpponentGridBox wrapper={ogw} />
      </div>
    )
  }
}
