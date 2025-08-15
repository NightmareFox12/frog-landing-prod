import { useState } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardContent } from './ui/card';

//constants
const characters = [
  {
    name: 'FrogPhantom',
    skill: 'Node Infiltration',
    color: 'from-blue-500 to-cyan-400',
    imagePath: '/phantomll.png',
    description:
      'Specialist in silent infiltration and detection evasion. Ideal for covert operations where remaining unnoticed is critical.',
  },
  {
    name: 'FrogRoot',
    skill: 'Signal Disruption',
    color: 'from-yellow-500 to-orange-400',
    imagePath: '/frogroott.png',
    description:
      'Master of network sabotage and communication blackouts. Capable of disabling critical systems with surgical precision.',
  },
  {
    name: 'FrogBit',
    skill: 'Code Decryption',
    color: 'from-green-500 to-emerald-400',
    imagePath: '/frogbit.png',
    description:
      'Expert in breaking encryption and analyzing complex smart contracts. His logic and precision make him indispensable for decryption tasks.',
  },
  {
    name: 'FrogGrammer',
    skill: 'Virus Installation',
    color: 'from-red-500 to-pink-400',
    imagePath: '/FrogGrammer.png',
    description:
      'Creator and infiltrator of liquidity-draining viruses. Penetrates financial systems to destabilize the network from within.',
  },
] as const;

export const CharacterSection: React.FC = () => {
  //states
  const [currentCharacterID, setCurrentCharacterID] = useState<number>(0);

  return (
    <section className='flex flex-col mx-auto p-2 md:p-6 lg:p-8 mb-12 max-w-6xl'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-6xl md:text-8xl font-bold text-center mb-4 text-white tracking-[0.5px]'>
          FRO<span className='text-green-400'>GGER</span>
        </h2>
        <div className='mb-8 p-4 border border-green-400 bg-black/50 backdrop-blur-sm animate-pulse rounded-xl'>
          <p className='text-xl md:text-2xl leading-relaxed text-center'>
            Four specialists. One deadly mission. Masters of infiltration,
            signal sabotage, decryption, and viral warfare—they're FrogHack’s
            most feared unit. And they're ready to strike.
          </p>
        </div>
      </div>

      <article className='flex flex-col md:flex-row h-[450px] md:h-[300px] md:gap-5 relative justify-center'>
        <Card
          className={`bg-black/80 border-2 md:flex-1 transition-all duration-500 rounded-xl ${
            currentCharacterID === 2 || currentCharacterID == 0
              ? `border-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse`
              : 'border-green-400 hover:border-cyan-400'
          }`}
        >
          <CardContent className='p-6 h-full flex justify-center items-center flex-col'>
            <div className='mb-4 relative overflow-hidden rounded-xl' />
            <h3 className='text-2xl font-bold mb-2 text-green-400'>
              {characters[currentCharacterID].name}
            </h3>
            <div
              className={`text-lg font-bold mb-3 bg-gradient-to-r ${characters[currentCharacterID].color} bg-clip-text text-transparent`}
            >
              {characters[currentCharacterID].skill}
            </div>
            <p className='text-sm text-white text-center leading-snug mt-2 font-bold tracking-wide pixel-font'>
              {characters[currentCharacterID].description}
            </p>
          </CardContent>
        </Card>

        <Swiper
          className='flex-2 md:flex-1 w-full'
          slidesPerView={1}
          onSlideChange={(swiper) => {
            const i = swiper.realIndex;
            setCurrentCharacterID(i);
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          scrollbar={{ draggable: true }}
          loop={true}
        >
          {characters.map((char) => (
            <SwiperSlide>
              <div className='flex justify-center items-center relative h-full'>
                <div className='relative h-64 w-64'>
                  <img
                    src={char.imagePath}
                    alt={char.name}
                    className='absolute h-full w-full object-fill pb-8 md:pb-2'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>

      {/* swiper override stlyes */}
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
