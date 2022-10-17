import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Collaps from '../components/Collaps'
import Tag from '../components/Tag'
import Host from '../components/Host'
import Rating from '../components/Rating'
import { logementService } from '../_services/Logement.service'

const FicheLogement = () => {

    const [logement, setLogement] = useState({
        "id": "",
        "title": "",
        "cover": "",
        "pictures": [],
        "description": "",
        "host": {
            "name": "",
            "picture": ""
        },
        "rating": "",
        "location": "",
        "equipments": [],
        "tags": []
    })
    const flagLoge = useRef(false)

    useEffect(() => {
        if (flagLoge.current === false) {
            let logementId = new URLSearchParams(window.location.search).get("id")
            logementService.getOneLogement(logementId)
                .then(res => {
                    setLogement(res)
                })
                .catch((error) => console.log(error))
        }

        return () => flagLoge.current = true
    }, [])

    if (logement === undefined) {
        return <Navigate to="/error-404" replace={true} />
    }

    return (


        <>
            <Carousel data={logement.pictures} />
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div className='tagsContainer'>
                {
                    logement.tags.map(tag => (
                        <Tag data={tag} key={tag} />
                    ))
                }
            </div>
            <Host data={logement.host} />
            <Rating data={logement.rating} />
            <Collaps data={{ title: "Description", text: logement.description }} />
            <Collaps data={{ title: "Équipements", text: logement.equipments }} />
        </>
    );
};

export default FicheLogement;