import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions/index';
import { bindActionCreators } from 'redux';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder() {
        console.log('this.state', this.state);
        console.log('this.props', this.props);
        console.log('this', this);
        this.props.addReminder(this.state.text);
    }

    render() {
        return(
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>

                <div className="form-inline">
                    <div className="form-group">
                        <input 
                        className="form-control" 
                        placeholder="I have to ..." 
                        onChange={event => this.setState({text: event.target.value})}/>
                        
                    </div>
                    <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={() => this.addReminder()}>Add remider</button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addReminder}, dispatch);
}

export default connect(null, mapDispatchToProps) (App);