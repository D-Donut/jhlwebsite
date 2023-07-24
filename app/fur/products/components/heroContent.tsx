import Image from 'next/image'

import BKBridge from '@/public/images/testtubes.png'

export default function HeroContent() {
  return (
    <section>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-5 md:py-20'>
            {/* Section header */}
            <div className='text-center mx-auto max-w-4xl pb-12 md:pb-16 '>
              {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
              <h1 className='h1' data-aos='fade-up' data-aos-delay='200'>
                Fur Products
              </h1>
            </div>

            {/* Items */}
            <div className='grid gap-20'>
              {/* 1st item */}
              <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
                {/* Image */}
                <div
                  className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                  data-aos='fade-up'
                >
                  <Image
                    className='max-w-full mx-auto md:max-w-none h-auto'
                    src={BKBridge}
                    width={540}
                    height={405}
                    alt='Features 01'
                  />
                </div>
                {/* Content */}
                <div
                  className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                  data-aos='fade-right'
                >
                  <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                    <h3 className='h3 mb-3 cursor-default text-gray-300'>
                      Dye Intermediates
                    </h3>
                    <p className='text-gray-400 mb-4 text-bold'>
                      Our comprehensive range of{' '}
                      <span className='font-bold'>DYE INTERMEDIATES</span>{' '}
                      caters to the diverse needs of the hair color industry,
                      ensuring that professional stylists and manufacturers have
                      access to top-quality products for creating stunning and
                      long-lasting hair color transformations.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2nd item */}

              {/* 3rd item */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
