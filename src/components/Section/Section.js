import React from "react";
import Title from "../Title/Title";

function Section({text, children}) {
    return (
    <section>
            <Title text={ text}/>
        {children}
    </section>
 )
}

export default Section;