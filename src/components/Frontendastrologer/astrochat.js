import React,{Component}from 'react';
import { Link } from 'react-router-dom'
import { Socket,Event } from 'react-socket-io';
import io from "socket.io-client";
import moment from 'moment';
import config from '../../config/config';
const url = 'https://www.jyotirvid.in';
let receiver='';
	  
class  AstroChat extends Component{
    constructor(props){
        super(props);
		this.state = {
			sender:'',
			receiver:'',
			userId:localStorage.getItem('id'),
			astroId:localStorage.getItem('astroId'),
            token:localStorage.getItem('token'),
			username:localStorage.getItem('name'),
			wallet:localStorage.getItem('wallet'),
			cb_roles_id:localStorage.getItem('cb_roles_id'),
            message: '',
			disabled:'',
            messages: [],
			timer: moment(0, "seconds").format("HH:mm:ss"),
			updatedStartTime: null,
			startTime: null,
			endTime: null,
			timeInterval: null,
			activities: [],
			showStartTimeInput: false,
			chatMessages:[],
			chatMessage: "",
			astroName:''
        };
		this.updateInputValue=this.updateInputValue.bind(this);

    }
	componentWillUnmount(){
		 this.handleStopTimer();
		 this.handleResetTimer();	
	}
	componentDidMount() {
		let aname=this.props.location.data;
		if(aname){
			 this.setState({ astroName:aname.name});   
		}else{
			 this.setState({ astroName:''});   
		}
		this.socket = io(url);
		
		//this.socket.emit('user_connected',this.state.n);
		 
		this.setState({
			sender:this.state.userId
		});
		
		this.socket.on("user_connected", function (username) {
			if(localStorage.getItem('id')!=username){
				if(username){
					receiver=username;
					var html = "";
					html += "<li><button onclick='onUserSelected(this.innerHTML);'>" + username + "</button></li>";
					document.getElementById("users").innerHTML += html;
				}
			}
		});
		
		this.socket.on("messages", msg => {
			  this.setState({ chatMessages: [...this.state.chatMessages, msg]   
		 });
		});
	}

  handleStartTimer = () => {
    if (!this.state.startTime) {
      const startTime = moment().format("L LTS");
      this.setState({
        startTime: startTime
      });
    }
    if (this.state.timer === moment(0, "seconds").format("HH:mm:ss")) {
      this.setState({
        timerInterval: setInterval(this.handleRunningTimer, 1000)
      });
    }
  };
  handleRunningTimer = () => {
    if (this.state.startTime && !this.state.endTime) {
      const startTime = this.state.startTime;
      const currentTime = moment().format("L LTS");
      const duration = moment(currentTime, "L LTS").diff(
        moment(startTime, "L LTS"),
        "seconds"
      );
	  let wallet=parseInt(this.state.wallet)-1;
	  //console.log(duration);
      this.setState({
        timer: moment.duration(duration, "seconds").format("*HH:mm:ss"),
		wallet:wallet
      });
    }
  };

  handleShowStartTimeInput = () => {
    this.setState({
      showStartTimeInput: !this.state.showStartTimeInput
    });
  };

  handleStartTimeOnChange = event => {
    if (event.target.value) {
      let updatedStartTime = { ...this.state.updatedStartTime };
      updatedStartTime = event.target.value;
      this.setState({
        updatedStartTime: updatedStartTime
      });
    }
  };

  handleStartTimeUpdate = () => {
    if (this.state.updatedStartTime) {
      const updatedStartTime = moment(this.state.updatedStartTime).format("L LTS");
      clearInterval(this.state.timeInterval);
      this.setState({
        startTime: updatedStartTime,
        updatedStartTime: null,
        showStartTimeInput: false,
        timerInterval: setInterval(this.handleRunningTimer, 1000)
      });
    }
    this.setState({
      updatedStartTime: null,
      showStartTimeInput: false
    });
  };

  handleStopTimer = () => {
    if (!this.state.endTime) {
      const startTime = this.state.startTime;
      const endTime = moment().format("L LTS");
      const timer = this.state.timer;
      this.setState({
        timer: moment(0, "seconds").format("HH:mm:ss"),
        endTime: endTime,
        showStartTimeInput: false
      });
      const activities = this.state.activities;
      activities.push({
        timer: timer,
        startTime: startTime,
        endTime: endTime
      });
      clearInterval(this.state.timeInterval);
    }
  };

  handleResetTimer = () => {
    this.setState({
      timer: moment(0, "seconds").format("HH:mm:ss"),
      startTime: null,
      endTime: null,
      updatedStartTime: null,
      showStartTimeInput: false
    });
    clearInterval(this.state.timeInterval);
  };
	handleKeyPress(event){
		   if (event.key === "Enter") {
			   this.socket.emit('messages',{
					'chatMessage':this.state.chatMessage,
					'username':this.state.username,
					'cb_roles_id':this.state.cb_roles_id
				 
				 });
			   this.setState({chatMessage: ''});
		   }
	}
	
	handleStartClik() {
	if(this.state.wallet!=0){
		this.setState( {disabled:''} );
		this.handleStartTimer();
	}else{
	   this.props.history.push('/callingpack');
	}
  } 
   updateInputValue(evt) {
    this.setState({
      chatMessage: evt.target.value
    });
  }
    render(){
		const timer = this.state.timer;
		const startTime = this.state.startTime;
		const endTime = this.state.endTime;
		const activities = this.state.activities;
		const wallet=this.state.wallet;
		const usertext = this.state.chatMessages;

        return (
            <div className="padding bg-colr">
                <div className="container">
                    <div className="row justify-content-md-center">
					<div className="col-md-4">
							<div className="card card-borer">
                                <div className="card-body card-body-pg">
								<ul id="users"></ul>

								</div>
							</div>
								
					</div>
                        <div className="col-md-8">
                            <div className="card card-borer">
                                <div className="card-body card-body-pg">
                                   <div className="astologer-chat-war">
                                        <div className="astologer-chat-avt">
                                            <div className="avatar avatar-online">
                                                <img src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" className="avatar-img rounded-circle"/>
                                            </div>
                                            <div className="user-name">{this.state.astroName}</div>
                                            <div className="user-status">online</div>
										    <div className="user-balance float-right">
												{timer}
												Balance - <span>{wallet} <i className="fa fa-inr"></i></span>
											</div>
                                        </div>
                                        <div className="astologer-chat-content">
                                            <div className="msg-box">
                                             	{ usertext.length>0  &&
													usertext.map((data, index) => {
														
														if(data.cb_roles_id==2){
															return (<div key={index+1}  className="message-user">
																<p>{data.chatMessage}</p>
																<span></span>
															</div>)
														}else{
														return (<div key={index+1} className="message-astloger">
															<p>{data.chatMessage}</p>
															<span></span>
														</div>)       
														}
													})}
												
                                            </div>
                                        </div>




                                        <div className="chat-footer">
                                            <div className="input-group">
                                                <input type="text"
												className="input-msg-send form-control" 
												placeholder="Type something" 
												value={this.state.chatMessage}
												onChange={this.updateInputValue}
												onKeyPress={(event) => this.handleKeyPress(event)}
												disabled = {(this.state.disabled)? "disabled" : ""}
												
												
												/>
                                                <div className="input-group-append">
                                                    <button type="button" 
													className="btn msg-send-btn"
													 onClick = {this.handleStartClik.bind(this)}
													>Start</button>
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

export default AstroChat;