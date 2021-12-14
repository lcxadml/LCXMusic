import React, { memo } from 'react';
import { useDispatch } from 'react-redux'
import { getSongDetailAction } from '@/pages/player/store';

import { RankingWrapper } from './style';
const TopRanking = memo((props) => {
    const { rankings } = props;
    const { tracks = [] } = rankings;

    const dispatch = useDispatch()
    const playSong = (id) => {
        console.log(id);
        dispatch(getSongDetailAction(id));
    }
    return (
        <RankingWrapper>
            <div className="ranking_top">
                <div className="top_image">
                    <img src={rankings.coverImgUrl + "?param=100y100"} alt="" />
                </div>
                <div className="top_info">
                    <a href="#/" className="title">{ rankings.name }</a>
                    <div className="play"></div>
                    <div className="sub"></div>
                </div>
            </div>
            <div className="body">
                {
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div className="ranking_item" key={item.id}>
                                <span className="index">{index + 1}</span>
                                <a href="#/" className="song_name">
                                    <span className="name">{item.name}</span>
                                    <div className="play_icon" onClick={() => playSong(item.id)}></div>
                                    <div className="add_icon"></div>
                                    <div className="sub_icon"></div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <a href="#/" className="footer">查看全部 &gt;</a>
        </RankingWrapper>
    );
});

export default TopRanking;