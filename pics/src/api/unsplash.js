import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID c755318f7a126ae50ac415810b2e06cd37071f584b12fd15c4d48c14deddfa0e'
	}
});