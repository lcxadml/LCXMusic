import styled from 'styled-components'
import sprite_cover from '@/assets/img/sprite_cover.png'
import sprite_icon2 from '@/assets/img/sprite_icon2.png'
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
        
        .lyric_content {
            margin: 40px 0 0 20px;
            height: ${props => props.isExtent ? "auto" : "325px"};
            overflow: hidden;
            p {
                line-height: 25px;
            }
        }
        .no_song_content {
            text-align: center;
            margin-top: 50px;
        }
        .extent {
            margin-left: 20px;
            color: #0c73c2;
            cursor: pointer;
        }
        .extent:hover {
            text-decoration: underline;
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