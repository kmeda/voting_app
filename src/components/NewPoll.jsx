import React, {Component} from "react";

class NewPoll extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="polls-container new-poll">
        <h4>New Poll</h4>
        <hr/>
        <form>
        	<div className="form-group">
        		<label className="control-label ">Name your poll</label>
        		<input className="form-control" id="name" name="name" type="text"/>
        	</div>

        	<div className="form-group">
        		<label className="control-label requiredField">Options</label>
        		<input className="form-control" id="email" name="email" type="text"/>
            <input className="form-control" id="email" name="email" type="text"/>
            <br/>
            <button className="btn btn-primary btn-full-width" name="submit" type="submit">More Options</button>
        	</div>

        	<div className="form-group">
        		<button className="btn btn-primary btn-full-width" name="submit" type="submit">Submit</button>
        	</div>

        </form>

      </div>
    );
  }
};

export default NewPoll;
