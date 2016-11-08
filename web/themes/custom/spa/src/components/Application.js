import React, { Component, PropTypes } from 'react'

import styles from './Application.css'

export default class Application extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return <p className={ styles.hello }>Hello world! { this.props.children }</p>
  }
}
