import React from 'react';
import PersonName from '../PersonName/PersonName';
import './PersonCart.css'
const PersonCart = (props) => {
    console.log(props);
    const { personCart } = props;
    const total = personCart.reduce((a, b) => a + b.earning, 0);

    return (
        <div className="personCart">
            <h2 style={{ color: 'orangered', textAlign: 'center' }}>Cart</h2>
            <h2 ><i style={{ color: 'aquamarine' }}>Persons Added: <span style={{ color: 'white' }}> {personCart.length}</span></i></h2>
            <hr />
            <h3 style={{ color: 'aquamarine' }}>Total Payable: <span style={{ color: 'goldenrod' }}>${total}</span></h3>
            <h3 style={{ color: 'aquamarine' }}><u>NameList and Images: </u></h3>
            {personCart.map(personinfo => <PersonName
                key={personinfo.name}
                personinfo={personinfo}></PersonName>)}
        </div>
    );
};

export default PersonCart;