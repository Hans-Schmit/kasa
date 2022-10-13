let getAllLogements = async () => {
    try {
        const res = await fetch('./logements.json'
            , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        const data = await res.json()
        return data
    }
    catch (error) {
        console.log(error)
    }

}

let getOneLogement = async (logementId) => {
    try {
        const data = await getAllLogements()
        console.log('data', data)
        const logement = await data.find((aLogement) => aLogement.id === logementId)
        console.log('logement', logement)
        return logement
    }
    catch (error) {
        console.log(error)
    }
}

export const logementService = { getAllLogements, getOneLogement }