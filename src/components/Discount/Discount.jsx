import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-repeat bg-right bg-cover' style={{backgroundImage:`url(${FreshFruits})`}}>
        <div className='bg-zinc-100 lg:bg-transparent flex flex-col lg:flex-row max-w-[1400] mx-auto px-10 py-10'>
            <span className=' text-6xl lg:text-9xl text-orange-500 font-bold transform lg:-rotate-90 h-fit lg:self-center'>20%</span>
            <div className='max-w-[700px] '>
                <h3 className='text-4xl lg:text-7xl text-zinc-800 font-bold mt-2'>First Order Discount!</h3>
                <p className='text-zinc-600 mb-3'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. First delivery and quality guaranteed.</p>
                <Button content='Get a Discount'/>
            </div>
        </div>
    </section>
  )
}

export default Discount