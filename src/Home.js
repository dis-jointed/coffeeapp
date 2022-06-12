import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home_desc_content">
            <h2 className="home__desc">WE'D 🤍 TO MAKE <span>YOU COFFEE</span></h2>
            <p>What goes best with a cup of coffee? another cup.</p>
            <div className="home__button__group">
             <button>OUR SERVICES</button>
             <button>BOOK A FREE TRIAL</button>
            </div>
           
           
            <div className ="cofee__images">
            <img className="cup__one" src="./images/cup.png" />
            <img className="cup__two" src="./images/cup.png" />
            <img className="cup__three" src="./images/cup.png" />
            
            </div>

            </div>

            <div className="fresh__desc">
                <h5>ALWAYS FRESH,</h5>
                <h5>ALWAYS READY</h5>
            </div>
            
            <div className="home_footer">
                <div className="left__home__footer">
                    
                    <div className="product__text">
                    <a href="https://www.youtube.com/watch?v=zc_JaXSN9dc">
                      COFFEE
                    </a>
                    <div className="white__dot"/>
                    </div>
                    
                    <div className="product__text">
                    <a href="">
                      TEA 
                    </a>
                    <div className="white__dot"/>
                    </div>
                    
                    <div className="product__text">
                    <a href="">
                      WATER 
                    </a>
                    <div className="white__dot"/>
                    </div>
                   
                    <div className="product__text">
                    <a href="">
                      SNACKS 
                    </a>
                    <div className="white__dot"/>
                    </div>

                    <div className="product__text">
                    <a href="">
                      DELIVERED
                    </a>
                    </div>
                   
                </div>
                <div className="right__home__footer">
                <img src="./images/instagram.svg" />
                <img src="./images/facebook.svg" />
                <img src="./images/left-arrow.svg" />
                </div>
                
            </div>
    
        </div>
    )
}

export default Home
