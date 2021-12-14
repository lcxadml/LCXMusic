import React, { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd';
import { getNewAlbumsAction } from '../../store/action';
import HeadREC from '@/components/them-header-rcd';
import { NewAlbumWrapper } from './style';
const NewAlbum = memo(() => {
    const dispatch = useDispatch();
    const { newAlbums = [] } = useSelector(state => ({
        newAlbums: state.get('recommend').get('newAlbums')
    }), shallowEqual)


    useEffect(() => {
        dispatch(getNewAlbumsAction());
    }, [dispatch])


    const newArrs = useMemo(() => {
        let arr = [], arrs = [];
        newAlbums.forEach((item, index) => {
            arr.push(item);
            if((index + 1) % 5 === 0 || (index + 1) === newAlbums.length) {
                arrs.push([...arr]);
                arr = [];
            }
        })
        return arrs;
    }, [newAlbums])
    const carouselRef = useRef();
    const getPre = useCallback(() => {
        carouselRef.current.prev()
    }, [])
    const getNext = useCallback(() => {
        carouselRef.current.next()
    }, [])
    return (
        <NewAlbumWrapper>
            <HeadREC title="新碟上架" />
            <div className="content">
                <Carousel  className="carousel" ref={carouselRef} speed={1000}>
                    {newArrs.map((item, index) => {
                        return (
                            <div className="carousel-item" key={index}>
                                {item.map((item, indey) => {
                                    return (
                                        <div className="albums-item" key={indey}>
                                            <div className="img">
                                                <img src={item.picUrl + '?param=100y100'} alt="" />
                                                <div className="mask"></div>
                                            </div>
                                            <div className="title">{item.name}</div>
                                            <div className="aname">{item.artist.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Carousel>
                <div className="carousel-left" onClick={getPre}></div>
                <div className="carousel-right" onClick={getNext}></div>
            </div>
         
        </NewAlbumWrapper>
    );
});

export default NewAlbum;