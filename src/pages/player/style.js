import styled from "styled-components";
import wrapbg from '@/assets/img/wrap-bg.png';
export const PlayerWrapper = styled.div`
    height: auto;
    .content {
        display: flex;
        background: url(${wrapbg});
    }
    .left {
        flex: 3;
    }
    .right {
        flex: 1.13;
    }
`