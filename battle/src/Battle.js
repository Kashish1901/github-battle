import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaTimesCircle,
} from "react-icons/fa";

function Instructions() {
  return (
    <div className="container">
      <center>
        <h2>Instructions</h2>
        <div className="container flex">
          <div>
            <h3>Enter Two Github Users</h3>
            <div className="box-small">
              <FaUserFriends color="rgb(255, 191, 116)" size={140} />
            </div>
          </div>
          <div>
            <h3>Battle</h3>
            <div className="box-small">
              <FaFighterJet color="#727272" size={140} />
            </div>
          </div>
          <div>
            <h3>See The Winner</h3>
            <div className="box-small">
              <FaTrophy color="rgb(255, 215, 0)" size={140} />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

class PlayerInput extends React.Component {
  state = {
    username: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  };
  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <center>
          <form onSubmit={this.handleSubmit}>
            <div className="">
              <label htmlFor="username" className="player-label">
                {this.props.label}
              </label>
              <div className="input">
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="github-username"
                />
                <button type="submit" disabled={!this.state.username}>
                  submit
                </button>
              </div>
            </div>
          </form>
        </center>
      </div>
    );
  }
}

function PlayerPreview({ username, onReset, label }) {
  return (
    <div className="column player">
      <h3 className="player-label">{label}</h3>
      <div>
        <div className="player-info">
          <img
            className="avatar-small"
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a href={`https://github.com/${username}`} className="link">
            {username}
          </a>
        </div>
        <button className="btn-clear flex-center" onClick={onReset}>
          <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
        </button>
      </div>
    </div>
  );
}
export default class Battle extends React.Component {
  state = {
    playerOne: null,
    playerTwo: null,
  };
  handleSubmit = (id, player) => {
    console.log(id);
    this.setState({
      [id]: player,
    });
  };
  handleReset = (id) => {
    this.setState({
      [id]: null,
    });
  };
  render() {
    const { playerOne, playerTwo } = this.state;
    return (
      <>
        <Instructions />
        <div className="players-container">
          <h1 className="center">Players</h1>
          <div className="flex">
            {playerOne === null ? (
              <PlayerInput
                label="Player One"
                onSubmit={(player) => this.handleSubmit("playerOne", player)}
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                label="Player One"
                onReset={() => this.handleReset("playerOne")}
              />
            )}

            {playerTwo === null ? (
              <PlayerInput
                label="Player Two"
                onSubmit={(player) => this.handleSubmit("playerTwo", player)}
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                label="Player Two"
                onReset={() => this.handleReset("playerTwo")}
              />
            )}
          </div>
          {playerOne && playerTwo && (
            <Link
              className="btn"
              to={{
                pathname: "/battle/results",
                search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
              }}
            >
              Battle
            </Link>
          )}
        </div>
      </>
    );
  }
}
