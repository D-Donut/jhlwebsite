import Image from 'next/image'

import World from '@/public/images/jhl12.svg'

export default function Hero() {
  return (
    <section>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative'>
        {/* Hero content */}
        <div className='relative pt-100 pb-10 mt7 md:pt-40 md:pb-16'>
          <div className=''>
            <div className='text-center mx-auto max-w-4xl pb-5 md:pb-5 '>
              <h1
                className='h1 mb-4 z-10   flex-col gap-4 transition font-display  font-bold leading-none'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                Contact Us <br />{' '}
                <span className='text-transparent duration-1000  cursor-default  animate-title   bg-clip-text  bg-gradient-to-r from-rose-600 via-amber-400 to-blue-700  inline-flex'>
                  {' '}
                  Let us know how we can Help!{' '}
                </span>
              </h1>
              <h4
                className='h4 text-center mx-auto max-w-4l text-gray-400 mb-10'
                data-aos='fade-up'
              >
                We're happy to answer any questions you may have about our color
                formulations, to set up a free consultation with one of our
                color chemists, or to provide you with any additional
                information you may need.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
