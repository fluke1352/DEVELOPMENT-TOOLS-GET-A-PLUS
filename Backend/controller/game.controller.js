import GameModel from "../models/game.model"

const fetchGameInfo = async (req, res) => {
    try {
        const allGame = GameModel.find()
        res.status(200).json(allGame)
    }
    catch (err) {
        res.status(500).json({ error : err })
    }
}

export default { fetchGameInfo }