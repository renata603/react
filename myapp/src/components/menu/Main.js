import React from "react";

import Catalog from "../Main/Catalog";
import Blog from "../Main/Blog";
import Faq from "../Main/Faq";
import About from "../Main/About";
import Contacts from "../Main/Contacts";


function Main () {
    return (
        <main>
            <Catalog />
            <Blog />
            <Faq />
            <About />
            <Contacts />
        </main>

    );
}

export default Main;