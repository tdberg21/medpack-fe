export default events => {
  return events.data.map(event => {
    const {
      appointment_result,
      office_id,
      patient_id,
      time_slot,
      attributes
    } = event.attributes;
    const start = editTimes(time_slot.attributes.start_time);
    const end = editTimes(time_slot.attributes.end_time);

    return {
      appointment_result,
      office_id,
      patient_id,
      url: `http://localhost:3000/app/appointment/${editTimes(
        time_slot.attributes.start_time
      )}`,
      start,
      end
    };
  });
};

const editTimes = time => {
  const timeArray = time.split(" ");
  timeArray.pop();
  return timeArray.join("T");
};
