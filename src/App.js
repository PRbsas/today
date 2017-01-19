import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import Date from './Date';
import Avatar from './Avatar';
import AddButton from './AddButton';

class App extends Component {
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
        <Avatar />
        <br />
        <Date />
        <br />
        <EventList />
        <br />
        <AddButton />
      </div>
    );
  }
}

export default App;
