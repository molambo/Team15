import React from 'react';
import '../css/VenueListComponent.css'


export default class VenueListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTitle: ''
        }
    }

    searchTitleChanged = event =>
        this.setState({
            searchTitle: event.target.value
        })

    render() {
        return (<div>
            <div className="list-group">
                <div className="list-group-item form-inline row">
                    <input
                        onChange={this.searchTitleChanged}
                        value={this.state.searchTitle}
                        className="form-control wbdv-venue-searchbar "
                        placeholder="Search for venues"/>
                    <button
                        onClick={() => this.props.searchVenue(this.state.searchTitle)}
                        className="btn btn-primary wbdv-search-btn ">Search
                    </button>
                </div>
                {
                    this.props.venues && this.props.venues.map(venue =>
                        <div onClick={() =>
                            this.props.selectVenue(venue.id)}
                             className="list-group-item row"
                             key={venue.id.venueId}>
                             <div className="row wbdv-venue-row">
                                <a className="wbdv-venue-title"> {venue.name}</a>,&nbsp;
                                <a className="wbdv-venue-state">{venue.extended_address}</a>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>)
    }
}
