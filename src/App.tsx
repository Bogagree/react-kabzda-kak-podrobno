import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import UncontrolledAccordion from "./Components/Accordion/UncontrolledAccordion";
import Accordion from "./Components/Accordion/Accordion";
import UncontrolledOnOff from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import OnOff_2 from "./Components/OnOff/OnOff_2";


const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)

    let [isOn, setIsOn] = useState<boolean>(true)

    let [collapsed, setCollapsed] = useState<boolean>(false)

    let [switchOn, SetSwitchOn] = useState(isOn)

    const switcher = () => {
        setIsOn(!isOn)
    }

    return (

        <div className="App">
            <h1>React Kabzda kak podrobno</h1>

            <h2>On Off #2</h2>
            <OnOff_2 isOn={isOn} callback={switcher} />

            <hr/>
            {/*<UncontrolledAccordion titleValue={"Menu (UncontrolledAccordion)"}/>*/}
            {/*<Accordion titleValue={"Menu (Accordion)"} collapsed={collapsed} onChange={setCollapsed}/>*/}

            <hr/>

            <UncontrolledOnOff onChange={SetSwitchOn}/> <span>{switchOn.toString()}</span>
            // неконтролируемые компоненты бесполезны, но если прокинуть в них callback, то через него можно вытащить данные,
            // чтобы их использовать, как например через функцию switchOn я вытащил данные о том включен или выключен переключатель

            <hr/>
            <Rating
                value={ratingValue}
                onClick={setRatingValue}/>

            {/*<hr/>*/}
            {/*<UncontrolledRating />*/}

            <hr/>
            {/*<UncontrolledRating_Dimych />*/}

        </div>
    );
}

export default App;
