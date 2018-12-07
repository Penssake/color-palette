import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from '../landing'
import Header from '../header'
import Nav from '../nav'
import Hamburger from '../hamburger'
import Dash from '../dashboard'
import Button from '../button'
import Pagination from '../pagination'
import '../../styles/main.scss'
import './index.scss'


class App extends Component {
  render() {
    let {location} = this.props
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <div>
              <Header />
              <Hamburger />
              <Nav />
              <Route exact path="/" component={Landing} />
              <Route exact path="/page1" component={Landing} />
              <Route exact path="/page2" component={Landing} />
              <Route exact path="/page3" component={Landing} />
              <Route exact path="/page4" component={Landing} />
              <Route exact path="/page5" component={Landing} />
              <Route exact path="/page6" component={Landing} />
              <Route exact path="/page7" component={Landing} />
              <Route exact path="/page8" component={Landing} />
              <Route exact path="/page9" component={Landing} />
              <Route exact path="/red" component={Dash} />
              <Route exact path="/yellow" component={Dash} />
              <Route exact path="/green" component={Dash} />
              <Route exact path="/blue" component={Dash} />
              <Route exact path="/purple" component={Dash} />
              <Route exact path="/brown" component={Dash} />
              <Route exact path="/gray" component={Dash} />
              <Route exact path="/random" component={Button} />
            </div>
            <div className='footer'>
              <Pagination />
            </div>
          </div>
        </BrowserRouter>
      </div>

    )
  }
}

export default App