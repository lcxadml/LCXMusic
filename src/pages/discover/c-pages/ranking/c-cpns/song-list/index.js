import React, { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { formatDate } from '@/utils/formate';
import { getSongDetailAction } from '@/pages/player/store/action';

import {SongListWrapper} from './style'

const SongList = memo(() => {
 
    const {  rankingDetails } = useSelector(state => ({
        rankingDetails: state.getIn(["ranking", "rankingDetails"]),
    }), shallowEqual)
    const dispatch = useDispatch();
    const playSong = (id) => {
        dispatch(getSongDetailAction(id));
    }
    return (
        <SongListWrapper>
            <div className="head">
                <span className="title">歌曲列表</span>
                <span className="song_count">{rankingDetails.tracks && rankingDetails.tracks.length}首歌</span>
                <span className="play_count">
                    播放：
                    <span className="num">{rankingDetails.playCount}</span>
                    次
                </span>
            </div>
            <div className="container">
                <div className="hd">
                    <div className="hd_index"></div>
                    <div className="hd_title">标题</div>
                    <div className="hd_time">时长</div>
                    <div className="hd_singer">歌手</div>
                </div>
                <div className="list">
                    {
                        rankingDetails && 
                        rankingDetails.tracks &&
                        rankingDetails.tracks.map((item, index) => {
                            return (
                                <div className="list_item" key={item.id}>
                                    <div className="item_index">{index + 1}</div>
                                    <div className="item_name">
                                        <i className='i_icon' onClick={() => playSong(item.id)}></i>
                                        <NavLink to={`/discover/songs/${item.id}`} className="name">{item.name}</NavLink>
                                    </div>
                                    <div className="item_time">{formatDate(item.dt)}</div>
                                    <div className="item_singer">
                                        {
                                            item.ar && 
                                            item.ar.map((itemX, indey) => {
                                                return item.ar.length === indey + 1 
                                                ? itemX.name
                                                : itemX.name+"/"
                                            })
                                        }
                                        </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </SongListWrapper>
    );
});

export default SongList;