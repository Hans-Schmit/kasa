import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Collaps from '../components/Collaps'
import Tag from '../components/Tag'
import Host from '../components/Host'
import Rating from '../components/Rating'
import { logementService } from '../_services/Logement.service'
import styles from './ficheLogement.module.css'

const FicheLogement = () => {

    let { id } = useParams()

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
            logementService.getOneLogement(id)
                .then(res => {
                    setLogement(res)
                })
                .catch((error) => console.log(error))
        }

        return () => flagLoge.current = true
    }, [id])

    if (logement === undefined) {
        return <Navigate to="/error-404" replace={true} />
    }

    return (


        <>
            <Carousel data={logement.pictures} />
            <div className={styles.box}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{logement.title}</h1>
                    <p className={styles.location}>{logement.location}</p>
                    <div className={styles.tags}>
                        {
                            logement.tags.map(tag => (
                                <Tag data={tag} key={tag} />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.host}>
                    <Host data={logement.host} />
                    <Rating data={logement.rating} />
                </div>
            </div>
            <div className={styles.details}>
                <Collaps data={{ title: "Description", text: logement.description, style: "Logement" }} />
                <Collaps data={{ title: "Équipements", text: logement.equipments, style: "Logement" }} />
            </div>
        </>
    );
};

export default FicheLogement;