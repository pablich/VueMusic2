const getters = {
  trackTitle(state) {
    if (!state.track.name) {
      return '';
    }
    return `${state.track.name} - ${state.track.artists[0].name}`;
  },
};

export default getters;
