
export const getplayCountFormate = (count) => {
    if(count < 1000000) {
        return count + '';
    } else {
        return Math.floor(count / 10000) + '万'
    } 
}
export const formatDate = (date) => {
    const time = new Date(date);
    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    const minutes =   time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  
    return minutes + ':' + seconds;
}

export const getPalySong = (id) => {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
} 