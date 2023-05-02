import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import localStorageService from './localStorage';

const KEY_LOCAL_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const { save, load } = localStorageService;

const onSendUpdatePlaybackTimeInlocalStorage = e => {
  const currentTimePlayback = e.seconds;
  save(KEY_LOCAL_STORAGE, currentTimePlayback);
};

player.on('timeupdate', throttle(onSendUpdatePlaybackTimeInlocalStorage, 1000));

player.setCurrentTime(load(KEY_LOCAL_STORAGE));
