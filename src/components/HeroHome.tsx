'use client';

import { company } from '@/app/constants/constants';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';
import { motion } from 'framer-motion';

const HeroHome = () => {
  return (
    <section
      id='inicioSection'
      className='flex justify-center overflow-hidden bg-black'
    >
      <div className={`max-w-[1920px] w-full flex flex-col items-center z-10`}>
        <div className='flex justify-center max-w-6xl lg:max-w-[1920px] w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
          <article className='h-[400px] md:h-[480px] lg:h-[600px] xl:h-[680px] relative w-full flex flex-col items-center justify-center md:min-w-[430px] lg:min-w-[540px] z-20'>
            <HeroCarousel />
            <div
              className={`absolute w-full h-full top-0 -right-0 bg-black/65 md:bg-black/75 -z-20`}
            ></div>

            <div className='flex flex-col items-center'>
              <div className='md:gap-3 text-nowrap'>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className='text-[28px] sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-color-primary-light'
                >
                  Tu auto ideal está
                </motion.h2>
              </div>
              <div className='md:gap-3 text-nowrap lg:mb-2'>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className='text-[28px] sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-color-title-light'
                >
                  en {company.name}
                </motion.h2>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-lg lg:text-xl xl:text-2xl text-center text-color-text-light mx-4 max-w-md sm:max-w-md lg:max-w-lg xl:max-w-2xl mb-1 sm:mb-2 md:mb-4'
            >
              Vehículos seleccionados con la mejor relación calidad-precio del
              mercado. Esperamos tu consulta!
            </motion.p>

            {/* Features destacados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className='flex justify-center gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4 lg:mb-6 text-color-text-light'
            >
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-color-primary-light rounded-full'></div>
                <span className='lg:text-lg font-medium'>Compra/Venta</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-color-primary-light rounded-full'></div>
                <span className='lg:text-lg font-medium'>
                  Consignación/Permuta
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='flex flex-col sm:flex-row gap-3 md:gap-4 mb-2 md:mb-1 lg:mb-0'
            >
              <Link
                href='/catalogo'
                className='group relative px-8 py-4 bg-color-primary hover:bg-color-primary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform'
              >
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  <span>Explorar Catálogo</span>
                  <svg
                    className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href='/contacto'
                className='group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-color-primary hover:bg-white/10  transition-all duration-300 transform  backdrop-blur-sm'
              >
                <span className='flex items-center justify-center gap-2'>
                  <span>Contactar</span>
                  <svg
                    className='w-[18px] h-[18px] group-hover:scale-110 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
