import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import ColorsAll from '../colorCards'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <ColorsAll />
      </div>

    )
  }
}

export default Landing