interface Game {
    id: string; 
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

class GameManager {
    private games: Game[] = [];

    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    }

    // e5e7
    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }

    public logState(){
        console.log(this.games);
        
    }

}

// only single instace created which is going to use by everyone
const gameManagerInstace = new GameManager();
export default gameManagerInstace;