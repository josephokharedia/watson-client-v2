import React from 'react';
import {Link} from 'react-router-dom';

const ChatBox = () => (
	<div className="ui centered grid">

		<div className="row">
			<div className="five wide column">
				<div className="ui basic segment breadcrumb">
					<Link className="section" to="/">Home</Link>
					<i className="right angle icon divider"/>
					<div className="active section">Chatbox</div>
				</div>
			</div>
		</div>

		<div className="row">
			<div className="five wide column">
				<div className="ui segments">

					<div className="ui segment">
						<h2 className="ui header">Watson chatbox</h2>
					</div>

					<div className="ui basic clearing segment">
						<button className="ui tiny right floated compact button">
							Reset
						</button>
					</div>


					<div className="ui basic attached segment" style={{minHeight: 450}}>
						<div className="ui left floated basic compact segment" style={{padding:0, margin:2,maxWidth: '70%'}} >
							<div className="ui left pointing teal label">
								Please enter a value sdfads sdfdsa sdfds sdafsdfasdfsdfasdf sdfasd
							</div>
						</div>
						<div className="ui right floated basic compact segment" style={{padding:0, margin:2, maxWidth: '70%'}}>
							<div className="ui right pointing pink label">
								Please enter a value sdfads sdfdsa sdfds sdafsdfasdfsdfasdf sdfasd
							</div>
						</div>
						<div className="ui left floated basic compact segment" style={{padding:0, margin:2,maxWidth: '70%'}} >
							<div className="ui left pointing grey label">
								Please enter a value sdfads sdfdsa sdfds sdafsdfasdfsdfasdf sdfasd
							</div>
						</div>
						<div className="ui right floated basic compact segment" style={{padding:0, margin:2, maxWidth: '70%'}}>
							<div className="ui right pointing black label">
								Please enter a value sdfads sdfdsa sdfds sdafsdfasdfsdfasdf sdfasd
							</div>
						</div>
						<div className="ui left floated basic compact segment" style={{padding:0, margin:2,maxWidth: '70%'}} >
							<div className="ui left pointing grey label">
								<div className="ui active dimmer">
									<div className="ui small text loader">Loading</div>
								</div>
							</div>
						</div>

					</div>

					<div className="ui bottom attached segment">
						<div className="ui fluid action input">
							<input type="text" placeholder="Type your message here"/>
							<button className="ui button">Send</button>
						</div>
					</div>

				</div>
			</div>
		</div>

	</div>
);

export default ChatBox;