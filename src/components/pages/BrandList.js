import React, { useState, useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';

const BrandList =(prop) => {

    const [digital, setDigital] = useState([]);
    const [print, setPrint] = useState([]);
    const [pack, setPack] = useState([]);
    const [apparel, setApparel] = useState([]);
    const name = prop.location.aboutProps.brand.path;

    useEffect(() => {
        setDigital(prop.location.aboutProps.brand.digital);
        setPrint(prop.location.aboutProps.brand.print);
        setPack(prop.location.aboutProps.brand.packaging);
        setApparel(prop.location.aboutProps.brand.apparel);
    })

    const helper = (arr, name, str) => {
        if(name !== 'BROOKLYN DIAMOND COFFEE'){
            name = name;
        }else{
            name = name;
            str = "CONCEPT";
        }

        if(arr.length >= 1){
            return(
                <div className="brand__container">
                <h2 className="brand__text">{str}</h2>
                <ol>
                    {arr.map((item, idx) => (
                        <img className="brand__img" src={item}/>
                    ))}
                </ol>
                </div>
            )
        }
    }

    return(
        <>
        <h1 className="brand__header">{name}</h1>
        {helper(digital, name, "DIGITAL")}
        {helper(print, name, "PRINT")}
        {helper(pack, name, "PACKAGING")}
        {helper(apparel, name, "APPAREL")}
        <Footer />
        </>
    )

}

export default BrandList;