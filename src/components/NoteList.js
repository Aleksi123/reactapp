import React, { Component } from 'react'
import Note from './Note';

export default class NoteList extends Component {
  render() {
    console.log(this.props.notes);
    return (
      <div>
        <h1>NoteList</h1>
        <Note />
      </div>
    )
  }
}
