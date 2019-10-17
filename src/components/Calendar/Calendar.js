import React, { Component } from "react";
// import addEvents from "../../util/Actions";
import { withRouter } from "react-router-dom";
import eventCleaner from "../../util/Helpers/EventCleaner";
import FullCalendar from "@fullcalendar/react";
import { getAppointments, getPatients } from "../../util/ApiCalls";
import { userLogin } from "../../util/Actions";
import { addEvents } from "../../util/Actions/events/events";
import { addPatients } from "../../util/Actions/patients/patients";
import timeGridPlugin from "@fullcalendar/timegrid";
import { connect } from "react-redux";
import { compose } from "recompose";
import "./Calendar.scss";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { office_id, auth_token } = this.props.userInfo;
    await this.addPatientsToStore(auth_token, office_id);
    if (!this.props.events.length) {
      const response = await getAppointments(office_id, auth_token);
      const cleanedEvents = eventCleaner(response);
      await this.props.addEvents(cleanedEvents);
    }
  }

  addPatientsToStore = async (authToken, officeId) => {
    const response = await getPatients(authToken, officeId);
    this.props.addPatients(response.data);
  };

  render() {
    return (
      <FullCalendar
        defaultView="timeGridWeek"
        plugins={[timeGridPlugin]}
        events={this.props.events}
        weekends={false}
        minTime="07:00:00"
        maxTime="22:00:00"
        eventClick={function(info) {
          // info.jsEvent.preventDefault();
          info.jsEvent.preventDefault();
          window.open(info.event.url, "_self");
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
  userInfo: state.user
});

const mapDispatchToProps = dispatch => ({
  addPatients: patients => dispatch(addPatients(patients)),
  addEvents: events => dispatch(addEvents(events)),
  handleLogin: user => dispatch(userLogin(user))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(Calendar);

// console.log(Object.values(info.event._instance.range));
