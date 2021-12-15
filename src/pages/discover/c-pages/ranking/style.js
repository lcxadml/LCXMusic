import styled from 'styled-components'
import warp3 from '@/assets/img/wrap3.png'
export const RankingWrapper = styled.div`
    .content {
        background: url(${warp3});
        border: 1px solid #d3d3d3;
        display: flex;
        .left {
            flex: 0.973;
        }
        .right {
            flex: 3;
        }
    }
`