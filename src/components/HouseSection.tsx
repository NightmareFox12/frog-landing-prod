import type React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { Button } from './ui/button';

//constants
const housesImage = [
  '/Inflitration.png',
  '/Disruption.png',
  '/Code.png',
  '/Virus.png',
] as const;

//components
const CustomControls = ({ activeHouse }: { activeHouse: number }) => {
  const swiper = useSwiper();

  return (
    <div className='max-w-6xl flex justify-center items-center mt-5 gap-3 sm:gap-5'>
      <Button size='icon' className='bg-transparent cursor-pointer hover:bg-transparent hover:scale-[0.80] delay-100' onClick={() => swiper.slidePrev()}>
        <img
          src='/arrowSlider.png'
          style={{
            imageRendering: 'pixelated',
          }}
        />
      </Button>
      <div className='relative grid place-items-center'>
        <span className='absolute mt-1 text-black z-10 font-semibold'>{activeHouse + 1}</span>
        <img
          src='/circleSwiper.png'
          style={{
            imageRendering: 'pixelated',
          }}
        />
      </div>
      <Button  size='icon' onClick={() => swiper.slideNext()} className='bg-transparent cursor-pointer hover:bg-transparent hover:scale-[0.80] delay-100'>
        <img
          src='/arrowSlider.png'
          style={{
            imageRendering: 'pixelated',
            transform: 'scaleX(-1)',
          }}
        />
      </Button>
    </div>
  );
};

export const HouseSection: React.FC = () => {
  //states
  const [activeHouse, setActiveHouse] = useState<number>(0);

  return (
    <section className='relative z-10 py-20'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-6xl md:text-8xl font-bold text-center mb-4 text-white tracking-[0.5px]'>
          FROG<span className='text-green-400'> HOUSES</span>
        </h2>

        <div className='mb-8 p-4 border border-green-400 bg-black/50 backdrop-blur-sm rounded-xl'>
          <p className='text-xl md:text-2xl leading-relaxed text-center'>
            There are 4 unique houses. Each Frog WorkHouse arms Froggers with
            the tools to unleash their skills. After every FrogChain Ops
            mission, they rest before striking again.
          </p>
        </div>

        <div className='max-w-6xl mx-auto'>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
            // autoplay={{ delay: 5000 }}
            speed={500}
            loop={true}
            onSlideChange={(data) =>
              setActiveHouse(
                data.realIndex + 1 >= housesImage.length
                  ? 0
                  : data.realIndex + 1
              )
            }
            className='rounded-xl'
          >
            {housesImage.map((src, index) => (
              <SwiperSlide key={index}>
                <div className='h-[150px] sm:h-[200px] md:h-[300px] flex justify-center items-center'>
                  <img
                    src={src}
                    alt={`House ${index + 1}`}
                    className={`border-4 border-green-400 object-fill transition-all delay-75 ${
                      activeHouse === index
                        ? 'h-full w-full'
                        : 'w-[80px] h-[80px] sm:w-[100px] sm:h-[100] md:w-[150px] md:h-[150px] lg:w-[150px]'
                    }`}
                    loading='lazy'
                  />
                </div>
              </SwiperSlide>
            ))}

            <CustomControls activeHouse={activeHouse} />
          </Swiper>
        </div>
      </div>
    </section>
  );
};
