import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

export default class Note extends Component {
  render() {
    return (
      <ListGroup.Item>
        {this.props.note.title}<br />
        {this.props.note.content}<br />
        <Button variant="danger" onClick={this.props.deleteNote.bind(this, this.props.note.id)}>Delete</Button>
      </ListGroup.Item>
    )
  }
}
