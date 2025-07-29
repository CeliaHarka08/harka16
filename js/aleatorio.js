const nomes = ["Zezinho", "Fiorina", "Aurora", "Roberto", "Amanda", "Zeca", "Gilmar"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)