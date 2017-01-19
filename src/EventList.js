import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
    var events = [
      {
        'time': '11',
        'period': 'AM',
        'eventTitle': 'New York Choral Society and Orchestra',
        'eventDescription': 'Haydn’s masterpiece, Missa in angustiis (Lord Nelson Mass)'
      },
      {
        'time': '04',
        'period': 'PM',
        'eventTitle': 'Tessa Lark Roman Rabinovich',
        'eventDescription': 'Standout soloist and chamber musician'
      },
      {
        'time': '05',
        'period': 'PM',
        'eventTitle': 'Orpheus Chamber Orchestra',
        'eventDescription': 'Mendelssohn’s symphonic recollections of Scotland'
      },
      {
        'time': '08',
        'period': 'PM',
        'eventTitle': 'Staatskapelle Berlin',
        'eventDescription': 'Carnegie Hall cycle of Bruckner\'s nine numbered symphonies'
      }

    ];

    return (
      <div>
        {events.map(function(event, index) {
          return <Event
                    key={index}
                    time={event.time}
                    period={event.period}
                    eventTitle={event.eventTitle}
                    eventDescription={event.eventDescription}
                    />
        })}
      </div>
    );
  }
}

export default EventList;
