import React, { Component } from "react";
import PropTypes from "prop-types";
// import addEvents from "../../util/Actions";
import { withRouter, Redirect } from "react-router-dom";
import eventCleaner from "../../util/Helpers/EventCleaner";
import FullCalendar from "@fullcalendar/react";
import { getAppointments } from "../../util/ApiCalls";
import { userLogin } from "../../util/Actions";
import { addEvents } from "../../util/Actions/events/events";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import { connect } from "react-redux";
import { compose } from "recompose";
import "./Calendar.scss";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // const user = await JSON.parse(sessionStorage.getItem("user"));
    // if (user) {
    //   this.props.handleLogin(user);
    //   console.log(user, "hello");
    // }
    const { office_id, auth_token } = this.props.userInfo;
    if (!this.props.events.length) {
      const response = await getAppointments(office_id, auth_token);
      console.log(response);
      const cleanedEvents = eventCleaner(response);
      await this.props.addEvents(cleanedEvents);
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
        eventClick={function(info) {
          // info.jsEvent.preventDefault();
          info.jsEvent.preventDefault();
          window.open(info.event.url);
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
