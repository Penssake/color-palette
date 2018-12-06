import React, { Component } from 'react'
import './index.scss'
import logo from '../../assets/logo-symbol.svg'
// import {Link} from 'react-router-dom' href for the purpose of page reload


class Header extends Component {
  render() {
    return (
      <div className='headerClass'>
        <header>
        <a href='/'><img src={logo} alt='colors logo'/></a>
          <input
            type="text"
            className="input"
            placeholder='Search'
          />
      </header>
      </div>

    )
  }
}

export default Header