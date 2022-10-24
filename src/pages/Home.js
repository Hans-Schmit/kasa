import React, { useEffect, useRef, useState } from 'react';
import Banner from '../components/Banner'
import Card from '../components/Card'
import { logementService } from '../_services/Logement.service'
import styles from './home.module.css'



const Home = () => {

    const [logements, setLogements] = useState([])
    const flag = useRef(false)

    useEffect(() => {

        if (flag.current === false) {
            logementService.getAllLogements()
                .then(res => {
                    setLogements(res)
                })
                .catch((err) => console.log(err))
        }
        return () => flag.current = true
    }, [])

    return (
        <>
            <Banner />
            <div className={styles.container}>
                {
                    logements.map(logement => (
                        <Card logement={logement} key={logement.id} />
                    ))
                }
            </div>
        </>
    );
};

export default Home;