const GetTime = ({seconds}) => {
    let min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    let hr = 0;
    if(min >= 60){
        hr = Math.floor(min / 60);
        min = min % 60;
    }
    return <p>{hr > 9 ? hr : "0" + hr} : {min > 9 ? min : "0" + min} : {sec > 9 ? sec : "0" + sec}</p>
}

export default GetTime