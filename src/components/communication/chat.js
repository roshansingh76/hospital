import React,{Component}from 'react';
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client";
import config from '../../config/config';
class  Chat extends Component{
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
                        <div className="col-md-8">
                            <div className="card card-borer">
                                <div className="card-body card-body-pg">
                                   <div className="astologer-chat-war">
                                        <div className="astologer-chat-avt">
                                            <div className="avatar avatar-online">
                                                <img src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" className="avatar-img rounded-circle"/>
                                            </div>
                                            <div class="user-name">Astrologer Name</div>
                                            <div class="user-status">online</div>
                                        </div>
                                        <div className="astologer-chat-content">
                                            <div className="msg-box">
                                                <div className="message-astloger">
                                                    <p>Hello. What can I do for you?</p>
                                                    <span>8:30 AM</span>
                                                </div>
                                                <div className="message-user">
                                                    <p>Nahi Hay</p>
                                                    <span>8:30 AM</span>
                                                </div>
                                                <div className="message-user">
                                                    <p>Nahi Hay</p>
                                                    <span>8:30 AM</span>
                                                </div>
                                                <div className="message-user">
                                                    <p>Nahi Hay</p>
                                                    <span>8:30 AM</span>
                                                </div>
                                                <div className="message-astloger">
                                                    <p>Hello. What can I do for you?</p>
                                                    <span>8:30 AM</span>
                                                </div>
                                                <div className="message-astloger">
                                                    <p>Hello. What can I do for you?</p>
                                                    <span>8:30 AM</span>
                                                </div>
                                            </div>
                                        </div>




                                        <div class="chat-footer">
                                            <div class="input-group">
                                                {/*<div class="input-group-prepend">
                                                    <div class="btn-file btn">
                                                        <i class="fa fa-paperclip"></i>
                                                        <input type="file"/>
                                                    </div>
                                                </div>*/}
                                                <input type="text" class="input-msg-send form-control" placeholder="Type something"/>
                                                <div class="input-group-append">
                                                    <button type="button" class="btn msg-send-btn"><i class="fa fa-paper-plane"></i></button>
                                                </div>
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

export default Chat;