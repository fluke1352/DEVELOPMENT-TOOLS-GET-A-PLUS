import express from 'express';
import gameController from '../controller/game.controller.js'

const router = express.Router();

router.route('/api/game')
    .get(gameController.fetchGameInfo)

export default router