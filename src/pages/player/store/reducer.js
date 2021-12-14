import { Map } from 'immutable';
import  * as reducerTypes  from './constant'
const defaultState = Map({
    currentSong: {},
    playList: [],
    currentSongIndex: 0,
    sequence: 0, // 0 循环播放  1 随机播放  2 单曲播放
    lyrics: [],
    currentLyricIndex: 0,
})

export default function playReducer(state = defaultState, action) {
    switch(action.type) {
        case reducerTypes.CHANGE_CURRENT_SONG:
            return state.set('currentSong', action.data);
        case reducerTypes.CHNAGE_PLAYER_LIST:
            return state.set('playList', action.data);
        case reducerTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set('currentSongIndex', action.data);
        case reducerTypes.CHANGE_SEQUENCE:
            return state.set('sequence', action.data);
        case reducerTypes.CHANGE_LYRICS:
            return state.set('lyrics', action.data);
        case reducerTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set('currentLyricIndex', action.data)
        default: 
            return state;
    }
}