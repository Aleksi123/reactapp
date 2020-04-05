import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default class Note extends Component {
  render() {
    return (
      <ListGroup.Item>
        {this.props.note.title}<br />
        {this.props.note.content}
      </ListGroup.Item>
    )
  }
}
