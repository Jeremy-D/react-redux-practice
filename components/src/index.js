import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div style={{textAlign:"center"}}>
					<h4 style={{color: "red"}}>Warning</h4>
					You sure?
				</div>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail author="Sam" timeAgo="4hrs" avatar={faker.image.avatar()} comment="This is great!"/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Alex" timeAgo="6hrs" avatar={faker.image.avatar()} comment="This sucks!"/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Jane" timeAgo="7hrs" avatar={faker.image.avatar()} comment="Meh..."/>
			</ApprovalCard>
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'));