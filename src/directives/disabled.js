const disabled = {};

function setDisabled(el, binding) {
  if (!binding.value) {
    el.style.filter = 'grayscale(100%)';
    el.style.cursor = 'not-allowed';
    console.log(binding.value);
  }
}

disabled.install = function (Vue) {
  Vue.directive('disabled', {
    bind(el, binding) {
      setDisabled(el, binding);
    },
  });
};

export default disabled;

