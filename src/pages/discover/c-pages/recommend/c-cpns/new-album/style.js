import styled from "styled-components";
import sprite_02 from '@/assets/img/sprite_02.png'
import cover from "@/assets/img/sprite_cover.png"
export const NewAlbumWrapper = styled.div`
    background-color: #fff;
    .carousel {
        width: 735px;
        height: 220px;
        
    }
    .carousel-item {
        width: 669px  !important;
        display: flex !important;
        height: 185px;
        padding: 20px 23px;
        margin: 20px 34px;
        border: 1px solid #ccc;
        background-color: #f5f5f5;
        .albums-item {
            font-size: 12px;
            width: 118px;
            margin: 0 5px;
            height: 150px;
            .img {
                width: 118;
                height: 100px;
                position: relative;
                .mask {
                    position: absolute;
                    background-image: url(${cover});
                    background-position: 0 -570px;
                    background-repeat: no-repeat;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                }
            }
            .title {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
            .aname {
                color: #666;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
        }
    }
    .content {
        position: relative;
    }
    .carousel-left, .carousel-right {
        position: absolute;
        background-image: url(${sprite_02});
        top: 77px;
        width: 17px;
        height: 17px;
        cursor: pointer;
    }
    .carousel-left {
        background-position: -260px -75px;
        left: 38px;
    }
    .carousel-right {
        background-position: -300px -75px;
        right: 41px;
    }
`