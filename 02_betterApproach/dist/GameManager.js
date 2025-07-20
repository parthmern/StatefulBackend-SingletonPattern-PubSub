"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameManager {
    constructor() {
        this.games = [];
    }
    addGame(game) {
        this.games.push(game);
    }
    getGames() {
        return this.games;
    }
    // e5e7
    addMove(gameId, move) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
    logState() {
        console.log(this.games);
    }
}
// only single instace created which is going to use by everyone
const gameManagerInstace = new GameManager();
exports.default = gameManagerInstace;
