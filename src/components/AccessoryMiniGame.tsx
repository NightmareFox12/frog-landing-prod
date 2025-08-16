import { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { Button } from './ui/button';

const frogs = [
  {
    name: 'FrogGrammer',
    base: '/base.png',
    equipped: '/frog1-equipped.png',
    accessories: [
      {
        name: 'Ghost Protocol',
        image: '/Ghost_Protocol.png',
        top: '0%',
        left: '75%',
      },
      { name: 'Darkrypt', image: '/Darkrypt.png', top: '5%', left: '0%' },
      { name: 'Voltrush', image: '/Voltrush.png', top: '75%', left: '80%' },
      { name: 'Frogne', image: '/Frogne.png', top: '70%', left: '-8%' },
      { name: 'FireJacket', image: '/FireJacket.png', top: '35%', left: '80%' },
    ],
  },
  {
    name: 'FrogTwo',
    base: '/base2.png',
    equipped: '/frog2-equipped.png',
    accessories: [
      { name: 'Darksight', image: '/Darksight.png', top: '0%', left: '75%' },
      { name: 'Jammer', image: '/Jammer.png', top: '20%', left: '-5%' },
      { name: 'Voidstep', image: '/Voidstep.png', top: '65%', left: '-8%' },
      { name: 'Nullpack', image: '/Nullpack.png', top: '75%', left: '80%' },
      { name: 'Shadowsuit', image: '/Shadowsuit.png', top: '35%', left: '82%' },
    ],
  },
  {
    name: 'FrogThree',
    base: '/base3.png',
    equipped: '/frog3-equipped.png',
    accessories: [
      { name: 'Bluewave', image: '/Bluewave.png', top: '0%', left: '75%' },
      { name: 'Blackout', image: '/Blackout.png', top: '5%', left: '-5%' },
      { name: 'Voidstep', image: '/Voidsteps2.png', top: '75%', left: '-8%' },
      { name: 'Netfroak', image: '/Netfroak.png', top: '75%', left: '80%' },
      { name: 'Spysuit', image: '/Spysuit.png', top: '35%', left: '80%' },
      { name: 'Noctyra', image: '/Noctyra.png', top: '40%', left: '-10%' },
    ],
  },
] as const;

//components
const CustomControls = ({
  activeAccessories,
}: {
  activeAccessories: number;
}) => {
  const swiper = useSwiper();

  return (
    <div className='max-w-6xl flex justify-center items-center mt-5 gap-3 sm:gap-5'>
      <Button
        size='icon'
        className='bg-transparent cursor-pointer hover:bg-transparent hover:scale-[0.80] delay-100'
        onClick={() => swiper.slidePrev()}
      >
        <img
          src='/arrowSlider.png'
          alt='arrowRight'
          style={{
            imageRendering: 'pixelated',
          }}
        />
      </Button>
      <div className='relative grid place-items-center'>
        <span className='absolute mt-1 text-black z-10 font-semibold'>
          {activeAccessories + 1}
        </span>
        <img
          src='/circleSwiper.png'
          alt='circle number'
          style={{
            imageRendering: 'pixelated',
          }}
        />
      </div>
      <Button
        size='icon'
        onClick={() => swiper.slideNext()}
        className='bg-transparent cursor-pointer hover:bg-transparent hover:scale-[0.80] delay-100'
      >
        <img
          src='/arrowSlider.png'
          alt='arrowLeft'
          style={{
            imageRendering: 'pixelated',
            transform: 'scaleX(-1)',
          }}
        />
      </Button>
    </div>
  );
};

export const AccessoryMiniGame: React.FC = () => {
  //states
  const [equippedStates, setEquippedStates] = useState([false, false, false]);
  const [activeAccessories, setActiveAccessories] = useState(0);

  //functions
  const toggleEquip = (index: number) => {
    const updated = [...equippedStates];
    updated[index] = !updated[index];
    setEquippedStates(updated);
  };

  return (
    <section className='mt-16 p-6 bg-black/60 border border-green-400 rounded-xl text-center'>
      <h3 className='text-3xl font-bold text-green-400 mb-4'>
        Dress Your Frog
      </h3>
      <p className='text-green-300 mb-6'>
        Swipe through frogs. Equip their gear. See them evolve.
      </p>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, A11y]}
        className='w-full max-w-md mx-auto mb-12'
        onSlideChange={(swiper) => setActiveAccessories(swiper.realIndex)}
      >
        {frogs.map((frog, index) => (
          <SwiperSlide key={frog.name}>
            <div className='flex flex-col items-center'>
              <div className='relative w-64 h-64 mb-4'>
                {!equippedStates[index] ? (
                  <>
                    <div className='relative h-64 w-64'>
                      <img
                        src={frog.base}
                        alt={`${frog.name} Base`}
                        className='absolute h-full w-full object-fill pb-8 md:pb-2 z-0'
                      />
                    </div>
                    {frog.accessories.map((acc) => (
                      <div
                        key={acc.name}
                        className='absolute flex flex-col items-center'
                        style={{
                          top: acc.top,
                          left: acc.left,
                          zIndex: 1,
                          width: 'clamp(60px, 8vw, 72px)',
                          height: 'clamp(60px, 8vw, 72px)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(0,0,0,0.4)',
                          border: '1px solid white',
                          borderRadius: '6px',
                        }}
                      >
                        <img
                          src={acc.image}
                          alt={acc.name}
                          width={35}
                          height={35}
                          className='object-contain mb-1 rounded-sm'
                        />
                        <span className='text-[10px] text-white font-bold tracking-widest leading-none'>
                          {acc.name}
                        </span>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className='relative h-64 w-64'>
                    <img
                      src={frog.equipped}
                      alt={`${frog.name} Equipped`}
                      className='absolute h-full w-full object-fill pb-8 md:pb-2 z-10'
                    />
                  </div>
                )}
              </div>

              {/* Botón de equipar/desequipar */}
              <button
                onClick={() => toggleEquip(index)}
                className={`px-6 py-2 font-bold rounded transition-colors ${
                  equippedStates[index]
                    ? 'bg-cyan-400 text-black hover:bg-green-400'
                    : 'bg-green-400 text-black hover:bg-cyan-400'
                }`}
              >
                {equippedStates[index]
                  ? 'Unequip Accessories'
                  : 'Equip Accessories'}
              </button>
            </div>
          </SwiperSlide>
        ))}
        <CustomControls activeAccessories={activeAccessories} />
      </Swiper>
    </section>
  );
};
