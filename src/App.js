import React, { Component } from 'react';
import TopBar from "./components/TopBar";
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: [
        /* {
          id: 1,
          title: 'note1title',
          content: 'note1content'
        },
        {
          id: 2,
          title: 'note2title',
          content: 'note2content'
        } */
      ],
      id: 0
    }
  }

  createNote = (title, content) => {

    const newNote = {
      id: this.state.id,
      title: title,
      content: content
    }
    this.setState({ notes: [...this.state.notes, newNote] });

    this.setState({ id: this.state.id + 1 })
  }

  deleteNote = (id) => {
    this.setState({ notes: [...this.state.notes.filter(note => note.id !== id)] })
  }

  render() {
    return (
      <div>
        <TopBar />
        <NoteForm createNote={this.createNote} />
        <NoteList notes={this.state.notes} deleteNote={this.deleteNote} />
      </div>
    )
  }
}

