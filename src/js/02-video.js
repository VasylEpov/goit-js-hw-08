import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';

 
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(data => localStorage.setItem("videoplayer-current-time", JSON.stringify(data)), 1000));

if (localStorage.getItem('videoplayer-current-time')) {
    const playerData = JSON.parse(localStorage.getItem('videoplayer-current-time'));
    player.setCurrentTime(playerData.seconds);
}