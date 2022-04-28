import React, { Component } from 'react'
import ChannelView from './ChannelView'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Sidebar />
          <ChannelView />
        </div>
      </div>
    )
  }
}
