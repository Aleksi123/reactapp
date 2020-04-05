import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createNote(this.state.title, this.state.content);
    
    this.setState({ title: '' })
    this.setState({ content: '' })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Enter note title" />
          </Form.Group>

          <Form.Group controlId="formBasicContent">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows="3" type="text" name="content" value={this.state.content} onChange={this.handleChange} placeholder="Enter note content" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
