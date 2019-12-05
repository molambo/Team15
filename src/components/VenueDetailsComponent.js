import React from 'react';
import '../css/VenueDetailsComponent.css'

export default class VideoDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.venue.name !== '' &&
                <div className="container wbdv-details">
                    <h3>{this.props.venue.name}</h3>
                    <h6>Address: {this.props.venue.address}</h6>
                    <h6>City: {this.props.venue.city}</h6>
                    <h6>State: {this.props.venue.state}</h6>
                    <h6>Country: {this.props.venue.country}</h6>
                    <h6>Venue Capacity: {this.props.venue.capacity}</h6>
                    <h6>Number of Upcoming Events: {this.props.venue.num_upcoming_events}</h6>
                </div>
                }
            </div>
        )
    }
}
