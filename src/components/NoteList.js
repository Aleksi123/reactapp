import React, { Component } from 'react'
import Note from './Note';
import ListGroup from 'react-bootstrap/ListGroup'

export default class NoteList extends Component {
  render() {
    const listItems = this.props.notes.map((note) =>
<<<<<<< HEAD
      <Note note={note} key={note.id} value={note} deleteNote={this.props.deleteNote} />
=======
      <Note note={note} key={note.id} value={note}
        deleteNote={this.props.deleteNote}
      />
>>>>>>> 991db8e9b46966835e407d402293967757005901
    );
    return (
      <ListGroup>
        {listItems}
      </ListGroup>
    )
  }
}
