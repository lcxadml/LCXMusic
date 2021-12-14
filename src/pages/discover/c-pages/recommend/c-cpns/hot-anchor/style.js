import styled from "styled-components";

export const AnchorWarpper = styled.div`
    .header {
        display: flex;
        font-size: 12px;
        font-weight: 700;
        padding-bottom: 5px;
        width: 210px;
        margin: auto;
        margin-top: 20px;
        border-bottom: 1px solid #ccc;
    }
    .anchor_list {
        margin: 20px 0 0 20px;
        .anchor_item {
            margin-top: 10px;
            .anchor_right {
                padding-left: 10px;
                display: inline-block;
                .anchor_name {
                    color: #000;
                }
            }
        }
    }
`