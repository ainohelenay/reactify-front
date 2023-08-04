import React from 'react';

function convertISOToJSDate(dateString) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();

  return new Date(year, month, day, hour, minute, 0);
}

const EventsList = ({ events }) => {
  const formattedEvents = events.map((event) => {
    const startDateString = event.attributes.Date;
    const startTimeString = '00:00:00'; 

    const startDateTimeString = `${startDateString}T${startTimeString}.000Z`;
    const endDateTimeString = `${startDateString}T${startTimeString}.000Z`;

    const startDateFormatted = convertISOToJSDate(startDateTimeString);
    const endDateFormatted = convertISOToJSDate(endDateTimeString);

    return {
      title: event.attributes.Title,
      start: startDateFormatted,
      end: endDateFormatted,
    };
  });

  console.log("formattedEvents:", formattedEvents);

  return null;
};

export default EventsList;