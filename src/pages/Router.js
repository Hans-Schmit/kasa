import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import FicheLogement from './FicheLogement'
import APropos from './APropos'
import Error from './Error'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="/home" element={<Home />} />
                    <Route path="/fiche-logement/:id" element={<FicheLogement />} />
                    <Route path="/a-propos" element={<APropos />} />

                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
};

export default Router;