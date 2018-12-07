import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from '../landing'
import Header from '../header'
import Nav from '../nav'
import Hamburger from '../hamburger'
import Dash from '../dashboard'
import '../../styles/main.scss'
import './index.scss'
import Button from '../button'


class App extends Component {
  render() {
    let {location} = this.props
    return (
      <div className="app">
        <Header />
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Landing} />
            <Route exact path="/red" component={Dash} />
            <Route exact path="/yellow" component={Dash} />
            <Route exact path="/green" component={Dash} />
            <Route exact path="/blue" component={Dash} />
            <Route exact path="/purple" component={Dash} />
            <Route exact path="/brown" component={Dash} />
            <Route exact path="/gray" component={Dash} />
            <Route exact path="/random" component={Button} />
          </div>
        </BrowserRouter>
        <div className='footer'>
          <Hamburger />
        </div>
      </div>

    )
  }
}

export default App