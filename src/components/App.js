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
        this.props.addReminder(this.state.text);
    }

    renderReminder() {

        console.log("this.props",this.props)
        const { reminders } = this.props;
        console.log("reminders",reminders)
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map( reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div>{reminder.text}</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        // console.log("state in App:",this.state);
        // console.log("props in App:",this.props);
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
                {this.renderReminder()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    // console.log("what is dispatch,", dispatch);
    // console.log(addReminder);
    return bindActionCreators({addReminder}, dispatch);
}

function mapStatetoProps(state) {
    console.log("aaaaaaaa", state);
    return {
        reminders: state.reminders
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (App);