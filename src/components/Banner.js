import React from 'react';
import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'
import isHome from '../_services/getpage.service'

let banner = ''
let altTxt = ''
console.log(isHome())

if (isHome()) {
    banner = banner2
    altTxt = 'Mountains and trees landscape'
}
else {
    banner = banner1
    altTxt = 'Coast and trees landscape'
}

// window.location.reload() solution ?

const Banner = () => {
    return (
        <div>
            <img src={banner} alt={altTxt} />
        </div>
    );
};

export default Banner;