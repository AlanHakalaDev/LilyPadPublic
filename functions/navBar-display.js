import React, { useState } from 'react';

const NavBar = () => {

        const [isVisible, setIsVisible] = useState(false);

        function toggleVisibility() {
            setIsVisible(!isVisible);
        }

        return (
            
            <div className="tab-container">
                    <button className="toggle-button" onClick={toggleVisibility}>
                        {isVisible ? '| | |' : '| | |'}
                    </button>
                    <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
                        <ul className="list">
                            <li><a href="../">Home</a></li>
                            <li><a href="playlists">Playlists</a></li>
                            <li><a href="account-creation">Create an Account</a></li>
                            <li><a href="profile">Profile</a></li>
                            <li><a href="login">Login</a></li>
                            <li><a href="search">Search</a></li>
                            <img className='icon' src="/icon.png" alt='icon' />
                        </ul>
                    </nav>
                    


            <style jsx>{`
                    .tab-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 50px;
                    }
            
                    .toggle-button {
                    position: fixed;
                    top: 10px;
                    left: 0;
                    margin: 10px;
                    cursor: pointer;
                    z-index: 1;
                                
                    }
            
                    .toggle-button:hover {
                    background-color: #3e8e41;
                    }
            
            
            
                    button {
                    background-color: #4CAF50;
                    color: #fff;
                    padding: 10px 10px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 15px;
                    margin-top: 20px;
                    
                    }
            
                    .navbar{
                    top: -100px;
                    left: 0;
                    width: 100%;
                    color: white;
                    background-color: black;
                    position: fixed;
                    padding: 10px;
                    transition: top .5s ease-in-out;
                    
                    }
            
                    .navbar.visible{
                    top: 0;
                    }
            
                    li{
                    float: left;
                    padding-right: 50px;
                    }
                    
                    li a:hover{
                    color: #4CAF50;
                    text-decoration: underline;
                    }
            
                    li a {
                    
                    width: 100%;
                    display: block;
                    text-decoration: none;
                    color: #fff;
                    text-transform: uppercase;
                    font-weight: bold;
                    
                    }
            
                    .list {
                    color: black;
                    padding-bottom: 20px;
                    padding-left: 90px;
            
                    }
            
                    .list li:hover {
                    animation: anim2 1s cubic-bezier(0.175, 0.885, 0.32, 0.275) 1;
                    list-style: none;  
                    
                    }
                    
                    @keyframes anim2 {
                    0% {
                        opacity: 1;
                        transform: translateY(0px);
                        
                    }
                    25% {
                        opacity: 0.1;
                        transform: translateY(-2px);
                    }
                    50% {
                        opacity: 1;
                        transform: translateY(0px);
                    }
                    75% {
                        opacity: 0.1;
                        transform: translateY(2px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0px);
                    }
                    }
            
                    .icon{
                    width: 30px;
                    height: 30px;
                    float: right;
            
                    }
            
                    p{
                    
                    width: 80%;
                    margin: 30px auto;
            
                    }
            
                    .seperator{
                    background-image: url('/icon.png');
                    background-repeat: repeat-x;
                    background-position: right top;
                    background-size: 30px 30px;
                    height: 50px;
                    }
            
                    
                    
                    .section {
                    margin: 50px auto;
                    width: 80%;
                    }
                `}</style>
                </div>

        );

    };

    export default NavBar;