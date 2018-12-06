import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from '../landing'
import Header from '../header'
import Nav from '../nav'
import Hamburger from '../hamburger'
import '../../styles/main.scss'
import './index.scss'


class App extends Component {
  render() {
    let {location} = this.props
    return (
      <div className="app">
        <BrowserRouter>
          <div>
          <Header />
          <Hamburger />
          <Nav />
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
        <div className='footer'></div>
      </div>

    )
  }
}

export default App