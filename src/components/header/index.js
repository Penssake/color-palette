import React, { Component } from 'react'
import logo from '../../assets/logo-symbol.svg'
import './index.scss'


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