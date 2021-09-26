import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './MotivatedPerson.css';
const MotivatedPerson = (props) => {
    // console.log(props);

    //destructring person
    const { img, name, gender, earning, followers, age } = props.person;
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div className='person'>
            <img className='circular-img' src={img} alt="" />
            <p >Name: <strong style={{ color: 'aquamarine' }}>{name}</strong></p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Earning: <strong style={{ color: 'goldenrod' }}>${earning}</strong></p>
            <p>Followers: {followers}</p>
            <button onClick={() => props.addToCartHandle(props.person)}
                className='btn-regular'>{cartIcon} Add to Cart</button>

        </div>
    );
};

export default MotivatedPerson;