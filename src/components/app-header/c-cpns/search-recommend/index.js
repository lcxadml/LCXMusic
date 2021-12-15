import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchRecommendWrapper } from './style';
const SearchRecommend = memo((props) => {
    const { res } = props;
    console.log(res);
    const searchResObj = {
        'songs': "单曲", 
        'artists': "歌手", 
        'albums': "专辑", 
        'playlists': "歌单"
    }
    let history = useHistory();

    const goPlayer = (id) => {
        history.push(`/discover/songs/${id}`);
    }
    return (
        <SearchRecommendWrapper>
            <div className="top">
                <p className='search_user'>搜“{props.inputValue}”相关用户&gt;</p>
            </div>
            <div className="body">
                {
                    res.order && res.order.map((item, index) => {
                        return (
                            <div className="search_item" key={item}>
                                <div className={`item_key`}>
                                    <span className={`${item}_key sprite_icon2`}></span>
                                    {searchResObj[item]}
                                    </div>
                                <div className="item_value">
                                    {res[item].map(itemX => {
                                        return (
                                            <div 
                                            onClick={() =>  {
                                                goPlayer(itemX.id)
                                                } 
                                            } 
                                            key={itemX.id} 
                                            className='itemx text-nowrap'
                                            >
                                                {itemX.name} - 
                                                {itemX.artists && itemX.artists.map(itemY => itemY.name+" ")}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </SearchRecommendWrapper>
    );
});

export default SearchRecommend;