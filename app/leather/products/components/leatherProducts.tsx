'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

export default function LeatherProducts() {
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className='relative'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className='absolute inset-0  pointer-events-none mb-16'
        aria-hidden='true'
      ></div>
      <div className='absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2'></div>

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-12 md:pt-20'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <h1 className='h2 mb-4'>Explore the Products</h1>
            <p className='text-xl text-gray-500 font-semibold'>
              Our team at JHL is devoted to delivering the highest quality of
              products to ensure our clients' satisfaction is always met
            </p>
          </div>

          {/* Section content */}
          <div className='md:grid md:grid-cols-12 md:gap-6'>
            {/* Content */}
            <div
              className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6'
              data-aos='fade-right'
            >
              
              {/* Tabs buttons */}
              <div className='mb-8 text-center md:mb-0'>
                <a
                  className={`flex  items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? ' shadow-md border-transparent hover:shadow-lg'
                      : 'bg-violet-600 border-transparent'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(1)
                  }}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Lowatan Retanning Agents, Syntans, & Auxiliaries
                    </div>
                  </div>
                </a>
              </div>
              <div className='mb-8 md:mb-0'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? ' shadow-md border-transparent hover:shadow-lg'
                      : 'bg-violet-600 border-transparent'
                  }`}
                  href='#0'
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(2)
                  }}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Lowenol Fatliquors
                    </div>
                  </div>
                </a>
              </div>
              <div className='mb-8 md:mb-0'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? ' shadow-md border-transparent hover:shadow-lg'
                      : 'bg-violet-600 border-transparent'
                  }`}
                  href='#0'
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(3)
                  }}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Lowapel Dyes
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs Items */}
            <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'>
              <div className='transition-all'>
                <div
                  className='relative flex flex-col text-center lg:text-left'
                  data-aos='zoom-y-out'
                  ref={tabs}
                >
                  {/* Lowatan Retanning Agents, Syntans, & Auxiliaries */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className='w-full'
                    enter='transition ease-in-out duration-700 transform order-first'
                    enterFrom='opacity-0 translate-y-16'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in-out duration-300 transform absolute'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-16'
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className='relative inline-flex flex-col'>
                      <h1 className='h1 '></h1>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN NNS:
                        </span>{' '}
                        <span className='font-semibold '>
                          anionic buffering syntan
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN AB:
                        </span>{' '}
                        <span className='font-semibold '>
                          acid enzyme bate.
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN GP:
                        </span>{' '}
                        <span className='font-semibold '>
                          replacement syntan - general use
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN COM LIQ:
                        </span>{' '}
                        <span className='font-semibold '>
                          compact retan/fatliquor
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN WL:
                        </span>{' '}
                        <span className='font-semibold '>
                          white replacement syntan
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN AS:
                        </span>{' '}
                        <span className='font-semibold '>
                          aluminum-containing retanning agent
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN AM:
                        </span>{' '}
                        <span className='font-semibold '>
                          amphoteric replacement syntan
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN CR:
                        </span>{' '}
                        <span className='font-semibold '>
                          chrome syntan
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN TS:
                        </span>{' '}
                        <span className='font-semibold '>
                          tanning/retanning of Cr-free leather
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN RPE LIQUID:
                        </span>{' '}
                        <span className='font-semibold '>
                          acid acrylic resin
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN NR LIQUID:
                        </span>{' '}
                        <span className='font-semibold '>
                          acrylic copolymer
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN DC:
                        </span>{' '}
                        <span className='font-semibold '>
                          di-cyanamide resin
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN SD LIQUID:
                        </span>{' '}
                        <span className='font-semibold '>
                          mildly cationic shade deepening agent
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN DN:
                        </span>{' '}
                        <span className='font-semibold '>
                          special surface masking/bleaching agent
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN FILLER P:
                        </span>{' '}
                        <span className='font-semibold '>
                          general purpose protein type
                        </span>
                      </p>
                    </div>
                  </Transition>
{/* Lowenol Fatliquors */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className='w-full'
                    enter='transition ease-in-out duration-700 transform order-first'
                    enterFrom='opacity-0 translate-y-16'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in-out duration-300 transform absolute'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-16'
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className='relative inline-flex flex-col'>
                      <h1 className='h1 '></h1>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL AMO:
                        </span>{' '}

                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BMO:
                        </span>{' '}
                        <span className='font-semibold '>
                          bisulfited marine oil - highly concentrated
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BSN:
                        </span>{' '}
                        <span className='font-semibold '>
                          non-yellowing, non-oxydizing oil for whites
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL DMS:
                        </span>{' '}
                        <span className='font-semibold '>
                          sulphated/sulphited marine oil
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL EML:
                        </span>{' '}
                        <span className='font-semibold '>
                          general use synthetic oil
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL NZB:
                        </span>{' '}
                        <span className='font-semibold '>
                          sulphated lanolin
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL WP:
                        </span>{' '}
                        <span className='font-semibold '>
                          waterproof fatliquor
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL SO-67:
                        </span>{' '}
                        <span className='font-semibold '>
                          synthetic neatsfoot solvent fatliquor
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL CAT:
                        </span>{' '}
                        <span className='font-semibold '>
                          cationic topping oil
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL GHB:
                        </span>{' '}
                        <span className='font-semibold '>
                          natural and synthetic oil
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL SOFT MSW:
                        </span>{' '}
                        <span className='font-semibold '>
                          sulfated oil for very soft leathers
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL TRS:
                        </span>{' '}
                        <span className='font-semibold '>
                          synthetic & natural sulphited/sulphated oil
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BMD:
                        </span>{' '}
                        <span className='font-semibold '>
                          cationic wax and paraffins
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BKD:
                        </span>{' '}
                        <span className='font-semibold '>
                          cationic stuffing wax for pull-up
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL LFC:
                        </span>{' '}
                        <span className='font-semibold '>
                          high-quality, low-fog fatliquor
                        </span>
                      </p>
                    </div>
                  </Transition>
{/* Lowapel Dyes */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className='w-full'
                    enter='transition ease-in-out duration-700 transform order-first'
                    enterFrom='opacity-0 translate-y-16'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in-out duration-300 transform absolute'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-16'
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className='relative inline-flex flex-col'>
                      <h1 className='h1 '></h1>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Black JET 160%
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Black EX-1
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Black JP
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Black Magic
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Black SSB
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Black NT 250 %
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Black HH 150 %
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Brown NGB
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Brown BNR
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Brown MFR
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Brown CB
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Brown CR
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Brown NT
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Brown NR
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Brown B2C
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Brown SSN
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Olive Brown N
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Yellow Brown GS
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Yellow GG
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Brilliant Red 2B
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Red R
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Blue BB
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Blue 2RN
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Dark Green NH
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>
                          Beige ET
                        </span>
                      </p>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// ;<div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'>
//   <div className='transition-all'>
//     <div
//       className='relative flex flex-col text-center lg:text-left'
//       data-aos='zoom-y-out'
//       ref={tabs}
//     >
//       {/* Lowenol Surfactants */}
//       <Transition
//         show={tab === 1}
//         appear={true}
//         className='w-full'
//         enter='transition ease-in-out duration-700 transform order-first'
//         enterFrom='opacity-0 translate-y-16'
//         enterTo='opacity-100 translate-y-0'
//         leave='transition ease-in-out duration-300 transform absolute'
//         leaveFrom='opacity-100 translate-y-0'
//         leaveTo='opacity-0 -translate-y-16'
//         beforeEnter={() => heightFix()}
//         unmount={false}
//       >
//         <div className='relative inline-flex flex-col'>
//           <p className=' text-gray-400 mb-3'>
//             LOWENOL C-9685
//             <span className='font-bold font-blue-500'>LOWENOL C-9685</span>:
//             Nonionic foam stabilizing/dispersing agent/viscosity controlling
//             agent for shampoos and hair colors.
//           </p>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//         </div>
//       </Transition>
//       {/* Item 2 */}
//       <Transition
//         show={tab === 2}
//         appear={true}
//         className='w-full'
//         enter='transition ease-in-out duration-700 transform order-first'
//         enterFrom='opacity-0 translate-y-16'
//         enterTo='opacity-100 translate-y-0'
//         leave='transition ease-in-out duration-300 transform absolute'
//         leaveFrom='opacity-100 translate-y-0'
//         leaveTo='opacity-0 -translate-y-16'
//         beforeEnter={() => heightFix()}
//         unmount={false}
//       >
//         <div className='relative inline-flex flex-col  mb-40'>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>
//         </div>
//       </Transition>
//       {/* Item 3 */}
//       <Transition
//         show={tab === 3}
//         appear={true}
//         className='w-full'
//         enter='transition ease-in-out duration-700 transform order-first'
//         enterFrom='opacity-0 translate-y-16'
//         enterTo='opacity-100 translate-y-0'
//         leave='transition ease-in-out duration-300 transform absolute'
//         leaveFrom='opacity-100 translate-y-0'
//         leaveTo='opacity-0 -translate-y-16'
//         beforeEnter={() => heightFix()}
//         unmount={false}
//       >
//         <div className='relative inline-flex flex-col  mb-40'>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>{' '}
//         </div>
//       </Transition>
//       {/* Item 4 */}
//       <Transition
//         show={tab === 4}
//         appear={true}
//         className='w-full'
//         enter='transition ease-in-out duration-700 transform order-first'
//         enterFrom='opacity-0 translate-y-16'
//         enterTo='opacity-100 translate-y-0'
//         leave='transition ease-in-out duration-300 transform absolute'
//         leaveFrom='opacity-100 translate-y-0'
//         leaveTo='opacity-0 -translate-y-16'
//         beforeEnter={() => heightFix()}
//         unmount={false}
//       >
//         <div className='relative inline-flex flex-col  mb-40'>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>{' '}
//         </div>
//       </Transition>
//       {/* Item 5 */}
//       <Transition
//         show={tab === 5}
//         appear={true}
//         className='w-full'
//         enter='transition ease-in-out duration-700 transform order-first'
//         enterFrom='opacity-0 translate-y-16'
//         enterTo='opacity-100 translate-y-0'
//         leave='transition ease-in-out duration-300 transform absolute'
//         leaveFrom='opacity-100 translate-y-0'
//         leaveTo='opacity-0 -translate-y-16'
//         beforeEnter={() => heightFix()}
//         unmount={false}
//       >
//         <div className='relative inline-flex flex-col  mb-40'>
//           <h4 className='h4 text-gray-400 mb3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>{' '}
//         </div>
//       </Transition>
//       {/* Item 6 */}
//       <Transition
//         show={tab === 6}
//         appear={true}
//         className='w-full'
//         enter='transition ease-in-out duration-700 transform order-first'
//         enterFrom='opacity-0 translate-y-16'
//         enterTo='opacity-100 translate-y-0'
//         leave='transition ease-in-out duration-300 transform absolute'
//         leaveFrom='opacity-100 translate-y-0'
//         leaveTo='opacity-0 -translate-y-16'
//         beforeEnter={() => heightFix()}
//         unmount={false}
//       >
//         <div className='relative inline-flex flex-col  mb-40'>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>{' '}
//         </div>
//       </Transition>
//       {/* Item 7 */}
//       <Transition
//         show={tab === 7}
//         appear={true}
//         className='w-full'
//         enter='transition ease-in-out duration-700 transform order-first'
//         enterFrom='opacity-0 translate-y-16'
//         enterTo='opacity-100 translate-y-0'
//         leave='transition ease-in-out duration-300 transform absolute'
//         leaveFrom='opacity-100 translate-y-0'
//         leaveTo='opacity-0 -translate-y-16'
//         beforeEnter={() => heightFix()}
//         unmount={false}
//       >
//         <div className='relative inline-flex flex-col  mb-40'>
//           <h4 className='h4 text-gray-400 mb-3'>
//             <span className='font-bold font-blue-500'></span>:{' '}
//           </h4>{' '}
//         </div>
//       </Transition>
//     </div>
//   </div>
// </div>
