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
      createID: 0
    }
  }

  createNote = (title, content) => {
    
    const newNote = {
      id: this.state.createID,
      title: title,
      content: content
    }
    this.setState({ notes: [...this.state.notes, newNote] });

    this.setState({ createID : this.state.createID + 1 })
  }

  render() {
    return (
      <div>
        <TopBar />
        <NoteForm createNote={this.createNote} />
        <NoteList notes={this.state.notes} />
      </div>
    )
  }
}

