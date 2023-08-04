/**
 * Cultures Calendar
 */
import React, { useEffect, useState } from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

// events
import EventsList from './events';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

const Localizer = momentLocalizer(moment);

class Cultures extends React.Component {

	state = { 
		events: [], 
	  };
	
	  componentDidMount() {
		this.fetchEventsData(); 
	  }

	  fetchEventsData = async () => {
		try {
		  const response = await fetch('http://localhost:1337/api/events');
		  console.log('Response Status:', response.status);
		  console.log('Response Headers:', response.headers);
		  if (!response.ok) {
			throw new Error('Network response was not ok');
		  } else {
			console.log("okkk")
		  }
		  const data = await response.json();
		  this.setState({ events: data.data }); 

		} catch (error) {
		  console.error('Error fetching data:', error);
		  this.setState({ events: [] }); 
		}
	  };


	render() {
		const { events } = this.state;

		console.log("events gives",events);
		return (
			<div className="calendar-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.cultures" />} match={this.props.match} />
				<RctCollapsibleCard
					heading="Calendar"
				>
					
					<EventsList events={events}></EventsList>
					<Calendar
						localizer={Localizer}
						events={events.map((event) => ({
							title: event.attributes.Title,
							start: new Date(event.attributes.Date).toISOString(),
							end: new Date(event.attributes.Date).toISOString(),
							}))}
						defaultDate={new Date(2023, 7, 4, 0, 0, 0)}
						
					/>
				</RctCollapsibleCard>
			</div>
		)
	}
	
}

export default Cultures;