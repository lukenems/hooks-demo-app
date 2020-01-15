import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(artist, title);
    setArtist('');
    setTitle('');
  }
  return ( 
    <form onSubmit={handleSubmit}>
      <label>Artist Name</label>
      <br />
      <input type="text" value={artist} required onChange={(e) => setArtist(e.target.value)}/>
      <br />
      <label>Song Name</label>
      <br />
      <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
      <br/>
      <input type="submit" value='add song'/>
    </form>
   );
}
 
export default NewSongForm;
