import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Tours from './components/Tours';

function Main() {
    return (
        <>
        <Nav />
        <Hero />
        <About />
        <Services />
        <Tours />
        <Footer />
    </>
    );
}

export default Main
