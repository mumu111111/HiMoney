import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
// line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
> ul {
    // line-height: 24px; ?? 
  display: flex;
  > li {
    width: 33.3333%;
    text-align: center;
    > a {
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
}
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">
                        <Icon name="tag" />
                        标签
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <Icon name="money" />
                        记账
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <Icon name="chart" />
                        统计
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;