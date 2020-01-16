import React, { useState, useEffect } from "react";
import uuid from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {

  const [songs, setSongs] = useState([
    { artist: 'Moby', title: "Extreme Ways", id: 1, timesListened: 1 },
    { artist: 'The Deer', title: "Winter to Pry", id: 2, timesListened: 1 },
    { artist: 'Billie Elish', title: "Everything I Wanted", id: 3, timesListened: 1 }
  ]);

  const addSong = (artist, title) => {
    setSongs([...songs, { artist, title, id: uuid(), timesListened: 1 }]);
  };

  const addListen = listened => {
    const allSongs = [...songs]
    for (let i of allSongs) {
      if (i.title === listened.title) {
        i.timesListened = i.timesListened + 1
        break;
      }
    }
    setSongs([...allSongs])
  }
  
  // useEffect(() => {
  //   console.log("quick useEffect test", timesListened);
  // }, [timesListened]);

  return (
    <div className='song-list'>
      <ul>
        {songs.map(song => {
          return (
            <>
              <h3>{song.artist}</h3>
              <li key={song.id}>{song.title}</li>
              <button onClick={() => addListen(song)}>I've listend to this song {song.timesListened} times</button>
            </>  
          );
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      
    </div>
  );
};

export default SongList;
