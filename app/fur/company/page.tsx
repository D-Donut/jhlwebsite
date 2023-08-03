export const metadata = {
  title:
    'Jos. H. Lowenstein &amp; Sons - Leather Products, Hair Products &amp; Fur Products - Dye Products and Dyestuff - JHL	',
  description:
    'Jos. H. Lowenstein &amp; Sons a quality dyestuff manufacturer, has been providing the world of fashion with state-of-the-art dye products, brilliant, trend-setting colors for the fur, hair &amp; leather industries all over the world. JHL located in Brooklyn, NY provides a complete line of raw materials for the hair color manufacturer. Our technical staff is well versed in all phases of the hair color formulators requirements. Dye intermediates for permanent hair color are available, along with specially formulated bases and developers. Dyestuff and base materials are also available for semi-permanent and specialty systems.',
}

import Link from 'next/link'

import Hero from '@/app/fur/company/hero'
import Content from '@/app/fur/company/contentA'
import Particles from '@/app/fur/components/particles'
import ZigZag from '@/app/hair/components/zigzag'

export default function FurCompany() {
  return (
    <section>
      <div className='flex flex-col items-center justify-center overflow-hidden '>
        <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
        <Particles
          className='absolute inset-0 -z-10 animate-fade-in'
          quantity={200}
        />
        <Hero />
        <Content />
      </div>
    </section>
  )
}
