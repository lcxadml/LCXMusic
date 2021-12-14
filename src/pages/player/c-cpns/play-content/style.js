import styled from 'styled-components'
import sprite_cover from '@/assets/img/sprite_cover.png'
import sprite_icon2 from '@/assets/img/sprite_icon2.png'
import sprite_button from '@/assets/img/sprite_button.png'
export const ContentWrapper = styled.div`
    display: flex;
    .content_left {
        .image {
            position: relative;
            margin: 70px 0 50px 75px;
        }
        .mask {
            position: absolute;
            left: -38px;
            top: -38px;
            width: 206px;
            height: 205px;
            background: url(${sprite_cover});
            background-position: -140px -580px;
        }
        .link {
            color: #0c73c2;
            font-size: 12px;
            margin-left: 80px;
            text-decoration:underline;
        }
        .link:before {
            content: "";
            display: inline-block;
            background: url(${sprite_icon2});
            background-position: -34px -863px;
            vertical-align: middle;
            width: 16px;
            height: 16px;
        }
    }
    .content_right {
        i {
            display: inline-block;
            line-height: 31px;
            text-align: center;
        }
        margin-left: 70px;
        width: 414px;
        .key {
            color: #999;
            margin: 10px 0;
        }
        .value {
            color: #0c73c2;
        }
        .song_name {
            margin-top: 20px;
            font-size: 24px;
            color: #333;
        }
        .song_name:before {
            content: '';
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
            width: 54px;
            height: 24px;
            background: url(${sprite_icon2});
            background-position: 0 -463px;
        }
        .operator {
            display: flex;
            .play_btn {
                width: 66px;
                height: 31px;
                background: url(${sprite_button});
                background-position: right -428px;
                i {
                    margin-left: 10px;
                    text-align: right;
                    width: 51px;
                    color: #fff;
                    height: 31px;
                    background: url(${sprite_button});
                    background-position: 0 -387px;
                }
                i:before {
                    display: inline-block;
                    content: "";
                    width: 20px;
                    height: 18px;
                    margin-right: 2px;
                    background: url(${sprite_button});
                    background-position: 0 -1622px;
                    vertical-align: sub;
                }
            }
            .add_btn {
                height: 31px;
                width: 31px;
                background: url(${sprite_button});
                background-position: 0 -1588px;
            }
            .collect_btn, .share_btn, .down_btn {
                width: 59px;
                height: 31px;
                background: url(${sprite_button});
                background-position: right -1020px;
                margin-left: 5px;
                i {
                    text-align: right;
                    width: 54px;
                    background: url(${sprite_button});
                    background-position: 0 -977px;
                }
            }
            .collect_btn i {
                background-position: 0 -977px;
            }
            .share_btn i {
                background-position: 0 -1225px;
            }
            .down_btn i {
                background-position:0 -2761px;
            }
            .comment_btn {
                margin-left: 5px;
                width: 86.2px;
                height: 31px;
                background: url(${sprite_button});
                background-position: right -1020px; 
                i {
                    text-align:right;
                    width: 81.2px;
                    background: url(${sprite_button});
                    background-position: 0 -1465px;
                }
            }
        }
        .lyric_content {
            margin: 40px 0 0 20px;
            height: ${props => props.isExtent ? "auto" : "325px"};
            overflow: hidden;
            p {
                line-height: 25px;
            }
        }
        .extent {
            margin-left: 20px;
            color: #0c73c2;
        }
        .extent:after {
            content: "";
            display: inline-block;
            margin-top: 20px;
            width: 11px;
            height: 8px;
            background: url(${sprite_icon2});
            background-position: ${props => props.isExtent ? "-45px -520px" : "-65px -520px"};
        }
    }
`