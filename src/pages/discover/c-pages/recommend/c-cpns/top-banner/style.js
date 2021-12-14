import styled from 'styled-components'
import download from '@/assets/img/download.png'
import bannersSprit from '@/assets/img/banner_sprite.png'
export const TopBannerWrap = styled.div`
    background: url(${props => props.bgimg}) no-repeat;
    background-size: 6000px;
    position: relative;
    .wrap {
        height: 285px;
        display: flex;
    }
`

export const TopBannerLeft = styled.div`
    flex: 3;
    width: 100%;
    .left { 
        width: 735px;
        height: 100%;
    }
    .left img {
        width: 100%;
        height: 285px;
    }
`
export const TopBannerPointer = styled.div`

    .left-point:hover, .right-point:hover {
        background-color: #333;
    }
    .left-point, .right-point {
        width: 37px;
        height: 63px;
        background: url(${bannersSprit});
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
    }
    .left-point {
        background-position: 0 -361px;
        left: 125px;
    }
    .right-point {
        background-position: 0 -510px;
        right: 125px;
    }
`
export const TopBannerRight = styled.div`
    flex: 1;
    background: url(${download});
`