import React, { useState, useEffect } from "react";
import uuid from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { artist: 'Moby', title: "Extreme Ways", id: 1 },
    { artist: 'The Deer', title: "Winter to Pry", id: 2 },
    { artist: 'Billie Elish', title: "Everything I Wanted", id: 3 }
  ]);

  const addSong = (artist, title) => {
    setSongs([...songs, { artist, title, id: uuid() }]);
  };

  const [age, setAge] = useState(20);
  
  useEffect(() => {
    console.log("quick useEffect test", age);
  }, [age, songs]);

  return (
    <div className='song-list'>
      <ul>
        {songs.map(song => {
          return (
            <>
              <h3>{song.artist}</h3>
              <li key={song.id}>{song.title}</li>
            </>  
          );
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 age: {age}</button>
    </div>
  );
};

export default SongList;
