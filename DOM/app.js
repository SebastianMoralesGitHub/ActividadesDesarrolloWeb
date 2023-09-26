//Creación:
const usersChoise = document.createElement('h1');
const computerChoise = document.createElement('h1');
const Result = document.createElement('h1');
//Encontrar por id:
const gameGrid = document.getElementById('root');
gameGrid.append(usersChoise);
gameGrid.append(computerChoise);
gameGrid.append(Result);


const Choises = ['piedra','papel','tijera'];
let userChoise;
let cpuChoise;
const GenerateComputerChoise = () =>
{
    const randomchoise = Choises[Math.floor(Math.random()*3)];
    cpuChoise = randomchoise;
    computerChoise.innerHTML=`La seleccion del computador fue: ${cpuChoise} `
}
const GenerateResults = ()=>
{
    switch(userChoise+cpuChoise)
    {
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijeratijera':
            Result.innerHTML = 'Empate';
            break;
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            Result.innerHTML = 'Ha ganado el usuario';
            break;
        default: Result.innerHTML = 'Ha ganado el computador';
        break;     
    }
}
const handleClick = e =>
{
    userChoise = e.target.id;
    usersChoise.innerHTML=`Su selección fue: ${userChoise}`; 
    GenerateComputerChoise();
    GenerateResults();
}
for(let index = 0; index < Choises.length; index ++)
{
    const buttons = document.createElement('button');
    buttons.id = Choises[index];
    buttons.innerHTML = Choises[index];
    buttons.addEventListener("click",handleClick);
    gameGrid.appendChild(buttons);
}



