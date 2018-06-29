const router = require('express').Router();
module.exports = initRoutes;

function initRoutes(taskRepository) {

  router.route('/')
    .get(list)
    .post(create);

  router.route('/:id')
    .delete(remove)

  return router;

  async function list(req, res) {
    const tasks = await taskRepository.list();

    return res.json(tasks);
  }

  async function create(req, res) {
    const task = await taskRepository.create(req.body);

    return res.json(task);
  }

  async function remove(req, res) {
    await taskRepository.remove(req.params.id);

    return res.status(204).end();
  }
}
