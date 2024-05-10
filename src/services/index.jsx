export async function getDatosZelda(pageIndex){
    try {
        const response = await fetch(`https://zelda.fanapis.com/api/games?limit=6&page=${pageIndex}`);
    
        if(!response.ok){
            throw new Error(`API Zeld returned status code ${response.status}`)
        };
    
        const datos = await response.json();

        return datos.data;
    } catch (error) {
        console.error(`Error fetching Zelda datas ${error.message}`);
    }
};