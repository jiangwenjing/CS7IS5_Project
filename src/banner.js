import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';

const Banner = () => {
    const contentStyle = {
        height: '330px',
        color: '#fff',
        lineHeight: '330px',
        textAlign: 'center',
        background: '#364d79',
    };
    return(
        <>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </>
    );

}

export default Banner;