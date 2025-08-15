import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

const frogs = [
  {
    name: 'FrogGrammer',
    base: '/base.png',
    equipped: '/frog1-equipped.png',
    accessories: [
      {name: 'Ghost Protocol', image: '/Ghost_Protocol.png', top: '0%', left: '75%', },
      { name: 'Darkrypt', image: '/Darkrypt.png', top: '5%', left: '-5%' },
      { name: 'Voltrush', image: '/Voltrush.png', top: '65%', left: '-5%' },
      { name: 'Frogne', image: '/Frogne.png', top: '35%', left: '78%' },
      { name: 'FireJacket', image: '/FireJacket.png', top: '67%', left: '75%' },
    ],
  },
  {
    name: 'FrogTwo',
    base: '/base2.png',
    equipped: '/frog2-equipped.png',
    accessories: [
      { name: 'Darksight', image: '/Darksight.png', top: '20%', left: '72%' },
      { name: 'Jammer', image: '/Jammer.png', top: '0%', left: '-5%' },
      { name: 'Voidstep', image: '/Voidstep.png', top: '70%', left: '-5%' },
      { name: 'Nullpack', image: '/Nullpack.png', top: '35%', left: '-8%' },
      { name: 'Shadowsuit', image: '/Shadowsuit.png', top: '65%', left: '75%' },
    ],
  },
  {
    name: 'FrogThree',
    base: '/base3.png',
    equipped: '/frog3-equipped.png',
    accessories: [
      { name: 'Bluewave', image: '/Bluewave.png', top: '-5%', left: '70%' },
      { name: 'Blackout', image: '/Blackout.png', top: '-5%', left: '0%' },
      { name: 'Voidstep', image: '/Voidsteps2.png', top: '65%', left: '-5%' },
      { name: 'Netfroak', image: '/Netfroak.png', top: '65%', left: '75%' },
      { name: 'Spysuit', image: '/Spysuit.png', top: '28%', left: '75%' },
      { name: 'Noctyra', image: '/Noctyra.png', top: '25%', left: '-5%' },
    ],
  },
] as const;

export const AccessoryMiniGame: React.FC = () => {
  //states
  const [equippedStates, setEquippedStates] = useState([false, false, false]);

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
        navigation
        scrollbar={{ draggable: true }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, A11y]}
        className='w-full max-w-md mx-auto mb-12'
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
                        // fill
                        // className='object-contain z-0'
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
                          width: 'clamp(80px, 12vw, 120px)',
                          height: 'clamp(100px, 14vw, 140px)',
                          justifyContent: 'center',
                        }}
                      >
                        <img
                          src={acc.image}
                          alt={acc.name}
                          width={60}
                          height={60}
                          className='object-contain mb-1 border border-white rounded-sm'
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
                      // fill
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
      </Swiper>

      {/* Swiper override styles */}
      <style>{`
        :root {
          --swiper-navigation-color: #05df72 !important;
          --swiper-theme-color: #05df72 !important;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #05df72;
        }
      `}</style>
    </section>
  );
};
