export const getLyricStr = (str) => {

    const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
    const lyrics = [];
    let lineStrings = str.split('\n');
    for(let item of lineStrings) {
        if(!!item) {
            const result = parseExp.exec(item);
            if(!result) continue;
            const time1 = result[1] * 60 * 1000;
            const time2 = result[2] * 1000;
            const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
            const time = time1 + time2 + time3;
            const content = item.replace(parseExp, '').trim();
            const lineObj = {time, content};
            lyrics.push(lineObj);
        }
    }
    return lyrics;
}