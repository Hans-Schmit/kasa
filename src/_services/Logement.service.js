let getAllLogements = async () => {
    try {
        const res = await fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
            , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )

        console.log(res)
        const data = await res.json()
        console.log(data)
        return data
    }
    catch (error) {
        console.log(error)
    }

}

let getOneLogement = async (logementid) => {
    try {
        const data = await fetch.get('../data/logements.json')
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export const logementService = { getAllLogements, getOneLogement }