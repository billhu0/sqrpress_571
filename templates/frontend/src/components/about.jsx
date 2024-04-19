/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import wechatpay from '../assets/wechatpay.jpg'
import alipay from '../assets/alipay.png';

function About() {
  return (
    <>
      <h1>Donate</h1>
      <div style={{display: 'flex'}}>
        <img src={wechatpay} width='300px' alt="wechatpay" />
        <img src={alipay} width='300px' alt="alipay" />
      </div>
    </>
  )
}

export default About;
