import styled from "styled-components";
import sprite_02 from "@/assets/img/sprite_02.png"
import sprite_icon from "@/assets/img/sprite_icon2.png"
export const RankingWrapper = styled.div`
width: 230px;
.ranking_top {
    padding: 20px;
    width: 230px;
    display: flex;
}
    .top_image {
        width: 80px;
        img {
            width: 100%;
            height: 80px;
        }
    }
    .top_info {
        margin: 10px 0 0 10px;
        font-size: 14px;
        font-weight: 700;
        .title {
            color: #333;
            display: block;
        }
        .play, .sub {
            cursor: pointer;
            margin-top: 3px;
            background-image: url(${sprite_02});
            display: inline-block;
            width: 22px;
            height: 22px;
        }
        .play {
            background-position: -267px -205px;
        }
        .sub {
            background-position: -300px -205px;
            margin-left: 15px;
        }
    }
    .body {
        .ranking_item {
            height: 32px;
            line-height: 32px;
            .index {
                display: inline-block;
                width: 14px;
                text-align: center;
                font-size: 16px;
                margin-left: 25px;
                margin-right: 17px;
            }
            .song_name {
                position: relative;
                display: inline-block;
                width: 165px;
                font-size: 12px;
                color: #000;
                .name {
                    display: inline-block;
                    width: 150px;
                    height: 21px;
                    line-height: 21px;
                }
                .play_icon, .add_icon, .sub_icon {
                    display: none;
                    background-image: url(${sprite_02});
                    position: absolute;
                    right: 0; top: 4px;
                    width: 17px;
                    height: 17px;
                }
                .play_icon {
                    background-position: -267px -268px;
                    right: 46px;
                }
                .add_icon {
                    background-image: url(${sprite_icon});
                    right: 23px;
                    background-position: -0 -698px;
                }
                .sub_icon {
                    background-position: -297px -268px;
                }
            }
            .song_name:hover {
                .play_icon, .add_icon, .sub_icon{
                    display: block;
                }
                .name {
                    width: 100px;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    text-decoration: underline;
                    line-height: 31px;
                }
            }
        }
        .ranking_item:nth-child(-n+3) {
            .index {
                color: #c10d0c;
            }
        }
    }
    .footer {
        display: block;
        height: 32px;
        line-height: 32px;
        text-align: right;
        margin-right: 20px;
    }
`