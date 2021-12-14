import styled from "styled-components";
export const ArtistWrapper = styled.div`
    padding-top: 15px;
    .header {
        display: flex;
        font-size: 12px;
        justify-content: space-between;
        padding-bottom: 5px;
        width: 210px;
        margin: auto;
        border-bottom: 1px solid #ccc;
        .title {
            color: #333;
        }
        .show_total {
            color: #666;
        }
    }
    .artist_list {
        width: 230px;
        height: 380px;
        margin: 6px 0 14px 20px;
        display: flex;
        flex-direction: column;
        .artist_item {
            cursor: pointer;
            margin-top: 10px;
            width: 212px;
            height: 64px;
            border: 1px solid #e9e9e9;
            background-color: #f5f5f5;
            img {
                vertical-align: top;
            }
        }
        .artist_item:hover {
            background-color: #f0f0f0;
        }
        .artist_name {
            font-size: 14px;
            font-weight: 700;
            margin: 10px 0 6px 25px;
        }
        .artist_alia {
            margin-left: 25px;
        }
        .artist_item_right {
            display: inline-block;
        }
    }
    .button {
        margin-left: 20px;
        border: 2px solid #ccc;
        background-color: #f5f5f5;
        width: 205px;
        border-radius: 4px;
        height: 31px;
        font-weight: 700;
        line-height: 29px;
        text-align: center;
        cursor: pointer;
    }
    .button:hover {
        background-color: #fff;
    }

`