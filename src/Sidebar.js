import React, { Component } from 'react'

export default class Sidebar extends Component {

    render() {
        const channelList = [
            {
                name: "random-stuff",
            },
            
            {
                name: "previous-class-recordings",
            }
        ]

        return (
            <div className="col-4 bg-dark text-white">
                Sidebar
                <ul className="list-unstyled mt-3">
                    { channelList.map(channel => <li>#{channel.name}</li>)}
                </ul>
            </div>
        )
    }
}
