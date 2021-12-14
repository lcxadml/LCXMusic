import React, { memo, useState } from 'react';
import {useSelector, shallowEqual} from 'react-redux'
import { ContentWrapper } from './style'
const PlayContent = memo(() => {

    const [isExtent, setIsExtent] = useState(false);
    const { currentSong, lyrics } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong']),
        lyrics: state.getIn(['player', 'lyrics'])
    }), shallowEqual)
    
    
    const changeExtent = () => {
        setIsExtent(!isExtent);
    }
    return (
        <ContentWrapper isExtent={isExtent}>
            <div className="content_left">
                <div className="image">
                    <img src={currentSong
                         && currentSong.al 
                         && currentSong.al.picUrl+'?param=132y132'} 
                         alt="" 
                        />
                    <div className="mask"></div>
                </div>
                <a href="#/" className="link">生成外链播放器</a>
            </div>
            <div className="content_right">
                <div className="song_name">{currentSong.name}</div>
                <div className="singer">
                    <div className="key">
                        歌手：
                        <a href="#/" className='value'>
                        {currentSong.ar && currentSong.ar[0].name}
                        </a>
                    </div>
                </div>
                <div className="album">
                    <div className="key">
                        所属专辑：
                        <a href="#/" className='value'>
                        {currentSong.al && currentSong.al.name}
                        </a>
                    </div>
                </div>
                <div className="operator">
                    <div className="play_btn">
                        <i>播放</i>
                    </div>
                    <div className="add_btn"></div>
                    <div className="collect_btn">
                        <i>收藏</i>
                    </div>
                    <div className="share_btn">
                        <i>分享</i>
                    </div>
                    <div className="down_btn">
                        <i>
                        下载
                        </i>
                    </div>
                    <div className="comment_btn">
                        <i>(200715)</i>
                    </div>
                </div>
                <div className="lyric_content">
                    {
                        lyrics.map((item, index) => {
                            return (
                                <p className="item" key={item.time}>{item.content ? item.content : <br/>}</p>
                            )
                        })
                    }
                </div>
                <a href='#/discover/player' className="extent" onClick={changeExtent}>{isExtent ? "收起" : "展开"}</a>
            </div>
        </ContentWrapper>
    );
});

export default PlayContent;