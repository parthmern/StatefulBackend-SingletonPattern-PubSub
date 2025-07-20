import gameManagerInstace from "./GameManager";

export function startLogger(){
    setInterval(()=>{
        gameManagerInstace.logState();
    }, 3000);
}