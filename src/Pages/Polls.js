import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Polls.css';
import Poll from '../Components/Poll';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Spring } from 'react-spring/renderprops';

function Polls() {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        


    return (
        <Spring
        from={{ opacity: 0}}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 1000}}
    >
        { props => (
             <div style={props}> 
        <div className='polls'>
            <div className='polls__header'>
                <div className='polls__headerLeft'>
                    <h2>POLLS</h2>
                    <span>Filter:</span>
                    <select className='dropdown'>
                    <option value="clothing">CLOTHING</option>
                    <option value="houseware">HOUSEWARE</option>
                    <option value="handicrafts">HANDICRAFTS</option>
                    <option value="food">FOOD</option>
                    <option value="stationery">STATIONERY</option>
                    </select>
                </div>
                <div className='polls__headerRight'>
                    <SearchIcon className='polls__search' />
                    <AddCircleIcon className='polls__add' />
                </div>
            </div>

            




             <div className='polls__main' variant="primary" onClick={handleShow}>
                <Poll name='@NikkiCortez' title='Dress' image='/images/dress.png' option1='Yes' option2='No' percent1='27%' percent2='33%' />
                <Poll name='@Sebyy' title='Red Hooded Top' image='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F50%2F10%2F50105a89df21084b698d314f06f20e7298d59db0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Chmver%5B2%5D&call=url[file:/product/main]' option1='Choice 1' option2='Choice 2' percent1='33%' percent2='63%'  />
                <Poll name='@mooskiiiie' title='Mongler Polo' image='/images/polo.png' option1='Yes' option2='No' percent1='98%' percent2='2%'  />
                <Poll name='@Cedric_09' title='Caramelized Onion Burger' image='/images/image1.jpg' option1='Yes' option2='No' percent1='64%' percent2='36%'  />
                <Poll name='@Gabbiee' title='Bacon Cheese Burger' image='https://justcook.butcherbox.com/wp-content/uploads/2019/12/fidel-fernando-xrdbUgwGWfo-unsplash-800x450.jpg' option1='Option A' option2='Option B' percent1='27%' percent2='33%'  />
                <Poll name='@Roni' title='Button Down Polo' image='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566927496-button-down-4-1566927485.jpg?crop=1xw:1xh;center,top&resize=480:*' option1='Choice 1' option2='Choice 2' percent1='33%' percent2='63%'  />
                <Poll name='@po_po' title='Long Sleeve Pintuck Poplin' image='https://assets.theplace.com/image/upload/t_plp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/2044158/2044158_10.jpg' option1='Yes' option2='No' percent1='100%' percent2='0%'  />
                <Poll name='@under' title='Baked Bacon Macaroni' image='https://thumbs-prod.si-cdn.com/cAU0hdDob45w_75sItCT68WXbZQ=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/c5/d1/c5d13e71-f316-4b68-ac23-99b6384f4792/istock-602301816.jpg' option1='Yes' option2='No' percent1='50%' percent2='50%'  />
                <Poll name='@newbie' title='Tomato Pie' image='https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg' option1='Option A' option2='Option B' percent1='33%' percent2='63%'  />
                <Poll name='@yoL0' title='Sabrina Nap Dress' image='https://cdn.shopify.com/s/files/1/0932/1794/products/HHH014_SabrinaNapDress_DianaCheck_A_grande.jpg?v=1603820918' option1='Option A' option2='Option B' percent1='33%' percent2='63%'  />
                <Poll name='@euler' title='Korean White Dress' image='https://dynamic.zacdn.com/x7t7ajI9_1Z6yM1TW8syIRz-bvo=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/crystal-korea-fashion-6265-6123221-1.jpg' option1='Yes' option2='No' percent1='98%' percent2='2%'  />
                <Poll name='@ranker' title='Mamis Menudo' image='https://www.expatica.com/app/uploads/sites/5/2020/03/Boeuf-bourguignon.jpg' option1='Yes' option2='No' percent1='27%' percent2='33%'  />
                <Poll name='@Mong' title='Pink Crop Top' image='https://so-sew-easy.com/wp-content/uploads/2019/10/shutterstock_597249695-500x334.jpg' option1='Choice A' option2='Choice B' percent1='51%' percent2='49%'  />
                <Poll name='@yo__19' title='Cropped Spaghetti Strap' image='https://i.pinimg.com/originals/43/df/5a/43df5af2f50b0af6d51efc2c2fef7edf.png' option1='Option A' option2='Option B' percent1='27%' percent2='33%'  />
                <Poll name='@basee' title='Cheesy Baked Bangus' image='https://i1.wp.com/www.mamasguiderecipes.com/wp-content/uploads/2018/03/FB_IMG_1519894849114.jpg' option1='Yes' option2='No' percent1='27%' percent2='33%'  />
                <Poll name='@pog' title='Momos Pasta' image='https://images.squarespace-cdn.com/content/v1/53ffb08fe4b0a9868676061c/1409273158702-DY04LWMRCGET2GE7QOMO/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/pasta.jpg' option1='Yes' option2='No' percent1='33%' percent2='63%'  />
            </div>
                
                
      

            <Modal className='orig' show={show} onHide={handleClose}>
                <Modal.Header className='boy' >
                <Modal.Title>Mongler Polo</Modal.Title>
                <p>MONGLER | Polo Shirt</p>
                </Modal.Header>
                <Modal.Dialog><img className='popup__image' src='/images/polo.png'/> </Modal.Dialog>
                <p className='eh'>@NikkiCortez</p>
                <div className='modal__options'>
                    <ul>
                        <li>Yes</li>
                        <li>No</li>
                    </ul>
                    <div className='modal__percent'>
                        <span>27%</span>
                        <span>33%</span>
                    </div>
                </div>
                <div className='modal__comments'>
                    <p>@Cedric_09: I think you should go with this! The brand is credible, plus the quality is great!</p>
                    <p>@Roni: I agree with @Cedric_09!</p>
                    <label>@mooskiiiie:</label><input className='modal__input' type='text' placeholder='Write a Comment...'></input>
                </div>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Submit
                </Button>
                </Modal.Footer>
            </Modal> 
      </div>
      </div>
            )}
        </Spring>
    )
}

export default Polls
