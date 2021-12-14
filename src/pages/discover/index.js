import React, { memo } from 'react';

import { dicoverMenu } from '../../common/local-data';
import { renderRoutes } from 'react-router-config'

import { DsicoverHeader, TopMenu } from './style'
import { NavLink } from 'react-router-dom';
const Discover = memo((props) => {
   
    return (
        <DsicoverHeader>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        dicoverMenu.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <NavLink to={item.link}>{ item.title }</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            <div className="body">
                {renderRoutes(props.route.routes)}
            </div>
        </DsicoverHeader>
    );
});

export default Discover;