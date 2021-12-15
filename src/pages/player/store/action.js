import { getSongDetail, getLyric } from '@/services/player'
import * as actionTyps from './constant'
import { getRamdom } from '@/utils/math-util'
import { getLyricStr } from '@/utils/parse-lyric'
export const getSongDetailAction = (idx) => {
    return (dispatch, getState) => {
        // 1. 根绝id查找palyList是否已经有了该歌曲
        const playList = getState().getIn(["player", "playList"]);
        const songIndex = playList.findIndex(song => song.id === idx);
        // 2. 判断是否找到了该歌曲。
            if(songIndex !== -1) {  //找到了歌曲
                const song = playList[songIndex];
                dispatch(changeSongDetailAction(song));
                dispatch(changeCurrentSongIndexAction(songIndex));
            } else { // 没有找到歌曲
                getSongDetail(idx).then(res => {
                    const song = res.songs && res.songs[0];
                    if(!song) return;
                    // 1. 将最新请求到的数据放入到播放列表中
                    const newPlayList = [...playList, song];
                    // 2. 更新播放列表数据
                    dispatch(changePlayListAction(newPlayList));
                    //  3. 更新当前播放列表的索引值
                    dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                    dispatch(changeSongDetailAction(song))
                }) 
            }
        dispatch(getLircAction(idx))
    }
}

export const changeSongDetailAction = (data) => {
    return {
        type: actionTyps.CHANGE_CURRENT_SONG,
        data
    }
}

export const changePlayListAction = (data) => {
    return {
        type: actionTyps.CHNAGE_PLAYER_LIST,
        data
    }
}

export const changeCurrentSongIndexAction = (data) => {
    return {
        type: actionTyps.CHANGE_CURRENT_SONG_INDEX,
        data
    }
}

export const changeSequenceAction = (index) => {
    return {
        type: actionTyps.CHANGE_SEQUENCE,
        data:index
    }
}

export const changeCurrentSong = (tag) => {
    return (dispatch, getState) => {
        const sequence = getState().getIn(['player', 'sequence']);
        const playList = getState().getIn(['player', 'playList']);
        let currentSongIndex = getState().getIn(['player', 'currentSongIndex']);
        switch (sequence) {
            case 1: //随机播放
                let ramdomIndex = getRamdom(playList.length);
                currentSongIndex = ramdomIndex;
                break;
            default: //单曲播放
                currentSongIndex += tag;
                if(currentSongIndex >= playList.length) currentSongIndex = 0;
                if(currentSongIndex < 0) currentSongIndex = playList.length - 1;

        }
        const currentSong = playList[currentSongIndex];
        dispatch(changeSongDetailAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));
        dispatch(getLircAction(currentSong.id))
    }
}

export const changeLyricsAction = (data) => {
    return {
        type: actionTyps.CHANGE_LYRICS,
        data,
    }
}

export const getLircAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            let lyric = res.lrc && res.lrc.lyric;
            lyric = getLyricStr(lyric);
            dispatch(changeLyricsAction(lyric));
        })
    }
}
export const changeCurrentLyricIndex = (data) => {
    return {
        type: actionTyps.CHANGE_CURRENT_LYRIC_INDEX,
        data
    }
}