import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import BannerCounter from './BannerCounter'

const Banner = () => {

  const count ={
    digit: "200 +",
    discription: "Residental grup telah bergabung"
  }

  const count2 ={
    digit: "10 +",
    discription: "Sudah berpengalaman"
  }

  const count3 ={
    digit: "999 +",
    discription: "Properti tersedia di berbagai Kota"
  }
  return (
    <div className='banner--background--color'>

    <Container>
      <Row>

        <Col className='banner--left--section' md={6}>
          <div>
            <h1 className='banner--left__heading'>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
            <p className='banner--left__subHeading'>Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>

            <div className='banner--left__counter'>
              <BannerCounter countDetails={count}></BannerCounter>
              <BannerCounter countDetails={count2}></BannerCounter>
              <BannerCounter countDetails={count3}></BannerCounter>
            </div>
          </div>
        </Col>

        <Col md={6}>

          <div className='video-container'>
            <video autoPlay muted width="100%" height="100%"  className='kk'>
              <source src='https://buildmymvp.com/img/feature-home2.mp4' type="video/mp4" />
            </video>
          </div>

        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Banner