import React from 'react';
import '../Components/Carousel.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SearchIcon from '@material-ui/icons/Search';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';


function Carousel() {
    return (
        <div className='carousel'>
            <div className='carousel__header'>
                <h3>PRODUCT LIST</h3>
                <div className='carousel__icons'>
                    <AddCircleIcon className='add' />
                    <BookmarkIcon className='book' />
                    <SearchIcon className='search' />
                </div>
            </div>
            <div className='carousel__images'>
                <div className='lists'>
                    <img src='/images/salmon.jpg'/>
                    <img src='/images/spag.jpg'/>
                    <img src='/images/men.webp'/>
                    <img src='/images/ye.jpg'/>
                </div>
                <div className='arrows'>
                    <ArrowLeftIcon />
                    <ArrowRightIcon />
                </div>
            </div>
            
        </div>
    )
}

export default Carousel
