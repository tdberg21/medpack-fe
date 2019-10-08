import React, { Component } from "react";
import PropTypes from "prop-types";
// import addEvents from "../../util/Actions";
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
    this.state = {
      events: [
        { title: "test appointment", date: "2019-09-27" },
        { title: "test appointment", date: "2019-09-29" },
        { title: "test appointment", date: "2019-10-22" },
        {
          title: "test appointment",
          start: "2019-10-03T12:30",
          end: "2019-10-03T13:30"
        },
        {
          title: "test appointment",
          start: "2019-10-03T14:00",
          end: "2019-10-03T15:00"
        }
      ]
    };
  }

  async componentDidMount() {
    const { office_id, auth_token } = this.props.userInfo;
    const response = await getAppointments(office_id, auth_token);
    console.log(response);
    // this.props.addEvents();
  }

  render() {
    return (
      <FullCalendar
        defaultView="timeGridWeek"
        plugins={[timeGridPlugin]}
        events={this.state.events}
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
