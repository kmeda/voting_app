import React, {Component} from "react";
import * as Redux from 'react-redux';
import { BrowserRouter as Router, Route, Switch, NavLink, withRouter } from 'react-router-dom';
import Chart from './Chart.jsx';

const actions = require('../actions/actions.jsx');


class MakePoll extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    var {dispatch, match, poll} = this.props;

    dispatch(actions.getPoll(match.params.id));
    dispatch(actions.getUserIP());
  }

  componentWillUnmount(){
    var {dispatch} = this.props;

    dispatch(actions.clearSelectedOption());
    dispatch(actions.clearPoll());
  }

  handleSubmit(e){
    e.preventDefault();
    var {uid, userIP, selectedOption, poll, dispatch, match} = this.props;


    var votedPoll = [];

    if (poll.usersVoted.includes(uid) || poll.ipVoted.includes(userIP)) {
      alert("User or IP already voted.")
      return;
    }
    else if (selectedOption === "I'd like a custom option") {
      if (this.refs.customOption.value === '') {
        alert("Error: input field empty.")
        return
      }
      var pollOptions = [ ...poll.pollOptions, this.refs.customOption.value];
      // update poll results
      var key = this.refs.customOption.value;
      var obj = {};
      obj[key] = 1;
      var pollResults =   [...poll.pollResults, obj];
      var usersVoted = [...poll.usersVoted, uid];
      var ipVoted = [...poll.ipVoted, userIP];

      votedPoll.push({
        ...poll,
        pollOptions,
        pollResults,
        usersVoted,
        ipVoted
      })


    } else if (selectedOption === "Select" || selectedOption.length === 0) {
      alert("Error, choose an option.");
      return;

    } else {
      var pollOptions = [ ...poll.pollOptions];
      // update poll results
      var key = this.refs.selected.value;
      var pollResults = [...poll.pollResults];
      var updatedPollResults = [];
          pollResults.map((option)=>{
            if (Object.keys(option)[0] === key) {
              option[key] = option[key]+1;
            }
            updatedPollResults.push(option);
          });

      if (uid) {
        var usersVoted = [...poll.usersVoted, uid];
      } else {
        var usersVoted = [...poll.usersVoted];
      }
      if (userIP) {
        var ipVoted = [...poll.ipVoted, userIP];
      } else {
        var ipVoted = [...poll.ipVoted];
      }


      votedPoll.push({
        ...poll,
        pollOptions,
        pollResults: updatedPollResults,
        usersVoted,
        ipVoted
      })

    }

    dispatch(actions.updatePollToFirebase(votedPoll[0], match.params.id));
    dispatch(actions.clearSelectedOption());
    dispatch(actions.clearPoll());
    dispatch(actions.getPoll(match.params.id));

  }

  handleChange(){
    var {dispatch} = this.props;
    dispatch(actions.selectedOption(this.refs.selected.value));
  }

  handleCustomOption(){
    var customOption = this.props.selectedOption;
    var {uid} = this.props;

    if (customOption === "I'd like a custom option") {
        if (uid) {
          return (
            <div>
              <br/>
              <input type="text" ref="customOption" placeholder="Type in and submit to vote.."/>
            </div>
        )
      } else {
        alert("You must be logged in to vote a custom option.")
      }

    }
  }

  render(){
    var {match, poll, uid} = this.props;
    var publicPolls = this.props.publicPolls[0];

    if (poll) {
      var pollOptions = poll.pollOptions;
      return (
        <div>
        <h3 className="polling-header">Submit your vote</h3>
        <div className="poll-container">

          <div className="poll-vote">
            <div className="poll-results">
              <div className="poll-name">{poll.pollName}</div>
              <form id="select" onSubmit={this.handleSubmit.bind(this)}>
                  <select form="select" ref="selected" onChange={this.handleChange.bind(this)} required>
                    <option defaultValue >Select</option>
                    {
                      
                      pollOptions.map((option)=>{
                        return (
                          <option
                            key={pollOptions.indexOf(option)}
                            value={option}
                            >{option}</option>
                        )
                      })
                    }
                  <option>I'd like a custom option</option>
                  </select>
                  {this.handleCustomOption()}
                  <br/>
                  <button className="btn btn-primary" type="submit">Submit</button>
              </form>

            </div>
            <Chart />
          </div>
      </div>
      </div>
      );
    } else {
      return <div><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</div>
    }

  }
};

export default Redux.connect(
  (state) => {
    return {
      publicPolls: state.publicPolls,
      selectedOption: state.selectedOption,
      poll: state.poll,
      uid: state.auth.uid,
      userIP: state.userIP
    }
  }
)(MakePoll);
