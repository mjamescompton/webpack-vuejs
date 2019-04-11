import _ from 'lodash';
import './style.css';
import Vue from 'vue';

import App from './App.vue';

function component() {
  let element = document.createElement('div');
  let span = document.createElement('span');

  console.log('compton');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  span.innerHTML = _.join([' Inside', 'webpack'], ' ');
  span.classList.add('what');
  element.classList.add('hello');

  element.appendChild(span);

  return element;
}

document.body.appendChild(component());

new Vue({
  el: '#app',
  render: h => h(App)
});
