import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import superagent from 'superagent'
import util from '../../lib/util.js'

import './index.scss'

class ColorsAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
        colorState: null,
        individualView: false,
    } 

    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    return superagent
      .get(${__API_URL__}/colorsAll)
      .then(response => {
        this.setState({
          colorState: response.body,
        })
      })
      .catch(err => console.log(err))
  }

  clickHandler(e) {
    let clickedID = e.target.dataset.id
    return superagent
    .get(${__API_URL__}/colors/clickedID)
    .then(response => {
        this.setState({
            colorState: response.body,
            individualView: true,
          })
    })
    .catch(err => console.log(err))
}

  render() {
    let renderData
    let mapRed
    let mapGreen
    let mapBlue
    let mappedStyle
    let toggleClass = this.state.individualView ? 'open' : ''

    if(this.state.colorState) {
        renderData = this.state.colorState.map((mappedColor, i) => (
        mapRed = mappedColor.red,
        mapGreen = mappedColor.green,
        mapBlue = mappedColor.blue,
        mappedStyle = {
            background: `rgb(${mapRed}, ${mapGreen}, ${mapBlue})`,
        },
        <div onClick={this.clickHandler} className={'card' + toggleClass} key={i}>
            <div className={'container' + toggleClass} data-id={mappedColor._id} style={mappedStyle} ></div>
            <h1>#{mappedColor.label}</h1>
        </div>
        )
      )}
    return (
      <div className={'cardCase' + toggleClass}>
        {renderData}
      </div>
    )
  }
}

export default ColorsAll
