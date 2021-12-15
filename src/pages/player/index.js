import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { getLyric, getSongDetail } from '../../services/player';
import { getLyricStr } from '../../utils/parse-lyric';

import PlayContent from './c-cpns/play-content';
import SimilarSong from './c-cpns/similar-song';
import SongSheet from './c-cpns/song-sheet';
import {
    PlayerWrapper
} from './style'
const Player = memo(() => {
    const { id } = useParams();
    const [currentSong, setCurrentSong] = useState(null);
    const [lyrics, setLyrics] = useState([]);
    useEffect(() => {
        Promise.all([
            getLyric(id),
            getSongDetail(id),
        ]).then(res => {
            let lyrics1 = getLyricStr(res[0].lrc && res[0].lrc.lyric);
            setLyrics(lyrics1);
            let currentSong1 = res[1] && res[1].songs && res[1].songs[0];
            setCurrentSong(currentSong1);
        })
    }, [id])

    return (
        <PlayerWrapper>
           <div className="content wrap-v2">
            <div className="left">
                {currentSong ? 
                <PlayContent
                 lyrics={lyrics} 
                 currentSong={currentSong}
                 currentSongId={id}
                /> : "" 
                 }
                 
            </div>
            <div className="right">
                <SongSheet />
                <SimilarSong />
            </div>
           </div>
        </PlayerWrapper>
    );
});

export default Player;