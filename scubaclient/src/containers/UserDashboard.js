import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions'
import UserEvent from '../components/UserEvent'

const containerStyle = {
  margin: '0 auto',
  width: 960,
  padding: 20,
  display: 'flex'
}

class UserDashboard extends React.Component {
  componentDidMount () {
    this.props.getEvents()
  }

//
// RENDERING
//

  renderEvents () {
    console.log('UserDashboard: ', this.props.events);
      return this.props.events.map(event =>
        <UserEvent
          key={event.id}
          event={event}
          onBook={(id) => this.props.bookEvent(id)}
        />
      )
    }

  render() {
    return <div style={containerStyle}>
      <div style={{flex:0.5, marginLeft: 20, padding: 20}}>
        {this.renderEvents()}
      </div>
    </div>
  }
}

const mapStateToProps = (state) => ({
  events: state.events
})

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => dispatch(Actions.getEvents()),
  bookEvent: (id) => dispatch(Actions.bookEvent(id))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard)
