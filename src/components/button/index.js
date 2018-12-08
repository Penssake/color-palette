import React, {Component} from 'react'
import superagent from 'superagent'
import './index.scss'


class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorState: null,
      individualView: false,
    }
  }

  componentDidMount() {
    return superagent
      .get(`${__API_URL__}/random`)
      .then(response => {
        console.log(response.body)
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
    let mapLabel
    let mappedStyle
    let toggleClass = this.state.individualView ? 'open' : ''

    if(this.state.colorState) {
      mapRed = this.state.colorState.red,
      mapGreen = this.state.colorState.green,
      mapBlue = this.state.colorState.blue,
      mapLabel = this.state.colorState.label,
      mappedStyle = {
        background: `rgb(${mapRed}, ${mapGreen}, ${mapBlue})`,
      }
    }
    return (
      <div className={'random cardCase' + toggleClass}>
        <div onClick={this.clickHandler} className={'fadeIn random card' + toggleClass}>
          <div className={'container' + toggleClass} style={mappedStyle}></div>
          <h1>#{mapLabel}</h1>
        </div>
      </div>
    )
  }
}
export default Button