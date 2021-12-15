import React from "react";
import { Redirect } from "react-router";
import Album from "../pages/discover/c-pages/album";
import Artist from "../pages/discover/c-pages/artist";
import Djradio from "../pages/discover/c-pages/djradio";
import Ranking from "../pages/discover/c-pages/ranking";
import Recommend from "../pages/discover/c-pages/recommend";
import Songs from "../pages/discover/c-pages/songs";
import Friends from "../pages/friends";
import Mine from "../pages/mine";
import Player from "../pages/player";
const Discover = React.lazy(() => import("../pages/discover"));

const routes = [
    {
        path: '/',
        exact: true,
        render: () => {
            return (
                <Redirect to="/discover"/>
            )
        } 
    },
    {
        path: '/friend',
        component: Friends
    },
    {
        path: '/discover',
        component: Discover,
        routes: [
            {
                path: "/discover/",
                exact: true,
                render: () => {
                    return (
                        <Redirect to="/discover/recommend"/>
                    )
                }
            },
            {
                path: "/discover/recommend",
                component: Recommend
            },
            {
                path: "/discover/ranking",
                component: Ranking
            },
            {
                path: "/discover/songs-sheet",
                component: Songs
            },
            {
                path: "/discover/djradio",
                component: Djradio
            },
            {
                path: "/discover/artist",
                component: Artist
            },
            {
                path: "/discover/album",
                component: Album
            },
            {
                path: "/discover/songs/:id",
                component: Player
            }
        ]
    },
    {
        path: '/mine',
        component: Mine
    },
];
export default routes;