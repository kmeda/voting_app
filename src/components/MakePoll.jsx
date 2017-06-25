import React, {Component} from "react";
import * as Redux from 'react-redux';
const actions = require('../actions/actions.jsx');

class MakePoll extends Component {
  constructor(props){
    super(props);
  }

  componentWillUnmount(){
    //trigger action to clear selectedOption
    var {dispatch} = this.props;
    dispatch(actions.clearSelectedOption());
  }

  handleSubmit(e){
    e.preventDefault();
    var {uid, pollResults} = this.props;
    //var selectedOption = 
    console.log(this.refs.customOption.value);

    //if user uid exists alert message
    //else if custom option
  }

  handleChange(){
    var {dispatch} = this.props;
    dispatch(actions.selectedOption(this.refs.selected.value));
  }

  handleCustomOption(){
    //get state for custom option and render input tag
    var customOption = this.props.selectedOption[0];

    if (customOption === "I'd like a custom option") {
      return (<div>
              <br/>
              <input type="text" ref="customOption" placeholder="Type in and submit to vote.."/>
              </div>
            )
    }
  }

  render(){
    var {match} = this.props;
    var publicPolls = this.props.publicPolls[0];
    var selectedOption = this.props.selectedOption[0];
    //console.log(match.params.id);
    if (publicPolls) {
      var polls = Object.values(publicPolls);

      var votePoll = polls.filter((poll)=>{
        return poll ? poll.id === match.params.id : null;
      })
      var poll = votePoll[0];
      //console.log("Poll data: ",votePoll[0]);
    }

    if (poll) {
      return (
        <div>
        <h3>Submit your vote</h3>
        <div className="poll-container">

          <div className="poll-vote">
            <div className="poll-results">
              <div className="poll-name">{poll.pollName}</div>
              <form id="select" onSubmit={this.handleSubmit.bind(this)}>
                  <select form="select" ref="selected" onChange={this.handleChange.bind(this)} required>
                    <option defaultValue >Select</option>
                    {
                      poll.pollOptions.map((option)=>{
                        return (
                          <option
                            key={poll.pollOptions.indexOf(option)}
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
            <div className="chart-container">Render Chart here..</div>
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
      pollResults: state.pollResults,
      uid: state.auth.uid
    }
  }
)(MakePoll);
