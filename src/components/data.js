import React, { Component, createContext } from 'react'
import s10 from '../Slike/Modeli/s10-1.webp'
import fold from '../Slike/Modeli/fold-1.png'
import honor from '../Slike/Modeli/honor20-1.png'
import huaweip30 from '../Slike/Modeli/huaweip30-1.png'
import iphone11 from '../Slike/Modeli/iphone11-1.png'
import iphoneX from '../Slike/Modeli/iphonex-1.png'
import lgg7 from '../Slike/Modeli/lgg7-1.png'
import matex from '../Slike/Modeli/matex-1.png'
import note10 from '../Slike/Modeli/note10-1.png'
import pixel from '../Slike/Modeli/pixel-1.png'
import uuid from 'uuid'


export const Data = createContext()

export class DataProvider extends Component {
    state={
        isClicked: false,
        stufInBasket: [],
        TotalPrice: [],
        stuf: 0,
        letsee: 0,
        companies: [
            {
                id: uuid.v4(),
                name: 'Samsung',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOq3RZeP7y0Xd9nvDG1v_2wZuwbugUKwvxK6B8nRAz9kH9usd8'
            },
            {
                id: uuid.v4(),
                name: 'Iphone',
                pic: 'https://cdn.mos.cms.futurecdn.net/MFHVMYQCeJHMGop4u8VkzJ.jpg'
            },
            {
                id: uuid.v4(),
                name: 'Google',
                pic: 'https://voluntarysupport.org.uk/wp-content/uploads/2018/07/Google_logo.jpg'
            },
            {
                id: uuid.v4(),
                name: 'LG',
                pic: 'https://www.sazeafzar.com/UserImages/7e3b233d-59c7-4d3c-97e9-0b551937c1b3/Products/42/1-636589763479142913.jpg'
            },
            {
                id: uuid.v4(),
                name: 'Huawei',
                pic: 'https://www.broadcastingcable.com/.image/t_share/MTYyMTM4MjE0MzY5MzM5MDA1/huawei-logo.jpg'
            }
        ],
        fons1:[],
        
        fons: [
            {
                id: 1,
                model: 'Samsung-Galaxy-s10',
                name: 'Samsung',
                mdl: 'Galaxy S10',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium?',
                slika1: 'https://image-us.samsung.com/SamsungUS/mobile/phones/06102019-new/NEW_Regular_S10_Lockup1_Blue_gallery.jpg?$product-details-jpg$',
                price: 300,
                video: 'https://www.youtube.com/embed/ZCfgkIyD9g0',
                slika2: s10
            },
            {
                id: 2,
                model: 'Huawei-Honor-20',
                name: 'Huawei',
                mdl: 'Honor 20',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium?',
                slika1: 'https://images-na.ssl-images-amazon.com/images/I/41IukdoIulL._SX425_.jpg',
                price: 400,
                video: 'https://www.youtube.com/embed/-nxtged3Es4',
                slika2: honor
            },
            {
                id: 3,
                model: 'Huawei-p30-pro',
                name: 'Huawei',
                mdl: 'P30 Pro',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium?',
                slika1: 'https://zdnet1.cbsistatic.com/hub/i/r/2019/04/26/525e7f41-6905-4d4b-a763-f97c6a038386/thumbnail/770x578/35b638578352c2b2f0ed9863722ac02c/huawei-p30-pro-header.jpg',
                price: 500,
                video: 'https://www.youtube.com/embed/9sUVeC9q3ak',
                slika2: huaweip30
            },
            {
                id: 4,
                model: 'Iphone-11',
                name: 'Iphone',
                mdl: '11',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium?',
                slika1: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188',
                price: 450,
                video: 'https://www.youtube.com/embed/cVEemOmHw9Y',
                slika2: iphone11
            },
            {
                id: 5,
                model: 'Iphone-X',
                name: 'Iphone',
                mdl: 'X',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium?',
                slika1: 'https://images-na.ssl-images-amazon.com/images/I/51XDRzsKL9L._SY550_.jpg',
                price: 470,
                video: 'https://www.youtube.com/embed/0S6pHex-KCo',
                slika2: iphoneX
            },
            {
                id: 6,
                model: 'LG-G7',
                name: 'LG',
                mdl: 'G7',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium?',
                slika1: 'https://i.gadgets360cdn.com/products/large/1525271113_635_lg_g7_thinq.jpg',
                price: 540,
                video: 'https://www.youtube.com/embed/ybG8iWK4e2I',
                slika2: lgg7
            },
            {
                id: 7,
                model: 'Huawei-Mate-X',
                name: 'Huawei',
                mdl: 'Mate X',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium?',
                slika1: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/mate-x/img/kv-img/Huawei-Mate-X17.jpg',
                price: 420,
                video: 'https://www.youtube.com/embed/xIvYeqNDqqw',
                slika2: matex
            },
            {
                id: 8,
                model: 'Samsung-Galaxy-Note-10',
                name: 'Samsung',
                mdl: 'Galaxy Note 10',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium?',
                slika1: 'https://www.univerzalno.com/wp-content/uploads/2019/09/61LGgNjwg1L._SL1500_.jpg',
                price: 450,
                video: 'https://www.youtube.com/embed/uRzEhLm3-hc',
                slika2: note10
            },
            {
                id: 9,
                model: 'Google-Pixel',
                name: 'Google',
                mdl: 'Pixel',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium?',
                slika1: 'https://static.bhphoto.com/images/images2500x2500/1557315329_1475547.jpg',
                price: 460,
                video: 'https://www.youtube.com/embed/y7guS3MPKg0',
                slika2: pixel
            },
            {
                id: 10,
                model: 'Samsung-Galaxy-Fold',
                name: 'Samsung',
                mdl: 'Galaxy Fold',
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea dicta sapiente eaque consequatur pariatur delectus sit doloribus consectetur et inventore porro quibusdam suscipit rerum, deleniti odio assumenda nam accusantium?',
                slika1: 'https://i.gadgets360cdn.com/products/large/1550693074_635_samsung_galaxy_fold_samsung.jpg',
                price: 620,
                video: 'https://www.youtube.com/embed/E9ydQoi2VbA',
                slika2: fold
            }
        ],

    }
    
    handleDuca = (model) =>{
        let du = {
            id: uuid.v4(),
            name: model.model.name,
            mdl: model.model.mdl,
            price: model.model.price,
            slika: model.model.slika1
        }
        this.state.stufInBasket.push(du)
        let sum = 0
        for(let i = 0; i < this.state.stufInBasket.length; i++){
            sum += this.state.stufInBasket[i].price
        }
        this.setState({letsee: sum})
        this.setState({stuf: this.state.stuf +1})
        }
    
        handleCancelClick = (id) =>{
    this.setState({stufInBasket: [...this.state.stufInBasket.filter(stufic=>{ return stufic.id !== id.id}
        )]}
        )
    this.setState({letsee: this.state.letsee - id.price})
    }
    
    handleClick = () =>{
        this.setState({isClicked: !this.state.isClicked})
    }

    handleClicara = (name) =>{
        this.setState({fons1: [...this.state.fons.filter(specmodel =>{
            return specmodel.name === name.name
        })]},
        
        )
    }

    emptyBasket=()=>{
        this.setState({stufInBasket: []})
        this.setState({letsee: 0})
        this.setState({isClicked: false})
        
    }


    getModel=(model) =>{
        let tempModel = [...this.state.fons];
        const fon = tempModel.find((phonemodel) => phonemodel.model === model);
        return fon
    }
        
    render() {
        return (
            <Data.Provider value={{...this.state, getModel: this.getModel, handleDuca: this.handleDuca, handleClicara: this.handleClicara, handleCancelClick: this.handleCancelClick, emptyBasket: this.emptyBasket, handleClick: this.handleClick}}>{this.props.children}</Data.Provider>
        )
    }
}


export const DataConsumer = Data.Consumer

