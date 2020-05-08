import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

import { setTokenStatus } from "../actions";

import history from "../history";
import SpotifyWebApi from "spotify-web-api-js";

import UserPlaylists from "./playlists/UserPlaylists";
import Playlist from "./playlists/playlist";
import SearchResults from "./searchresults/SearchResults";
import Navigation from "./navigation/Navigation";
import Home from "./home/Home";
import Album from "./album/Album";
import "./app.scss";

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    const token = params.token;

    //const isLoggedIn = token ? true : false;
    //set new token when signin
    if (token) {
      localStorage.setItem("token", token);

      // sessionStorage.setItem("token", token);
      //spotify-web-api-library needs the token to use library methods to request to the api
      spotifyApi.setAccessToken(localStorage.getItem("token"));

      //action creator
      //update status
      //this.props.setTokenStatus(token, isLoggedIn);
      //set token on refresh
    } else if (localStorage.getItem("token")) {
      //set token for api library use
      spotifyApi.setAccessToken(localStorage.getItem("token"));
    }

    //spotifyApi.setAccessToken(sessionStorage.getItem("token"));
  }

  //get hash params for token
  getHashParams() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(9);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    history.push("/");
    return hashParams;
  }

  //these routes are from Router used to navigate the one page app
  //navigation is using history.push and Link tags to show components
  //anything outside of the switch will not be changed on the one page app
  render() {
    return (
      <HashRouter history={history}>
        <div className="main">
          <a href="http://localhost:8888"> Login to Spotify </a>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search/results" exact component={SearchResults} />
            <Route path="/playlists" exact component={UserPlaylists} />
            <Route path="/playlist/:name" exact component={Playlist} />
            <Route path="/album/:id" exact component={Playlist} />
          </Switch>
          <Navigation />
        </div>
      </HashRouter>
    );
  }
}

export default connect(null, { setTokenStatus })(App);
