import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './layout.module.css'

const Layout = () => {
    return (
        <>
            <Header />
            <main className={styles.main}><Outlet /></main>
            <Footer />
        </>
    );
};

export default Layout;