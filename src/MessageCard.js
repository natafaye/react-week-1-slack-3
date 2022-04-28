import React, { Component } from 'react'

export default class MessageCard extends Component {
  render() {
    const message = {
        text: "Message 50"
    }

    return (
      <div className="card mb-3">
          <div className="card-body">
              <p className="card-text">{ message.text }</p>
          </div>
      </div>
    )
  }
}
