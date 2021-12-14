import React, { memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSettledArtistsAction } from '../../store/action'

import { ArtistWrapper } from './style';
const Artist = memo(() => {
    
    let { settledArtists } = useSelector(state => ({
        settledArtists: state.getIn(['recommend', 'settledArtists'])
    }), shallowEqual)
    const artists = useMemo(() => {
        return settledArtists.slice(0, 5);
    }, [settledArtists])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSettledArtistsAction());
    }, [dispatch]);

    return (
        <ArtistWrapper>
            <div className="header">
                <span className="title">入驻歌手</span>
                <a href='#/' className="show_total">常看全部&gt;</a>
            </div>
            <div className="artist_list">
                {
                    artists.map((item, index) => {
                        return (
                            <div className="artist_item" key={item.id}>
                                <img src={item.picUrl+"?param=62y62"} alt="" />
                                <div className="artist_item_right">
                                    <div className="artist_name">{item.name}</div>
                                    <div className="artist_alia">{item.alias.map(alia => alia)}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="button">申请成为网易音乐人</div>
        </ArtistWrapper>
    );
});

export default Artist;