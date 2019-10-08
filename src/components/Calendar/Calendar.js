import React, { Component } from "react";
import PropTypes from "prop-types";
// import addEvents from "../../util/Actions";
import eventCleaner from "../../util/Helpers/EventCleaner";
import FullCalendar from "@fullcalendar/react";
import { getAppointments } from "../../util/ApiCalls";
import { addEvents } from "../../util/Actions/events/events";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import { connect } from "react-redux";
import "./Calendar.scss";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { office_id, auth_token } = this.props.userInfo;
    if (!this.props.events.length) {
      const response = await getAppointments(office_id, auth_token);
      const cleanedEvents = eventCleaner(response);
      this.props.addEvents(cleanedEvents);
    }
  }

  render() {
    return (
      <FullCalendar
        defaultView="timeGridWeek"
        plugins={[timeGridPlugin]}
        events={this.props.events}
        weekends={false}
        minTime="07:00:00"
        maxTime="22:00:00"
      />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
  userInfo: state.user
});

const mapDispatchToProps = dispatch => ({
  addEvents: events => dispatch(addEvents(events))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
