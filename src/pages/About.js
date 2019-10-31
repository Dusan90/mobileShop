import React, {Component} from 'react'
import {Data} from '../components/data'
 
class About extends Component {

    getStyle() {
        return{
            filter: this.context.isClicked ? 'blur(10px)' : 'blur(0)',
            transition: 'all 1s ease-in-out'
        }
            }

    static contextType = Data
    render(){
    return (
        <div className='mainAboutDiv' style={this.getStyle()}>
            <h1>It's not our work life, it's our life's work!</h1>
            <div className='in'>
            <span>OUR WORK</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eligendi vitae veniam eius quasi, odio ullam culpa et vero cum deleniti perspiciatis magnam delectus illo officia maxime accusantium libero enim error dignissimos rerum corporis omnis? Aliquam, obcaecati aliquid. Officia, ut.</p>
            </div>
            <div className="offer">
                <div className='in'>
                <span>OUR VALUES</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto amet nesciunt rerum iste, voluptas molestiae soluta quaerat debitis nemo aspernatur?</p>
                </div>
            <div className="sexyLine"></div>
            <h2>Authenticaty.</h2>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <div className="sexyLine"></div>
            <h2>Simplicity.</h2>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <div className="sexyLine"></div>
            <h2>Adventure.</h2>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <div className="sexyLine"></div>
            <h2>Drive.</h2>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <div className="sexyLine"></div>
            <h2>Mindfulness.</h2>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <div className="sexyLine"></div>
            <h2>Appreciation.</h2>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <div className="sexyLine"></div>
            </div>
            <img src="https://safesound.org/wp-content/uploads/2019/05/ANTU-web-graphic.jpg" alt="pic"/>
        </div>
    )
    }
}

export default About
