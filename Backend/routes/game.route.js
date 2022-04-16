import express from 'express';
import gameController from '../controller/game.controller';

const router = express.Router();

router.route('/api/game')
    .get(gameController.fetchGameInfo)

export default router