import React from 'react'
import Image from './Image'

const Slider = () => {
  const imglist = [
    "https://wallpapers.com/images/hd/jewellery-background-1920-x-1200-usm9vzukq0ufyqzx.jpg",
    "https://t3.ftcdn.net/jpg/06/12/42/06/360_F_612420676_Az3c9EUa7JNa5ShgNII8DGt4XNEOtqv4.jpg",
    "https://t3.ftcdn.net/jpg/11/48/86/74/360_F_1148867441_KVcEyKToMOFStVOmk77VEOxqiQqBAdEn.jpg"
  ]
  return (
    <>
      <section className=''>
        <div class="bxslider">
          <Image setofImages={imglist} />
        </div>
      </section>
    </>
  )
}

export default Slider
