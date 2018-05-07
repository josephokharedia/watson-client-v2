import React from 'react';
import {Icon} from 'semantic-ui-react';
import worspaces from '../../data/workspaces';
import truncate from 'lodash/truncate';
import {Link} from 'react-router-dom';

const cards = worspaces.map((w, idx) => (
	<div key={idx} className="ui card">
		<div className="content">
			{/*<img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>*/}
			<div className="header">
				{w.name}
			</div>
			<div className="meta">
				{truncate(w.username || '', {length: 30})}
			</div>
			<div className="description">
				{w.description || ''}
			</div>
		</div>
		<div className="extra content">
			<Link to="/chatbot">
				<Icon name='arrow circle right'/>Login
			</Link>
		</div>
	</div>
));

const WorkspaceCards = () => (
	<div className="ui centered cards" style={{marginTop: 80}}>
		{cards}
	</div>
);

export default WorkspaceCards;