import React, { Component } from 'react'
import {Data} from './data'

export class Companies extends Component {
    static contextType = Data
    render() {
        return (
            <div className="companie">
                <h1>Companies</h1>
                {this.context.companies.map(compani =>{
                 const {id, pic, name} = compani
                 return <img key={id} onClick={() => this.context.handleClicara({name})} src={pic} alt='model'/>
                })}
            </div>
        )
    }
}

export default Companies
