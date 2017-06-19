import React, {Component} from "react";
import * as Redux from 'react-redux';
const actions = require('../actions/actions.jsx');

class NewPoll extends Component {
  constructor(props){
    super(props);
    {/*this.handleSubmit.bind(this);*/}
  }

  handleSubmit(e){
    e.preventDefault();
    var poll = {pollname: this.refs.pollname.value,
                options: [this.refs.option1.value, this.refs.option2.value]
                }
    console.log(this.refs.option1.value);
    var {dispatch} = this.props;
    dispatch(actions.addPoll(poll));
  }

  addOptions(e) {
    e.preventDefault();
    var {dispatch, inputs} = this.props;
    var newInput = `input-${inputs.length}`;
    var setInputArray = inputs.concat(newInput);
    console.log(setInputArray);
    dispatch(actions.addOptions(setInputArray));
  }


  render(){
    return (
      <div className="polls-container new-poll">
        <h4>New Poll</h4>
        <hr/>
        <form>
        	<div className="form-group">
        		<label className="control-label">Name your poll</label>
        		<input className="form-control" id="name" name="name" type="text" ref="pollname"/>
        	</div>

        	<div className="form-group">
        		<label className="control-label requiredField">Options</label>
                {this.props.inputs.map((input)=>{
                  return <input className="form-control" key={input} type="text" ref={input}/>
                })}
            <br/>
            <button className="btn btn-primary btn-full-width" name="submit" type="submit"
              onClick={this.addOptions.bind(this)}>More Options</button>
        	</div>

        	<div className="form-group">
        		<button className="btn btn-primary btn-full-width" name="submit" type="submit"
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
      inputs: state.addOptions.inputs
    }

  }
)(NewPoll);
