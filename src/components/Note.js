import React, { Component } from 'react'

export default class Note extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.note.title}</h1>
        <h1>{this.props.note.content}</h1>
      </div>
    )
  }
}
