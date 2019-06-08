import React, {Component} from 'react';

class ImageCard extends Component {
	constructor(props){
		super(props);
		this.state = { spans: 0}
		this.imageRef = React.createRef()
	}

	componentDidMount(){
		this.imageRef.current.addEventListener('load', this.setSpans)
	}

	//arrow function binds to this by default,
	//don't need to bind in constructor
	setSpans = ()=>{
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height/ 10)
		console.log(this.imageRef.current.clientHeight);
		this.setState({spans: spans})
	}

	render(){
		const {description, urls} = this.props.image;

		return(
			<div style={{gridRowEnd: `span ${this.state.spans}`}}>
				<img 
					ref={this.imageRef}
					alt={description}
					src={urls.regular}
				/>
			</div>
		);
	}
}

export default ImageCard;