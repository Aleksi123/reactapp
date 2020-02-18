import React, { Component } from 'react'
import Note from './Note';

export default class NoteList extends Component {
  render() {
    const listItems = this.props.notes.map((note) =>
      <Note note={note} key={note.id} value={note} />
    );
    return (
      <div>
        {listItems}
      </div>
    )
  }
}
