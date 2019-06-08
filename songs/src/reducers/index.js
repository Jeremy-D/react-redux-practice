import {  combineReducers } from 'redux';

//this reducer is overkill because data is static 
//but used for redux demo purposes
const songsReducer = () => {
	return [
		{title: 'No Scrubs', duration: '4:05'},
		{title: 'Macarena', duration: '3:25'},
		{title: 'All Star', duration: '2:15'}
	]
}

const selectSongReducer = (selectedSong=null, action) => {
	if(action.type ==='SONG_SELECTED'){
		return action.payload;
	}
	return selectedSong;
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectSongReducer
})