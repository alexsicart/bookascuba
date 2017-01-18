import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Moment from 'moment';

const eventStyle={
  padding: 40,
  fontSize: 20,
  marginBottom: 15,
}

const style = {
  display: 'flex',
  marginTop: 12,
};


export default class UserEvent extends React.Component {
  render() {
    return (
      <Card style={eventStyle}>
        <CardHeader
          title={this.props.event.title}
          subtitle={
            'Date: ' + Moment(this.props.event.date).format('DD MMM YYYY') +
            ' at ' + Moment(this.props.event.time).format('hh:mm a')
          }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {this.props.event.details}
        </CardText>

        <RaisedButton
          style={style}
          label="Book"
          primary={true}
          onTouchTap={() => this.props.onBook(this.props.event.id)}
          containerElement={<Link to={`/bookform/${this.props.event.id}`} />}
        />
      </Card>
    )
  }
}

Event.propTypes = {
  event: React.PropTypes.object.isRequired,
  onBook: React.PropTypes.func.isRequired
}
