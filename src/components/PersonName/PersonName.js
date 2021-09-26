import React from 'react';
import './PersonName.css'
const PersonName = (props) => {
    console.log(props);
    //destructruing person info
    const { img, name } = props.personinfo;
    return (
        <div style={{ display: 'flex', marginTop: '10px', color: 'black' }}>
            <h3> {name}</h3>
            <img style={{ width: '180px', borderRadius: '75%' }} src={img} alt="" />
        </div>
    );
};

export default PersonName;