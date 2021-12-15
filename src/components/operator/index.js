import React, { memo } from 'react';
import { useDispatch } from 'react-redux'

import { getSongDetailAction } from '../../pages/player/store/action';

import { OperatorWrapper } from './style'
const Operator = memo((props) => {
    const { id } = props;
    const dispatch = useDispatch();
    const playCurrentSong = () => {
        dispatch(getSongDetailAction(id));
    }
    return (
        <OperatorWrapper>
            <div className="operator">
                    <div className="play_btn" onClick={playCurrentSong}>
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
        </OperatorWrapper>
    );
});

export default Operator;