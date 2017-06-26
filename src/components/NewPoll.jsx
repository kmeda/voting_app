import React, {Component} from "react";
import * as Redux from 'react-redux';
import firebase, {firebaseRef} from '../firebase/index.js';

const actions = require('../actions/actions.jsx');

class NewPoll extends Component {
  constructor(props){
    super(props);

  }

  addOptions(e) {
    e.preventDefault();
    var {dispatch, options} = this.props;
    var newInput = `input${options.length}`;
    var setInputArray = options.concat(newInput);
    dispatch(actions.moreOptions(setInputArray));
  }

  componentDidMount(){
    var {dispatch} = this.props;
    dispatch(actions.clearCapturedInputs());
  }

  handleChange(e){
    e.preventDefault();
    var {dispatch} = this.props;

    var option_keys = Object.keys(this.refs);
    var filter_options = [this.refs].map((option)=>{
         return option_keys.map((key)=>{
          return option[key].value;
        });
    });
    var options = filter_options[0].slice(1).filter((option)=>{
                    return option !== '';
                  });

    var filteredOptions = [...new Set(options)];


    var results = [];
    filteredOptions.map((option)=>{
      var result = {};
      result[option] = 0;
      results.push(result);
    });



    var poll = { pollName: this.refs.pollName.value,
                 pollOptions: filteredOptions,
                 pollResults: results,
                 usersVoted: ["test"],
                 ipVoted: ["test"]
                 }

    dispatch(actions.captureInputs(poll));

  }

  handleSubmit(e){
    e.preventDefault();
    var {dispatch, capturedInputs} = this.props;

    //push to firebase under userid

    dispatch(actions.startAddPoll(capturedInputs));

    //clear form input - reset all refs and reset options to 2
    var option_keys = Object.keys(this.refs);
    [this.refs].map((option)=>{
         return option_keys.map((key)=>{
          option[key].value = '';
        });
    });
    dispatch(actions.clearCapturedInputs());

  }



  render(){
    var {capturedInputs} = this.props;

    var isEnabled = capturedInputs.pollName.length > 0 && capturedInputs.pollOptions.length >= 2;

    return (
      <div className="polls-container new-poll">
        <h4>New Poll</h4>
        <hr/>
        <form>
        	<div className="form-group">
        		<label className="control-label">Name your poll</label>
        		<input className="form-control" id="name" name="name" type="text" ref="pollName"
              onChange={this.handleChange.bind(this)}/>
        	</div>

        	<div className="form-group">
        		<label className="control-label requiredField">Enter two or more unique values</label>
                {this.props.options.map((input)=>{
                  return <input className="form-control" key={input} type="text" ref={input}
                    onChange={this.handleChange.bind(this)}/>
                })}
            <br/>
            <button className="btn btn-primary btn-full-width" name="submit" type="submit"
              onClick={this.addOptions.bind(this)}>More Options</button>
        	</div>

        	<div className="form-group">
        		<button disabled={!isEnabled} className="btn btn-primary btn-full-width" name="submit" type="submit"
              onClick={this.handleSubmit.bind(this)}
              >Submit</button>
        	</div>

        </form>

      </div>
    );
  }
};


export default Redux.connect(
  (state) => {
    return {
      options: state.pollInput.options,
      capturedInputs: state.pollInput.capturedInputs,
      polls: state.polls,
      inputValidation: state.pollInput.inputValidation
    }

  }
)(NewPoll);
