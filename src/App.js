import './App.css';
import React, {useEffect, useState} from 'react';
import Login from './components/Login';
import Player from './components/Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
import { getTokenFromUrl } from './components/subComponents/spotify';

const spotify = new SpotifyWebApi()

function App() {
  const [{user, token}, dispatch] = useDataLayerValue()

    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = ""
        const _token = hash.access_token;

        if(_token){
          
          dispatch({
            type: 'SET_TOKEN',
            token: _token,
          })

          spotify.setAccessToken(_token)

          spotify.getMe().then((user) => {
            dispatch({
              type:'SET_USER',
              user: user,
            });
          });

          spotify.getUserPlaylists().then((playlists) => {
            dispatch({
              type: 'SET_PLAYLISTS',
              playlists: playlists

            })
          })

          spotify.getPlaylist("4GpBODwgLjOwL6JcBunQcr").then((res) => {
            console.log('get weekly:', res)
            dispatch({
              type:'SET_DISCOVER_WEEKLY',
              discover_weekly: res,
            })
          })
        } 
    }, [])

  return (
    <div className='App'>
      {
        token? (
          <Player spotify={spotify}/>
        ): (
          <Login/>
        )
      }

    </div>
  );
}

export default App;
