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
                <input className="form-control" id="email" name="email" type="text" ref="option1"/>
                <input className="form-control" id="email" name="email" type="text" ref="option2"/>

            <br/>
            <button className="btn btn-primary btn-full-width" name="submit" type="submit"
              onClick={(e)=> e.preventDefault()}>More Options</button>
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

export default Redux.connect()(NewPoll);
