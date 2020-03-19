import React,{Component}from 'react';
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client";
import config from '../../config/config';
class  Call extends Component{
       constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = socketIOClient('localhost:8080');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }
    render(){
        return (
            <div className="padding bg-colr">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-9">
                            <div className="card card-new-user">
                                <div className="card-body">
                                    <div className="card-title">
                                        <div className="float-left user-img">
                                            <a className="avatar avatar-sm mr-2" href="patient-profile.html" title="Charlene Reed">
                                                <img src="assets/img/patients/patient1.jpg" alt="User Image" className="rounded-circle" />
                                                <span className="status online"></span>
                                            </a>
                                        </div>

                                        <div className="user-info float-left">
                                            <a href="patient-profile.html"><span>User Name</span></a>
                                            <span className="last-seen">Online</span>
                                        </div>
                                        <div className="user-balance float-right">
                                            Balance - <span>500 <i className="fa fa-inr"></i></span>
                                        </div>
                                    </div>




                                    <div className="call-contents">
                                        <div className="call-content-wrap">
                                            <div className="voice-call-avatar">
                                                <img src="https://astrotalk.com/assets/astro/771.jpg" alt="User Image" className="call-avatar" />
                                                <span className="username">Astologer Name</span>
                                                <span className="call-timing-count">00:59</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="call-footer">
                                            <div className="call-icons">
                                                <ul className="call-items">
                                                    <li className="call-item">
                                                        <a href="#" title="" data-placement="top" data-toggle="tooltip" data-original-title="Mute">
                                                            <i className="fa fa-microphone microphone"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="end-call">
                                                    <a href="javascript:void(0);">
                                                        <i class="fa fa-phone"> call end</i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Call;