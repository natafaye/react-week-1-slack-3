import React, { Component } from 'react'
import MessageCard from './MessageCard'

export default class ChannelView extends Component {
    render() {

        const channel = {
            name: "random",
            messages: [
                {
                    text: "Message 1"
                },
                {
                    text: "Message 2"
                },
                {
                    text: "Message 3"
                }
            ]
        }

        return (
            <div className="col">
                <h4>#{ channel.name }</h4>
                { channel.messages.map(message => <MessageCard/>) }
            </div>
        )
    }
}
