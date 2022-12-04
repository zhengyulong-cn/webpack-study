import _ from 'lodash';
import './style.css';
import RefImage from './toRef和toRefs.svg';
import Data from './assets/data.xml';
import Notes from './assets/data.csv';
function component() {
  const el = document.createElement('div');
  el.innerHTML = _.join(['Hello', 'webpack'], '-');
  el.classList.add('hello');

  const myPic = new Image();
  myPic.src = RefImage;
  el.appendChild(myPic)
  // 加载数据
  console.log('xml', Data);
  console.log('csv', Notes);
  return el;
}
document.body.appendChild(component())