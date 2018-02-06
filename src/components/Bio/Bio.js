import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Image, Grid, Col, Row } from 'react-bootstrap'
import skillPara from '../Images/candle.gif'
import vegeta from '../Images/vegeta.gif'
import './bio.css';

class Bio extends Component {
  render() {
    return (
      <div>
        <Parallax
          blur={5}
          bgImage={skillPara}
          bgWidth={'auto'}
          bgHeight={'auto'}
          bgImageAlt="the cat"
          strength={50}
        >
            <h1> Skills </h1>
            <div className="skillbox">
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />
                <Image src={vegeta} rounded />  
            </div>
       
          

          <div style={{
            height: '50px',
            backgroundColor: 'white'
          }} />

        </Parallax>
        <Parallax
          blur={5}
          bgImage={skillPara}
          bgWidth={'auto'}
          bgHeight={'auto'}
          bgImageAlt="the cat"
          strength={50}
        >
          <Grid>
            <h1> Projects </h1>
            <Row>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
            </Row>
          </Grid>

          <div style={{
            height: '50px',
            backgroundColor: 'white'
          }} />

        </Parallax>
        <Parallax
          blur={5}
          bgImage={skillPara}
          bgWidth={'auto'}
          bgHeight={'auto'}
          bgImageAlt="the cat"
          strength={50}
        >
          <Grid>
            <h1> Experience </h1>
            <Row>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src={vegeta} rounded />
              </Col>
            </Row>
          </Grid>

          <div style={{
            height: '50px',
            backgroundColor: 'white'
          }} />

        </Parallax>
      </div>
    );
  }
}

export default Bio;
