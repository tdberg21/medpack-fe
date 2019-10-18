export default events => {
  return events.map(event => {
    const { start_time, end_time, id, url, start_date } = event;

    const start = `${start_date}T${start_time}`;
    const end = `${start_date}T${end_time}`;

    return {
      id,
      start,
      end,
      url
    };
  });
};
