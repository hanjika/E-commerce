import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type }) => {
    if (type === 'opening-loader') {
        return (
            <section className='opening-loader'>
                <ReactLoading type='spinningBubbles' color='#000000' height={'10%'} width={'10%'} />   
            </section>
          );
    } else {
        return (
            <section className='loader-container'>
                <ReactLoading type='spinningBubbles' color='#000000' height={'10%'} width={'10%'} />   
            </section>
          );
    }
}

export default Loader;