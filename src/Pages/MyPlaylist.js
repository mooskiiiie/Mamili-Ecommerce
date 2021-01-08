import React, { useState } from 'react';
import '../Pages/MyPlaylist.css';
import SortIcon from '@material-ui/icons/Sort';
import AddIcon from '@material-ui/icons/Add';
import { Button, Modal } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';

function MyPlaylist() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Spring
        from={{ opacity: 0, marginTop: -100}}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 500, duration: 1000}}
    >
        { props => (
             <div style={props}> 
        <div className='myplaylist'>
            <div className='myplaylist__header'>
                <h2>PLAYLISTS</h2>
                <p>@NikkiCortez</p>
            </div>
            <div className='myplaylist__buttons'>
                <SortIcon className='sortt' />
                <div className='playlist__button' variant="primary" onClick={handleShow}>
                <AddIcon className='addd' />
                </div>
            </div>
            <div className='myplaylist__imagesOne'>
                <img src='/images/play1.png' alt='' /> 
                <img src='/images/play5.png' alt='' />
                <img src='/images/play3.png' alt='' />
                <img src='/images/play6.png' alt='' />
            </div>
            <div className='myplaylist__imagesTwo'>
                <img src='/images/play2.png' alt='' />
                <img src='/images/play6.png' alt='' />
                <img src='/images/play4.png' alt='' />
                <img src='/images/play8.png' alt='' />
            </div>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='boyy' >
                <Modal.Title className='modal__title' >CREATE A BOARD</Modal.Title>
                <p>@NikkiCortez</p>
                </Modal.Header>
                <div className='modal__input'>
                    <p>Name</p>
                    <input type='text'/>
                </div>
                <Modal.Footer>
                <div className='modal__footers'>
                <Button>Private</Button>
                <Button variant="secondary" onClick={handleClose}>
                    Public
                </Button>
                </div>
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

export default MyPlaylist
