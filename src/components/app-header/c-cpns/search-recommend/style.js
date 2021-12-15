import styled from 'styled-components'

export const SearchRecommendWrapper = styled.div`
    position: absolute;
    left: 881px;
    top: 57px;
    z-index: 9;
    width: 240px;
    box-sizing: border-box;
    border: 1px solid #bebebe;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 7px #555;
    .search_user {
        cursor: pointer;
        padding: 8px 10px;
        font-size: 12px;
        border-bottom: 1px solid #bebebe;
        color: #666;
    }
    .search_user:hover {
        text-decoration: underline;
    }
    .body {
        font-size: 12px;
        .search_item {
            display: flex;
            .item_key {
                padding-left: 5px;
                width: 55px;
                border-right: 1px solid #bebebe;
            }
            // .item_key:before {
            //     content: "";
            //     display: inline-block;
            //     width: 14px;
            //     height: 15px;
            // }
            .songs_key, .artists_key, .albums_key, .playlists_key {
                display: inline-block;
                vertical-align: middle;
                margin-right: 3px;
                width: 14px;
                height: 15px;
            }
            .songs_key {
                background-position: -35px -300px;
            }
            .artists_key {
                background-position: -50px -300px;
            }
            .albums_key {
                background-position: -35px -320px;
            }
            .playlists_key {
                background-position: -50px -320px;
            }
            .item_value {
                flex: 1;
                .itemx {
                    width: 183px;
                    cursor: pointer;
                    padding: 4px 8px;
                }
                .itemx:hover {
                    background: #bebebe;
                }
            }
        }
        .search_item:nth-child(2n) {
            .item_value  {
                padding: 4px 0;
                background: #f5f5f5;
                border-top: 1px solid #bebebe;
                border-bottom: 1px solid #bebebe;
            }
        }
    }
`