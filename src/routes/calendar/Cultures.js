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
		culture: 'en',
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
		const { events, culture } = this.state;
		let cultures = ['en']
		let rtl = this.state.culture === 'en'

		console.log("events gives",events);
		return (
			<div className="calendar-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.cultures" />} match={this.props.match} />
				<RctCollapsibleCard
					heading="Cultures Calendar"
				>
					<h3 className="callout mb-30">
						<label>Select a Culture</label>{' '}
						<select
							className="form-control"
							style={{ width: 200, display: 'inline-block' }}
							defaultValue={'fr'}
							onChange={e => this.setState({ culture: e.target.value })} >
							{cultures.map((c, idx) => (
								<option key={idx} value={c}>
									{c}
								</option>
							))}
						</select>
					</h3>
					<EventsList events={events}></EventsList>
					<Calendar
						localizer={Localizer}
						rtl={rtl}
						events={events.map((event) => ({
							title: event.attributes.Title,
							start: new Date(event.attributes.Date).toISOString(),
							end: new Date(event.attributes.Date).toISOString(),
							}))}
						culture={this.state.culture}
						defaultDate={new Date(2023, 3, 8)}
						
					/>
				</RctCollapsibleCard>
			</div>
		)
	}
	
}

export default Cultures;