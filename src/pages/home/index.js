import React, { useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import Nightlife from "../../components/nightlife";

const HomePage = () => {

    const [activeScreen, setActiveScreen] = useState("Delivery");

    return (
        <div>
            <Header />
            <TabOptions activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
            {/* Different Screens based on the option selected in tabOptions */}

            {getScreen(activeScreen)}

            <Footer />
        </div>
    );
}

const getScreen = (screen) => {
    switch (screen) {
        case 'Delivery': return (<Delivery />);
        case 'Dining Out': return (<DiningOut />);
        case 'Nightlife': return (<Nightlife />);
        default: return (<Delivery />);
    }
}

export default HomePage;