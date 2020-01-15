import React, { useState } from 'react';
import uuid from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    {title: 'Extreme Ways', id: 1},
    {title: 'Winter to Pry', id: 2},
    {title: 'Everything I Wanted', id: 3}
  ]);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }])
  }
  return ( 
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
    </div>
   );
}
 
export default SongList;