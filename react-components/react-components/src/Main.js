import React from 'react';
import Greeting from "./Greeting";

class Main extends React.Component {

    render() {
        return (
            <section>
                <Greeting name="World" />
                <Greeting name="Ivan" />
                <Greeting name="All">All you need</Greeting> 

            </section>
        )

    }

}

export default Main;