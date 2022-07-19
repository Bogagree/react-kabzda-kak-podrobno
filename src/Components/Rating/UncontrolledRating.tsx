import React, {useState} from 'react';


const UncontrolledRating = () => {

    return (
        <div>
            <h3>Uncontrolled rating with style object</h3>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
};


function Star() {

    let [clicked, setClicked] = useState(false)

    const starStyle = {
        marginLeft: "5px",
        fontWeight: clicked ? "bold" : "normal"
    }

    return (
        <>
        <span style={starStyle}>Star</span><button onClick={() => {setClicked(!clicked)}}>!</button>
        </>
    )
}

export default UncontrolledRating;