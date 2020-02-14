import React, { Component } from 'react';
import TopBar from "./components/TopBar";
import NoteForm from './components/NoteForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <NoteForm />
      </div>
    )
  }
}
