import styled from "styled-components";

import React from 'react'
import { auth, provider } from "../Firebase";

const Header = () => {
  
  const handleAuth = ()=>{
    auth.signInWithPopup(provider).then((result)=>{
      console.log(result);
    }).catch((err)=>{
      alert(err.message)
    })

  }
  return (
    <Nav>
    <Logo>
        <img src='image/logo.svg' alt="Disney+" />
    </Logo>
    <Navmenu>
        <a href="/home">
        <img src="/image/home-icon.svg" alt="home"/>
        <span>HOME</span>

        </a>
        <a href="/home">
        <img src="/image/search-icon.svg" alt="search"/>
        <span>SEARCH</span>

        </a>
        <a href="/home">
        <img src="/image/watchlist-icon.svg" alt="watchlist"/>
        <span>WATCH LIST</span>

        </a>
        <a href="/home">
        <img src="/image/original-icon.svg" alt="originals"/>
        <span>ORIGINALS</span>

        </a>
        
        <a href="/home">
        <img src="/image/movie-icon.svg" alt="movies"/>
        <span>MOVIES</span>

        </a>
        
        <a href="/home">
        <img src="/image/series-icon.svg" alt="movies"/>
        <span>SERIES</span>

        </a>
        
    </Navmenu>
    <Login onClick={handleAuth}>
        Login
    </Login>

    </Nav>
  )
}
 
const Nav =styled.nav`
position: fixed;
top:0;
left:0;
right: 0;
height: 70px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
/* letter-spacing: 16px; */
z-index: 3;
`

 const Logo =styled.a`
 padding:0;
 width: 80px;
 margin-top: 4px;
 max-height:70px;
 font-size: 0;
 display: inline-block;
 img{
    display: block;
    width: 100%;

 }
 
 `

 const Navmenu =styled.div`
   align-items: center;
   display: flex;
   flex-flow: row nowrap;
   height: 100%;
   justify-content: flex-end;
   margin: 0px;
   padding: 0px;
   position:relative;
   margin-right:auto;
   margin-left:25px;
   a{
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
        height:20px;
        min-width: 20px;
        width:20px;
        z-index: auto;
    }
        span{
            color:rgb(249,249,249);
            font-size:13px;
            /* letter-spacing: 1.42px; */
            line-height: 1.08;
            padding:2px 0px;
            white-space: nowrap;
            position: relative;
       
        &:before{
            background-color: rgb(249,249,249);
            border-radius: 0 0 4px 4px;
            bottom: -6px;
            content:'';
            height: 2px;
            left:0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin:left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
            visibility: hidden;
            width: auto;

        } }
 
    &:hover{
         span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
         }
    }
   }
   /* @media (max-width:768px){
     display: none;
   } */
 `

   const Login =styled.a`
   background-color: rgba(0,0,0,0.6);
   padding: 8px 16px;
   text-transform: uppercase;
   letter-spacing: 1.5px;
   border: 1px solid white;
   border-radius: 4px;
   transition: all .2s ease 0s;


   &:hover{
    background-color: white;
    color: black;
    border-color: transparent;
   }
   `

export default Header