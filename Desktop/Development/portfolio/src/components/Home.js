import React from 'react'
import Button from './Button';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                </div>
                <div>Andre Stovall, Software Engineer</div>
                <div>Software Engineer and Designer in San Francisco, CA</div>
                <div>
                    <Button url="https://github.com/prezzypistachio" name="Github" />
                    <Button url="https://github.com/prezzypistachio" name="Projects" />   
                </div>
            </div>
        )
    }
}

export default Home;