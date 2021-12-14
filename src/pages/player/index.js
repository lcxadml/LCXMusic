import React, { memo } from 'react';

import PlayContent from './c-cpns/play-content';
import SimilarSong from './c-cpns/similar-song';
import SongSheet from './c-cpns/song-sheet';
import {
    PlayerWrapper
} from './style'
const Player = memo(() => {
    return (
        <PlayerWrapper>
           <div className="content wrap-v2">
            <div className="left">
                <PlayContent />
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