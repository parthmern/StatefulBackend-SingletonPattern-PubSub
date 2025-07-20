interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

// vairables | in memory Storage
export const games: Game[] = [];