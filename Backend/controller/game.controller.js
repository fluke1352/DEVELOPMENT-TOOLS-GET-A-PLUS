import GameModel from "../models/game.model.js"

const fetchGameInfo = async (req, res) => {
    try {
        const allGame = await GameModel.find()
        res.status(200).json(allGame)
    }
    catch (err) {
        res.status(500).json({ error : "something went wrong" })
    }
}
export default { fetchGameInfo }