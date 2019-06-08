import React, {Component} from 'react';
import { connect } from 'react-redux';

// class SongDetail extends Component {
// 	state ={ song: this.props.selectSong }
// 	render(){
// 		console.log(this.props)
// 		return(
// 			<h1>{this.state.song}</h1>
// 		)
// 	}
// }

const SongDetail = (props) => {
	if(!props.song){
		return <div> Choose a song! </div>
	}

	return (
		<div>
			<h3>Details for:</h3>
			<p> 
				Title: {props.song.title} 
				<br />
				Duration: {props.song.duration} 

			</p>

		</div>
	)
}

const mapStateToProps = (state) => {
	return { song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)