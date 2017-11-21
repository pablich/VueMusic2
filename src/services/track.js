import musicService from './music';

const trackService = {

};

trackService.search = (q) => {
  const type = 'track';
  return musicService.get('/search', {
    params: { q, type },
  })
    .then(res => res.data);
};
export default trackService;