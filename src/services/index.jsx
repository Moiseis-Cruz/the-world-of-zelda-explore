export async function getDatosZelda(pageIndex){
    const response = await fetch(`https://zelda.fanapis.com/api/games?limit=6&page=${pageIndex}`);
    const datos = await response.json()
    return datos.data
}