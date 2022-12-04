import _ from 'lodash';
import printMe from './print';
function component() {
  const el = document.createElement('div');
  const btn = document.createElement('button');
  el.innerHTML = _.join(['Hello', 'webpack'], '-');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  el.appendChild(btn)
  return el;
}
document.body.appendChild(component())