import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import menuItemsData from '../helpers/menuItemsData';

export default function Dropdown() {

    const [click, setClick] = useState(false);

    function handleClick() {
        setClick(!click);
    }

    return (
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {menuItemsData.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)} >
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
