const { Router } = require('express');

const controller = require('../controllers/CoursesController');

const router = Router();

router.post('/', controller.create);
router.get('/', controller.read);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);
router.delete('/:id', controller.drop);

module.exports = router;
