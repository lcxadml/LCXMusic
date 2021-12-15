import React, { memo, useState } from 'react';
import { ContentWrapper } from './style'
import Operator from '../../../../components/operator';
const PlayContent = memo((props) => {
    const [isExtent, setIsExtent] = useState(false);
    // const { currentSong, lyrics } = useSelector(state => ({
    //     currentSong: state.getIn(['player', 'currentSong']),
    //     lyrics: state.getIn(['player', 'lyrics'])
    // }), shallowEqual)
    const { currentSong, lyrics=[], currentSongId } = props;
    const changeExtent = () => {
        setIsExtent(!isExtent);
    }
    return (
        <ContentWrapper isExtent={ isExtent}>
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
                <Operator id={currentSongId} />
                {
                    lyrics.length === 0 ?
                    <h2 className='no_song_content'>暂无歌词。</h2> : 
                    <div>
                        <div className="lyric_content">
                            {
                                lyrics.map((item, index) => {
                                    return (
                                        <p className="item" key={index}>{item.content ? item.content : <br/>}</p>
                                    )
                                })
                            }
                        </div>
                        {
                            lyrics.length < 7 ? "" :
                            <span className="extent" onClick={changeExtent}>{isExtent ? "收起" : "展开"}</span>
                        }
                            </div>
                        }
                    </div>
        </ContentWrapper>
    );
});

export default PlayContent;