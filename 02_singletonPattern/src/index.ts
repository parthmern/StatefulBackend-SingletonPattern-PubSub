import gameManagerInstace from "./GameManager";
import { startLogger } from "./logger";


startLogger();
setInterval(() => {
    gameManagerInstace.addGame({
        id: Math.random().toString(),
        "whitePlayer": "parth",
        "blackPlayer": "patel",
        moves: []
    })
}, 5000)
