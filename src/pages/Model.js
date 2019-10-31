import React, { Component } from 'react'
import {Data} from '../components/data'

export class Model extends Component {
    constructor(props){
        super(props)
           this.state={
                model: this.props.match.params.model
            }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    getStyle() {
        return{
            filter: this.context.isClicked ? 'blur(10px)' : 'blur(0)',
            transition: 'all 1s ease-in-out'
        }
            }

    static contextType = Data
    render() {   
        const {getModel} = this.context
        const model = getModel(this.state.model)
        const {info, mdl, name, slika2, price, video} = model
        if(!model){
            return <>
            <div className="error">
                <h2>CAN'T FIND THAT PHONE</h2>
            </div>
                </>
            
        }
        return(
            <div className="mainDivModel" style={this.getStyle()}>
                    <h1>{name}{` `}{mdl}</h1>
                <div className="mainInfoModel">
                <div className="mainImgModel">
                    <img src={slika2} alt="slikica"/>
                </div>
                <div className="info">
                    <p>{info}</p>
                    <p className='p2'>{info}</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, nostrum.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, nostrum.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, nostrum.</li>
                    </ul>
                    <p className='price'>Price: <strong>{price}$</strong> <button onClick={() => this.context.handleDuca({model})} type="submit">ADD TO BASKET</button></p>
                    
                </div>
                </div>
                <div className='yt'>
                    <iframe width="80%" title='Deborah' height="300" src={video} allow='autoplay'>
                    </iframe>
                </div>
            </div>
        )
    }
}

export default Model

