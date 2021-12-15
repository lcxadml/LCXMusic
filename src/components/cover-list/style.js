import styled from "styled-components";
import cover from "@/assets/img/sprite_cover.png"
import icon from '@/assets/img/sprite_icon.png'
export const CoverContainer = styled.div`
    .list {
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        .cover-item {
            font-size: 14px;
            width: 140px;
            height: 140px;
            margin: 15px 21px 30px;
            .image {
                cursor: pointer;
                position: relative; 
                width: 140px;
                height: 140px;
                z-index: 99;
                .cover {
                    position: absolute;
                    left: 0; right: 0; top: 0; bottom: 0;
                    background: url(${cover});
                    background-position: 0 0;
                }
                .bottom {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 27px;
                    color: #ccc;
                    font-size: 12px;
                    background: url(${cover});
                    background-position: 0 -537px;
                    line-height: 27px;
                    padding-left: 32px;
                }
                .bottom:before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 10px;
                    width: 14px;
                    height: 11px;
                    background: url(${icon});
                    background-position: 0 -24px;
                }
                .bottom:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    width: 16px;
                    height: 17px;
                    transform: translateY(-50%);
                    right: 10px;
                    background: url(${icon});
                    background-position: 0 0;
                    background-repeat: no-repeat;
                }
            }
            .title {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
        }
    }
`