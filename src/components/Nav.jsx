import React from 'react'
import {NavLink} from 'react-router-dom'

export default function () {
    return <ul>
        <li><NavLink to="/table1" activeClassName="active">Table1</NavLink></li>
        <li><NavLink to="/table2" activeClassName="active">Table2</NavLink></li>
    </ul>
}
