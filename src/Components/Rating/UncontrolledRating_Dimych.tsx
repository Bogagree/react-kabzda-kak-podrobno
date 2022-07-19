import React, {useState} from 'react';
import Star_Dimych from "./Star_Dimych";

const UncontrolledRatingDimych = () => {

    let [value, setValue] = useState(0 )

    return (
        <div>
            <h3>Dimych Uncontrolled rating</h3>
            <Star_Dimych selected={value > 0} setValue={setValue} value={1}/>
            <Star_Dimych selected={value > 1} setValue={setValue} value={2}/>
            <Star_Dimych selected={value > 2} setValue={setValue} value={3}/>
            <Star_Dimych selected={value > 3} setValue={setValue} value={4}/>
            <Star_Dimych selected={value > 4} setValue={setValue} value={5}/>
        </div>
    );
};

export default UncontrolledRatingDimych;