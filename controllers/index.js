const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboard = require('./userRoutes');

router.use('/user', homeRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;