let getAllLogements = async () => {
    try {
        const res = await fetch(process.env.PUBLIC_URL + '/logements.json'
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
        const logement = await data.find((aLogement) => aLogement.id === logementId)
        return logement
    }
    catch (error) {
        console.log(error)
    }
}

export const logementService = { getAllLogements, getOneLogement }