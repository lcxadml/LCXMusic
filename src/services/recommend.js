import request from './request';

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}

export function getArtist(type = -1, area = -1) {
  return request({
    url: "/artist/list",
    params: {
      type,
      area 
    }
  })
}

export function getHotAnchor(limit) {
  return request({
    url: "http://123.207.32.32:9001/dj/toplist/popular",
    params: {
      limit
    }
  })
}