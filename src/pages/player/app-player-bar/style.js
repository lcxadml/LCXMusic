import styled from "styled-components"
import playerBar from "@/assets/img/playbar_sprite.png"
import sprite_song_text from "@/assets/img/sprite_song_text.png"
import progress from '@/assets/img/progress_bar.png'
import sprite_icon from '@/assets/img/sprite_icon.png'
export const PlayerBarWrapper = styled.div`
position:fixed;
height: 52px;
background-image: url(${playerBar});
left: 0;
right: 0;
bottom: 0;
z-index: 999;
.content {
    heigth: 52px;
    display: flex;
}
.showLyric, .lyric_content {
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    position: fixed;
    background: rgba(0, 0, 0, .5);
    bottom: 46px;
}

.showLyric {
    font-size: 20px;
    width: 30px;
    right: 35px;
    height: 30px;
}
.lyric_content {
    width: 500px;
    height: 50px;
    letter-spacing: 2px;
    line-height: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 20px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
}
`

export const Control = styled.div`
    width: 137px;
    display: flex;
    .pre, .next {
        cursor: pointer;
        margin-top: 17px;
        background-image: url(${playerBar});
        width: 28px;
        height: 28px;
    }
    .pre {
        background-position: 0 -130px;
    }
    .next {
        background-position: -80px -130px;
    }
    .play_paulse {
        cursor: pointer;
        background-image: url(${playerBar});
        background-position: 0 -204px;
        margin: 12px 10px 0;
        width: 36px;
        height: 36px;
    }
`

export const PlayInfo = styled.div`
    flex: 1;
    display: flex;
    .play_left {
        margin-top: 10px;
        width: 34px;
        height: 34px;
        position: relative;
        .authur {
            width: 100%;
            height: 100%;
        }
        .mask {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-image: url(${playerBar});
            background-position: 0 -80px;
        }
    }
    .play_right {
        padding-left: 14px;
        width: 581px;
        .play_top {
            display: flex;
            margin-top: 10px;
            .song_title {
                font-size: 12px;
                color: #e8e8e8;
            }
            .vedio {
                background: url(${playerBar});
                background-position: 0 -57px;
                cursor: pointer;
                display: inline-block;
                width: 19px;
                height: 17px;
                margin: 1px 14px 0 5px;
            }
            .singer {
                font-size: 12px;
                color: 9b9b9b;
            }
            .singer_link {
                cursor: pointer;
                margin-top: 3px;
                margin-left: 15px;
                width: 14px;
                height: 15px;
                background: url(${playerBar});
                background-position: -110px -103px;
            }
        }
        .play_body {
            display: flex;
            .time {
                margin-top: -3px;
                .current_time {
                    color: #A1A1A1;
                }
                .total_time {
                    color: #797979;
                }
            }
          
        } 

    }
    .ant-slider {
        margin-top: 0px;
        width: 466px;
    }
    .ant-slider-rail {
        background: url(${progress});
        background-position: right 0;
        height: 9px;
        width: 466px;
    }
    .ant-slider:hover .ant-slider-rail {
        background-color: transparent;
    }
    .ant-slider-handle {
        margin-top: -7px;
        background: url(${sprite_icon});
        background-position: 0 -250px;
        width: 22px;
        height: 24px;
        border: none;
        background-color: transparent;
    }
    .ant-slider-track {
        background: url(${progress});
        background-position: left -66px;
        height: 9px;
    }
    .ant-slider-handle:focus {
        border-color: transparent;
        box-shadow: none;
    }
`

export const Operator = styled.div`
    margin-top: 15px;
    width: 215px;
    display: flex;
    .opre {
        cursor: pointer;
        display: flex;
        .song_text, .collect, .share {
            background: url(${playerBar});
            width: 25px;
            height: 25px;
        }
        .song_text {
            background: url(${sprite_song_text});
        }
        .collect {
            background-position: -88px -163px;
        }
        .share {
            background-position: -114px -163px;
        }
    }
    .flag {
        position: relative;
        cursor: pointer;
        display: flex;
        margin-left: 20px;
        .ant-slider {
            position: absolute;
            display: flex;
            justify-content: center;
            width: 32px;
            left: -5px;
            top: -104px;
            margin: 0;
            height: 96px;
            padding: 0;
            background: url(${playerBar}) no-repeat;
            background-position: 0 -513px;
        }
        .ant-slider-rail {
            position: absolute;
            height: 0;
            top: 0;
            left: 0;
            background: transparent;
        }
        .ant-slider-handle {
            width: 18px;
            height: 20px;
            background: url(${sprite_icon});
            background-position: -40px -250px;
            border: none;
        }
        .ant-slider-handle:focus {
            border-color: transparent;
            box-shadow: 0 0 0 0 transparent;
        }
        .ant-slider-step {
            height: 100px;
        }
        .volume, .loop {
            background: url(${playerBar});
            width: 25px;
            height: 25px;

        }
        .ant-slider-vertical .ant-slider-handle {
            margin-left: 0;
        }
        .ant-slider-track {
            background: url(${playerBar});
            background-position: -40px bottom;
        }
        .ant-slider-mark {
            display: none;
        }
        .volume {
            background-position: -2px -248px;
        }
        .loop {
            background-position: ${props => {
                if(props.sequence === 0) {
                    return ' -3px -344px;';
                }else if(props.sequence === 1) {
                    return "-66px -248px;"
                }else {
                    return "-66px -344px;"
                }
            }};
        }
        .song_list {
            background: url(${playerBar});
            background-position: -42px -68px;
            width: 60px;
            font-size: 12px;
            height: 25px;
            text-align: right;
            line-height: 25px;
            padding-right: 15px;
            color: #666666;
        }
    }
`