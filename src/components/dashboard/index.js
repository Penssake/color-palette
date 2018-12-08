import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import ColorsAll from '../colorCards'
import superagent from 'superagent'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorState: null,
      individualView: false,
    }
    let {location} = this.props
  }

  componentDidMount() {
    let color
    switch (location.pathname) {
      case '/red':
        color = 'red'
        break
      case '/yellow':
        color = 'yellow'
        break
      case '/green':
        color = 'green'
        break
      case '/orange':
        color = 'orange'
        break
      case '/blue':
        color = 'blue'
        break
      case '/purple':
        color = 'purple'
        break
      case '/brown':
        color = 'brown'
        break
      case '/gray':
        color = 'gray'
        break
    }
    return superagent
      .get(`${__API_URL__}/colorQuery/${color}`)
      .then(response => {
        console.log(response)
        this.setState(() => ({
          colorState: response.body,
        }))
      }).catch(err => console.log(err))
  }

  randomSelection() {
    return superagent
      .get(`${__API_URL__}/random`)
      .then(response => {
        this.setState({
          colorState: response.body,
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
        <div onClick={this.clickHandler} className={'fadeIn card' + toggleClass} key={i}>
          <div className={'container' + toggleClass} data-id={mappedColor._id} style={mappedStyle}></div>
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

export default Dashboard