import React, { useEffect } from 'react';
import './Brands.css';
import BrandItem from './BrandItem';

function Brands() {
    const data = require('./sample.json');
    const rows = [...Array(Math.ceil(data.length / 5))]
    // group brands into rows of 5 elements [1,2,3,4,5,6,7,8,9,10] => [ [1, 2, 3, 4, 5], [6, 7, 8 ,9, 10] ]
    const brandRows = rows.map((row, idx) => data.slice(idx * 5, idx * 5 + 5))

  return (
    <>
    <h1 className='header'>Freelance Creative / Professional Graphics Designer</h1>
    <h1 className='title'>BRANDS</h1>
    <div className='brand'>
      <div className='brand__container'>
        {brandRows.map((row, idx) => (
        <div className='brand__wrapper'>
          <ul className='brand__items'>
          {row.map((brand, i) => (
            <BrandItem
              key={i}
              src={`/images/logos/${brand.logo}`}
              text='----------------------------'
              path={brand.name}
              digital={brand.digital}
              print={brand.print}
              packaging={brand.packaging}
              apparel={brand.apparel}
            />
          ))}
          </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Brands;