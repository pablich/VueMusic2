import trackService from './../services/track';

const actions = {
  getTrackById(context, payload) {
    return trackService.getById(payload.id)
      .then((res) => {
        context.commit('setTrack', res);
        return res;
      });
  },
};

export default actions;
