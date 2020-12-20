import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.js.js'

const Header = () => {
    return (
<div>
<ul>
    <li>
    <Link to="/" />
    </li>
    <li>
    <Link to="/profile"/>
    </li>
    <li>
    <Link to="news"/>
    </li>
</ul>
</div>
    )
}

export default Header