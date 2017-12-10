const dashboard = require('../controllers/dashController')

const dashRoutes = (app) => {
  app.route('/msgs')
    .get(dashboard.list_all_msgs)
}

module.exports = dashRoutes
