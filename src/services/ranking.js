import request from './request'

export const getTopList = () => {
    return request({
        url: "/toplist",
    })
}

export const getRankingById = (id) => {
    return request({
        url: "/top/list",
        params: {
            id
        }
    })
} 