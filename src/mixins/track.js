const trackMixin = {
  methods: {
    selectTrack() {
      if (this.track.preview_url) {
        this.$emit('select', this.track.id);
      }
      this.$store.commit('setTrack', this.track);
    },
  },
};

export default trackMixin;
