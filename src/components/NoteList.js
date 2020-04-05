import React, { Component } from 'react'
import Note from './Note';
import ListGroup from 'react-bootstrap/ListGroup'

export default class NoteList extends Component {
  render() {
    const listItems = this.props.notes.map((note) =>
      <Note note={note} key={note.id} value={note} />
    );
    return (
      <ListGroup>
        {listItems}
      </ListGroup>
    )
  }
}
