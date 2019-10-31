import React, { Component } from 'react'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {Data} from '../components/data'

export class Contact extends Component {

   getStyle() {
        return{
            filter: this.context.isClicked ? 'blur(10px)' : 'blur(0)',
            transition: 'all 1s ease-in-out'
        }
            }

    static contextType = Data
    render() {
        const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181140.1199788969!2d20.282513414404647!3d44.815159728413235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2z0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1570206432464!5m2!1ssr!2srs" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
        function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
          }
        return (
            <div className='mainContactDiv' style={this.getStyle()}>
                <div className="testDiv">
                <div className="social">
                    <h1>Contact</h1>
                    <p>032/034-9393</p>
                    <a href = "mailto: abc@example.com">abv@example.com</a>
                    <div className="icons">
                    <FaFacebook className='icnf'/>
                    <FaInstagram className='icni'/>
                    <FaTwitter className='icnt'/>
                    </div>
                </div>
                <div className="map">
                    <p>22244 Bulevar Oslobodjenja</p>
                    <p>Beograd 11000</p>
                    <Iframe iframe={iframe} /> 
                </div>
                </div>
            </div>
        )
    }
}

export default Contact

