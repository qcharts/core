const routes = []
// 根据文件夹中的 markdown文件自动生成路由
const contexts = require.context('.', true, /\.md$/)

contexts.keys().forEach(key => {
  const dirName = key.substring(key.indexOf('/') + 1, key.lastIndexOf('/'))
  const fileName = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  if (fileName && fileName !== '') {
    routes.push({
      path: `${dirName}-${fileName}`,
      // https://github.com/webpack/webpack/issues/6680
      component: () => import('./' + key.replace('./', ''))
    })
  }
})
routes.push({
  path: '',
  component: () => import('./list.vue')
})
export default routes
