import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Data} from '../components/data'
import Companies from '../components/Companies'

export class Shop extends Component {
    
    getStyle= ()=>{
    return{
        filter: this.context.isClicked ? 'blur(10px)' : 'blur(0)',
        transition: 'all 1s ease-in-out'
    }
        }
        static contextType = Data
    render() {
        const value = this.context

        return (
            <>
            <div className='mainShopDiv' style={this.getStyle()}>
                <div className="head">
                    <h1>Choose your phone!</h1>
                </div>
                <h1 className='Review'>Phone Review</h1>
                <div className="mainReview">
                    <div className="companies">
                        <Companies/>
                    </div>
                    <div className="phones">
                    {(value.fons1.length ? value.fons1 : value.fons).map(fon =>{
                        const {id, mdl, name, slika1, model} = fon
                    return <div key={id} className="phone" style={{                        backgroundImage: `url(${slika1})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'}}>
                                <div className="phoneName" >
                                    <h3>{name}{` `}{mdl}</h3>
                                </div>
                                <div >
                                    <Link  to={`/shop/${model}`} className="btnInfo"><button type="submit">More Info</button></Link>
                                </div>
                            </div>
                    })}

                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Shop
