export default events => {
  return events.data.map(event => {
    const { id } = event;
    const {
      appointment_result,
      office_id,
      patient_id,
      time_slot
    } = event.attributes;
    const start = editTimes(time_slot.attributes.start_time);
    const end = editTimes(time_slot.attributes.end_time);

    return {
      appointment_result,
      id,
      office_id,
      patient_id,
      url: `http://localhost:3000/app/appointment/${id}`,
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
