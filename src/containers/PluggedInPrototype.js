import React from 'react';
import {faPlug} from "../../node_modules/@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '../../node_modules/@fortawesome/react-fontawesome';
import '../css/PluggedInPrototype.css'
import VenueListComponent from "../components/VenueListComponent"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import VenueDetailsComponent from "../components/VenueDetailsComponent";

export class PluggedInPrototype extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            venues: [],
            venue: {
              name: ''
            }
        }
    }

    componentDidMount() {
        this.findVenueByTitle("td garden")
    }

    searchVenue = searchTitleChanged =>
        this.findVenueByTitle(searchTitleChanged)

    // findVideoByTitle = searchphrase =>
    //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchphrase}&type=video&key=AIzaSyDzAog-ZQbUDu3qB2I0JCoyleKhfguoVNs`)
    //         .then(response => response.json())
    //         .then(response => {
    //             this.setState({
    //                 videos: response.items
    //             })
    //         });

    // gives the channel of the search - an error when trying to grab the snippet
    findVenueByTitle = searchphrase =>
        fetch(`https://api.seatgeek.com/2/venues?client_id=MTk3NTk5Nzd8MTU3NTUxNDQzMS4x&name=${searchphrase}`)
            .then(response => response.json())
            .then(response => {
              console.log(response)
              console.log(searchphrase)
                this.setState({
                    venues: response.venues
                })
            });

    selectVenue = venueId =>
        fetch(`https://api.seatgeek.com/2/venues/${venueId}?client_id=MTk3NTk5Nzd8MTU3NTUxNDQzMS4x`)
            .then(response => response.json())
            .then(venue => {
                console.log(venue)
                console.log("VENUE ID")
                console.log(venueId)
                this.setState({
                    venue: venue
                })
            })

    render() {
        return (
            <body>
            {/*<nav className="wbdv-nav">*/}
            {/*    <a href="../index.html">Home</a>*/}
            {/*</nav>*/}
            <div className="wbdv-header">
                <div className="row">
                    <div className="col-12">
                        <div className="wbdv-logo">
                            <h1 className="wbdv-title">PluggedIn
                                <FontAwesomeIcon icon={faPlug}
                                                 className="fa fa-plug fa-lg wbdv-icon"/>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <Router>
                        <div className="col-6 wbdv-venue-list">
                            <VenueListComponent
                                selectVenue={this.selectVenue}
                                searchVenue={this.searchVenue}
                                venues={this.state.venues}/>
                        </div>

                        <div className="col-6 wbdv-venue-details">
                            <VenueDetailsComponent
                                venue={this.state.venue}/>
                        </div>
                    </Router>
                </div>
            </div>
            </body>

        )
    }
}
