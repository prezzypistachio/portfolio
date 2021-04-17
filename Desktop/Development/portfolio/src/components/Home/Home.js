import React from 'react'
import Button from '../Button/Button';
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="container-left">
                        <svg>
                            <circle cx="50" cy="50" r="40" stroke="none" fill="#FFE8D6" />
                        </svg> 
                    </div>
                    <div className="container-right">
                        <div className="main">Andre Stovall, Software Engineer</div>
                        <div className="secondary">Software Engineer and Designer in San Francisco, CA</div>
                        <div className="button-container">
                            <Button url="https://github.com/prezzypistachio" name="Github" />
                            <Button url="https://github.com/prezzypistachio" name="Projects" />   
                        </div>  
                    </div>
                </div>    
            </div>
        )
    }
}

export default Home;