import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom'
import { logementService } from '../_services/Logement.service'

const FicheLogement = () => {

    const [logement, setLogement] = useState({})
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
        console.log('ok')
        return <Navigate to="/error-404" replace={true} />
    }

    return (


        <>
            <p>fiche logement n°{logement.id}</p>
        </>
    );
};

export default FicheLogement;