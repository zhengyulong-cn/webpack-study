function getComponent1() {
  return import('lodash').then(({ default: _ }) => {
    const el = document.createElement('div')
    el.innerHTML = _.join(['Hello', 'webpack'], '-');
    return el;
  }).catch(err => {
    return '组件加载时候发生报错'
  })
}
async function getComponent2() {
  const el = document.createElement('div');
  const { default: _ } = await import('lodash')
  el.innerHTML = _.join(['Hello', 'webpack'], ',');
  return el;
}
getComponent2().then((component) => {
  document.body.appendChild(component)
})