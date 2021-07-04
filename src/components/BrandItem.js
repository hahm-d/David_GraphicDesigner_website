import React from 'react';
import { Link } from 'react-router-dom';

function BrandItem(props) {
    return (
      <>
        <li className='brand__item'>
          <Link className='brand__item__link' to={{pathname: '/brand', aboutProps: { brand: props}}}>
              <img
                className='brand__item__img'
                alt='missing'
                src={props.src}
              />
            <div className='brand__item__info'>
              <h5 className='brand__item__text'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }
  
  export default BrandItem;