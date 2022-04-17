import GameModel from "../models/game.model";
import { clearDatabase, closeDatabase, connect } from "./mongoMockup";

const mockGameInfoInsert = {
    img:"https://media.discordapp.net/attachments/933341907982102590/941773197903294464/WANNApng.png",
    game_id:"1",
    name:"Valorant",
    description:"Description: Valorant is a tactical shooting game involving two teams with 5 players in each team.",
    category:"FPS"
}


beforeAll(async() => await connect())

afterEach(async() => await clearDatabase())

afterAll(async() => await closeDatabase())

describe('Fecth game testing', () => {
    test('Add game for database and Query', async() => {
        await GameModel.create(mockGameInfoInsert)
        const GameResult = await GameModel.find({ name : "Valorant" })
        expect(GameResult.length).toEqual(1)
        expect(GameResult[0].name).toEqual("Valorant")
        expect(GameResult[0].description).toEqual("Description: Valorant is a tactical shooting game involving two teams with 5 players in each team.")
        expect(GameResult[0].img).toEqual("https://media.discordapp.net/attachments/933341907982102590/941773197903294464/WANNApng.png")
    })
})