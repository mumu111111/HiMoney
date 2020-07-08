import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import x from 'icons/chart.svg';
import y from 'icons/money.svg';
import z from 'icons/tag.svg';
console.log(x)
console.log(y)

console.log(z)

const NavWrapper = styled.nav`
// line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
> ul {
    // line-height: 24px; ?? 
  display: flex;
  > li {
    width: 33.3333%;
    text-align: center;
    padding: 6px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
        width: 24px;
        height: 24px;
    }
  }
}
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <svg className="icon" fill="red">
                        <use xlinkHref="#tag" />
                    </svg>
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#money" />
                    </svg>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#chart" />
                    </svg>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;