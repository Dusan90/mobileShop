import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Data} from '../components/data'



class Home extends Component {

    getStyle() {
        return{
            filter: this.context.isClicked ? 'blur(10px)' : 'blur(0)',
            transition: 'all 1s ease-in-out'
        }
            }
        static contextType = Data
        render(){                
    return (
        <div className='home' style={this.getStyle()}>
            <div className="naslov">
                <h1>Shop<strong>Mobile</strong></h1>
            </div>
            <div className="nav">
                <Link className='link' to='/shop'>
                <img src="https://www.smo-king.it/wp-content/uploads/2018/12/shop-online-sigarette-elettroniche-super-svapo.png" alt="shop"/>
                </Link>
                <Link className='link' to='/about'>
                <img src="https://pngimage.net/wp-content/uploads/2018/05/about-us-png-images-5.png" alt="about us"/>
                </Link>
                <Link className='link' to='/contact'>
                <img src="http://promienservices.com/wp-content/uploads/2017/01/Contact-Us-PNG.png" alt="contact"/>
                </Link>
            </div>
        </div>
    )
        }
}

export default Home
