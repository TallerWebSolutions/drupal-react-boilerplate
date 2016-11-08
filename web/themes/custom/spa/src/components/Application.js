import React, { Component } from 'react'

import styles from './Application.css'

export default class Application extends Component {
  render () {
    return <p className={ styles.hello }>Hello world!</p>
  }
}
