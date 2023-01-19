const data =require('./home1.json')

module.exports = [
  {
    // url: '/vue-admin-template/table/list',
    url:'/home/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        // data: {
        //   total: items.length,
        //   items: items
        // }
        data
      }
    }
  }
]
