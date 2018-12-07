import React, { Component } from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import Button from '../button'

class Nav extends Component {
  render() {
    return (
      <nav>
        <a href='/random'><button>Random Color</button></a>
        <Link className='navNodes' to='/red'>Red</Link>
        {/* <Link className='navNodes' to='/orange'>Orange</Link> */}
        <Link className='navNodes' to='/yellow'>Yellow</Link>
        <Link className='navNodes' to='/green'>Green</Link>
        <Link className='navNodes' to='/blue'>Blue</Link>
        <Link className='navNodes' to='/purple'>Purple</Link>
        <Link className='navNodes' to='/brown'>Brown</Link>
        <Link className='navNodes' to='/gray'>Gray</Link>
      </nav>
    )
  }
}

export default Nav