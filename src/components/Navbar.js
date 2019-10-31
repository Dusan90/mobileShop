import React, { Component } from 'react'
import { IoIosBasket } from "react-icons/io";
import { FaHouzz } from "react-icons/fa";
import {Link} from 'react-router-dom'
import {Data} from './data'



export class Navbar extends Component {
    constructor(){
        super()
        this.state={
            reserved: false,
            firstname: '',
            lastname: '',
            email: '',
            phone: ''
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
    }

    getStyled=()=>{
        return{
            display: this.context.isClicked ? 'block' : 'none'
        }
    }

    handleClickic=()=>{
        if(this.context.stufInBasket.length){
            let mainSingUp = document.querySelector('.SingUpDiv')
            mainSingUp.style = 'display: block'
            window.scrollTo(0, 0);   
            this.context.handleClick()
        }
    }

    handleClickic2=()=>{
        let mainSingUp = document.querySelector('.SingUpDiv')
        let singUpInput = Array.from(document.querySelectorAll('.SUI'))
        mainSingUp.style = 'display: none'
        singUpInput.map(value =>{
         return value.value = ''
        })
    }

    Style=()=>{
        return{
            display: this.state.reserved ? 'block' : 'none'
        }
    }

    handleContinue=()=>{
        const {firstname, lastname, email, phone} = this.state;
        if(firstname === '' || lastname === '' || email === '' || phone === ''){
            this.setState({reserved: true})
            this.getNotified()
        } else{
            let mainSingUp = document.querySelector('.SingUpDiv')
            mainSingUp.style = 'display: none'
            document.querySelector('.SingUpDiv2').style = 'display: block'
            this.getNotified()
            this.context.emptyBasket()
        }
    }

    getNotified(){
        setTimeout(() =>{
            this.setState({reserved: false})
            document.querySelector('.SingUpDiv2').style = 'display: none'
        },4000)

    }

    static contextType = Data
    render() {  
        return (
            <>
            <nav className="navic">
                    <Link to='/'><FaHouzz className='house'/></Link>
                    <div className='mainBasket'>
                        <IoIosBasket className='basket' onClick={this.context.handleClick}/>
                        <p className='numItems'>{this.context.stufInBasket.length}</p>
                    </div>
            </nav>
            <div className="sideBasket" style={this.getStyled()}>
                <h2>Your Basket</h2>
                <p>There are {this.context.stufInBasket.length} item in your basket </p>
                <div className="stuf">
                    {this.context.stufInBasket.map((buy) =>{
                        const {name, mdl, slika, price, id} = buy
                        return <div className="stufDiv" key={id}>      
                                    <img src={slika} alt='slk' />
                                    <div className="infoStufDiv">
                                        <p>{name}{` `}{mdl}</p>
                                        <span className='priceTag'>{price}$<button type="submit" onClick={() => this.context.handleCancelClick({id, price})} >Cancel</button></span>
                                    </div>
                                </div>
                    })}
                </div>
                
                    <p>Total Price: {` `}{this.context.letsee}$</p>            
                    <button className='pr' onClick={this.handleClickic} type='submit'>Place Order!</button>
            </div>
                <div className="SingUpDiv" >
                    <p className="showAlert" style={this.Style()}>Empty Field</p>
                    <h1>Please fill in the fields.</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" className='SUI' name='firstname' placeholder='Firs Name...'onChange={this.handleChange}/>
                        <input type="text" className='SUI' name='lastname' placeholder='Last Name...'onChange={this.handleChange}/>
                        <input type="email" className='SUI' name='email' placeholder='Email...'onChange={this.handleChange}/>
                        <input type="text" className='SUI' name='phone' placeholder='Phone Number...'onChange={this.handleChange}/>
                    </form>
                    <button type='submit' onClick={this.handleContinue}>Continue</button><button type='submit' onClick={this.handleClickic2}>Cancel</button>
                </div>
                <div className="SingUpDiv2">
                    <h1>Your order has been placed successfully!</h1>
                </div>
        </>
        )        
    }
}

export default Navbar
