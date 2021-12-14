import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { formatDate, getPalySong } from '@/utils/formate.js'
import { 
    changeSequenceAction,
     getSongDetailAction,
     changeCurrentSong,
     changeCurrentLyricIndex
     } from '../store/action'
import { Slider } from 'antd';
import {
    PlayerBarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'
const PlayerBar = memo(() => {
    //  props and time
    const [looptitle, setLoopTitle] = useState('');
    const [currentTime, setCurrentTime] = useState(0); 
    const [isPlay, setIsPaly] = useState(false);
    const [currentValue, setCurrentValue] = useState(0);
    const [isShowLyric, setIsShowLyric] = useState(false);
    const [currentLyric, setCurrentLyric] = useState('');
    const [isChanging, setIsChanging] = useState(false);
    const [isShowVolume, setIsShowVolume] = useState(false);
    const [valume, setValume] = useState(0);
    const volumeRef = useRef();
    const volumeSwitchRef = useRef();
    const { 
        currentSong = {}, 
        sequence,
        lyrics,
        playList,
        currentLyricIndex
        } = useSelector(state => ({
        currentSong: state.get('player').get('currentSong'),
        sequence: state.get('player').get('sequence'),
        currentSongIndex: state.get('player').get('currentSongIndex'),
        playList: state.get('player').get('playList'),
        lyrics: state.getIn(['player', 'lyrics']),
        currentLyricIndex: state.getIn(['player', 'currentLyricIndex'])
    }), shallowEqual)
    const { dt = 0 } = currentSong; 
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getSongDetailAction(167876));
    }, [dispatch])  
    const audioRef = useRef();
    const sliderRef = useRef();
    useEffect(() => {
        if(isPlay) {
            audioRef.current.play().catch(err => {
                setIsPaly(false);
            });
        } else {
            audioRef.current.pause();
        }
    }, [isPlay])
    useEffect(() => {
            audioRef.current.src = getPalySong(currentSong.id);
            audioRef.current.play().then(res => {
                setIsPaly(true);
            }).catch(err => {
                setIsPaly(false);
            });
    }, [currentSong])
    useEffect(() => {
        document.addEventListener("click", e => {
            if(!e.path.includes(volumeRef.current) && !e.path.includes(volumeSwitchRef.current)) {
                setIsShowVolume(false);
            }
        })
    }, [])
    useEffect(() => {
        setValume(audioRef.current.volume * 100);
    }, [valume])
    const playMusic = () => {
        audioRef.current.currentTime = currentTime;
        setIsPaly(!isPlay);
    }
    const getPlayTime = () => {
        if(!isChanging) {
            setCurrentTime(audioRef.current.currentTime);
            const currentValue = ((audioRef.current.currentTime * 1000) / dt) * 100;
            setCurrentValue(currentValue);
        }
        // 获取当前的歌词
        for(let i = 0; i < lyrics.length; i++) {
            let curT = currentTime * 1000;
            if(curT < lyrics[i].time) {
                if(lyrics[i - 1] && lyrics[i - 1].content) {
                    setCurrentLyric(lyrics[i - 1].content);
                    if(currentLyricIndex !== (i - 1)){
                        dispatch(changeCurrentLyricIndex(i - 1));
                    }
                    
                    break;
                }
                if(lyrics[i - 2]) {
                    setCurrentLyric(lyrics[i - 2].content);
                    if(currentLyricIndex !== (i - 2)){
                        dispatch(changeCurrentLyricIndex(i - 2));
                    }
                    break;
                }
             
            }
        }
    }
    const changeCurrentValue = useCallback(value => {
        setCurrentValue(value);
        setCurrentTime((value / 100) * dt / 1000);
        setIsChanging(true);
     }, [dt])
    const onAfterChange = useCallback(value => {
        audioRef.current.currentTime = ((value / 100) * dt) / 1000; 
        setIsChanging(false);
    }, [dt])
    const changeSequence = useCallback(() => {
        let currentSequence = sequence + 1;
        if(currentSequence > 2) {
            currentSequence = 0;
        }
        switch (currentSequence) {
            case 0:
                setLoopTitle('循环播放');
                break;
            case 1:
                setLoopTitle('随机播放');
                break;
            case 2:
                setLoopTitle('单曲播放');
                break;
            default: break;
        }
        dispatch(changeSequenceAction(currentSequence));
    }, [dispatch, sequence, setLoopTitle])
    const changeMusic = useCallback((count) => {
        dispatch(changeCurrentSong(count))
    }, [dispatch]);

    const handleEnded = () => {
        if(sequence === 2) {    // 单曲循环
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            dispatch(changeCurrentSong(1));
        }
    }
    const changeShowLyric = () => {
        setIsShowLyric(!isShowLyric);
    }
    const changeisShowVolume = () => {
        setIsShowVolume(!isShowVolume);
    }
    const changeVolume = (state) => {
        setValume(state);
        audioRef.current.volume = state / 100;
    }
    return ( 
        <PlayerBarWrapper>
            <div className="content wrap-v2">
                <Control>
                    <div className="pre" onClick={() => changeMusic(-1)}></div>
                    <div
                     className="play_paulse" 
                     style={{backgroundPosition: isPlay ? 
                     '0 -165px': 
                     '0 -204px'
                     }}
                      onClick={() => playMusic()}
                      ></div>
                    <div className="next" onClick={() => changeMusic(1)}></div>
                </Control>
                <PlayInfo>
                    <div className="play_left">
                        <img src={currentSong?.al?.picUrl + "?param=34y34"} alt="" className="authur" />
                        <NavLink to="/discover/player" className="mask">&nbsp;</NavLink>
                    </div>
                    <div className="play_right">
                        <div className="play_top">
                            <a href="#/" className="song_title">{ currentSong.name }</a>
                            <span className="vedio"></span>
                            <a href="#/" className="singer">{ currentSong.ar ? currentSong.ar[0].name : '' }</a>
                            <span className="singer_link"></span>
                        </div>
                        <div className="play_body">
                            <div className="progress">
                            <Slider 
                            tooltipVisible={false} 
                            ref={sliderRef}
                            value={currentValue}
                            onChange={(e) => changeCurrentValue(e)}
                            onAfterChange={e => onAfterChange(e)}
                            />
                            </div>
                            <span className="time">
                                <span className="current_time">{ formatDate(currentTime * 1000) }</span>
                                <span className="total_time">&nbsp;/ {formatDate(dt)}</span>
                            </span>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence}>
                    <div className="opre">
                        <div className="song_text"></div>
                        <div className="collect"></div>
                        <div className="share"></div>
                    </div>
                    <div className="flag">
                        {isShowVolume ? <div className="slider_content" ref={volumeRef}>
                        <Slider
                         value={valume} 
                         vertical
                         tooltipVisible={false} 
                         onChange={state => changeVolume(state)}
                          />
                        </div>
                           : ''
                           }
                        <div className="volume" ref={volumeSwitchRef} onClick={changeisShowVolume}></div>
                        <div className="loop" title={looptitle} onClick={() => {changeSequence()}}></div>
                        <div className="song_list">{playList.length}</div>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={() => getPlayTime()} onEnded={handleEnded} /> 
            <div className="showLyric" onClick={changeShowLyric}>词</div>
            {isShowLyric ? <p className="lyric_content">{currentLyric}</p> : ''}
        </PlayerBarWrapper>
    );
});

export default PlayerBar;