import React from 'react'
import styled from 'styled-components';
import {random} from '../randomColGen/RandomColor';
import {Link} from 'react-router-dom'


const Nav= styled.nav`
    display:flex;
    background:${random()};
    color:white;
    justify-content: space-evenly;
    & h1{
        text-decoration: none;
        flex:0.5;
    };
    
`

const Ul=styled.ul`
    display:flex;
    & li{
       padding: 10px;
       text-decoration: none;
       list-style-type: none;
    }
    & button{
        margin-top: -50px;
    }
`

const Button = styled.button`
    background-color:${random()};
    color:white;
    padding:10%;
    margin:auto;
    width:100px;
    height:auto;
    border-radius: 20px;
`
export default function NavBar() {
    return (
        <header>

        <Nav>
            <h1>
            <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
                The  MarkDown Blog
            </Link>
            </h1>
            <Ul>
                <li>
                    Home
                </li>
                <li className="button">
                    <Link to="/add-blog">
                    
                    <Button>
                    Add Blog
                    </Button>
                    </Link>
                </li>
                
            </Ul>
        </Nav>
        </header>
    )
}
