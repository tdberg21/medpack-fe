export default events => {
  return events.data.map(event => {
    const { id } = event;
    const {
      appointment_result,
      office_id,
      patient_id,
      time_slot
    } = event.attributes;

    const { start_time, start_date, end_time } = time_slot.attributes;

    return {
      appointment_result,
      id,
      office_id,
      patient_id,
      url: `http://localhost:3000/app/appointment/${id}`,
      start_date,
      start_time,
      end_time
    };
  });
};
