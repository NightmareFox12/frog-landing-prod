import { AccessoryMiniGame } from './components/AccessoryMiniGame';
import { CharacterSection } from './components/CharacterSection';
import { MatrixRain } from './components/MatrixRain';
import { Button } from './components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardContent } from './components/ui/card';

//constants
const gameModes = [
  { name: 'FROGOPS', description: 'Forge your Digital Legacy' },
  { name: 'FROGFORGE', description: 'Create, Upgrade, Dominate' },
  { name: 'HACK RUSH', description: 'Inflitrate, Exploit, Escape' },
] as const;

//@ts-expect-error import css
import 'swiper/css';
//@ts-expect-error import css
import 'swiper/css/navigation';
//@ts-expect-error import css
import 'swiper/css/pagination';
//@ts-expect-error import css
import 'swiper/css/scrollbar';

export default function FrogHackLanding() {
  return (
    <main className='min-h-screen bg-black text-green-400 overflow-hidden relative'>
      <MatrixRain />

      {/* Hero Section */}
      <section className='relative z-10 min-h-screen flex items-center justify-center px-4'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='mb-4'>
            <img
              src='/Logo.png'
              alt='FrogHack Logo'
              className='mx-auto w-32 h-32 animate-pulse'
              width={50}
              height={50}
              style={{
                imageRendering: 'pixelated',
              }}
            />
          </div>

          <div className='mb-8 animate-pulse'>
            <h1 className='text-6xl md:text-8xl font-bold text-white mb-2 tracking-[0.5px]'>
              FROG<span className='text-green-400'>HACK</span>
            </h1>
          </div>

          <div className='mb-8 p-6 border border-green-400 bg-black/50 backdrop-blur-sm rounded-xl'>
            <p className='text-xl md:text-2xl leading-relaxed'>
              FrogHack is next-gen gaming: P2E and idle merged into one
              ecosystem. On the FrogChain, frogs reign with power and mystery.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button className='bg-gradient-to-r from-green-500 to-green-800 text-white font-bold text-xl px-8 py-4 hover:scale-105 transition-transform animate-pulse'>
              Coming Soon...
            </Button>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <CharacterSection />

      {/* Accessories Section */}
      <section className='relative z-10 py-2 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl md:text-8xl font-bold text-center mb-4 text-white tracking-[0.5px]'>
            ACCE<span className='text-green-400'>SSORIES</span>
          </h2>
          <div className='mb-8 p-4 border border-green-400 bg-black/50 backdrop-blur-sm rounded-xl'>
            <p className='text-xl md:text-2xl leading-relaxed text-center'>
              Each Frogger wields a custom arsenal—dark-piercing visors, viral
              cores that disrupt entire networks. Their gear is the line between
              failure and the perfect hack.
            </p>
          </div>

          <AccessoryMiniGame />
        </div>
      </section>

      {/* Houses Section */}
      <section className='relative z-10 py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-6xl md:text-8xl font-bold text-center mb-4 text-white tracking-tight'>
            FROG<span className='text-green-400'> HOUSES</span>
          </h2>

          <div className='mb-8 p-4 border border-green-400 bg-black/50 backdrop-blur-sm rounded-xl'>
            <p className='text-xl md:text-2xl leading-relaxed text-center'>
              There are 4 unique houses. Each Frog WorkHouse arms Froggers with
              the tools to unleash their skills. After every FrogChain Ops
              mission, they rest before striking again.
            </p>
          </div>

          <div className='max-w-[500px] mx-auto'>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop={true}
              className='rounded-xl'
            >
              {['/Inflitration.png', '/Disruption.png', '/Code.png', '/Virus.png'].map((src, index) => (
                <SwiperSlide key={index}>
                  <div className='border-2 border-green-400 rounded-xl overflow-hidden'>
                    <img
                      src={src}
                      alt={`House ${index + 1}`}
                      className='w-full h-[300px] object-fill'
                      loading='lazy'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>


      {/* Game Modes Section */}
      <section className='relative z-10 py-2 px-4 mb-12'>
        <div className='max-w-6xl mx-auto mb-12'>
          <h2 className='text-6xl md:text-8xl font-bold text-center mb-4 text-white tracking-[0.5px]'>
            GAME<span className='text-green-400'> MODES</span>
          </h2>
          <div className='mb-8 p-4 border border-green-400 bg-black/50 backdrop-blur-sm rounded-xl'>
            <p className='text-xl md:text-2xl leading-relaxed text-center'>
              Three game modes are hopping into FrogHacks—stay tuned to uncover
              what's coming.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {gameModes.map((mode) => (
              <Card
                key={mode.name}
                className='bg-black/80 border-2 border-green-400 hover:border-cyan-400 hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl'
              >
                <CardContent className='p-6 text-center'>
                  <div className='mb-4 relative overflow-hidden rounded-xl'>
                    <img
                      src={
                        mode.name === 'FROGOPS'
                          ? '/frogopsfin.png'
                          : mode.name === 'FROGFORGE'
                            ? '/frogforge.png'
                            : mode.name === 'HACK RUSH'
                              ? '/hackrushfi.png'
                              : `/abstract-geometric-shapes.png?key=7wl17&height=200&width=200`
                      }
                      alt={mode.name}
                      width={30}
                      height={30}
                      className='w-full h-full object-fill border-2 border-green-400 rounded-xl hover:border-cyan-400 transition-colors'
                    />
                  </div>
                  <h3 className='text-xl font-bold mb-3 text-green-400'>
                    {mode.name}
                  </h3>
                  <p className='text-green-300'>{mode.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='relative z-10 py-8 px-4 border-t border-green-400'>
        <div className='max-w-6xl mx-auto text-center'>
          <div className='text-2xl font-bold mb-4 text-green-400'>FROGHACK</div>
          <p className='text-green-400 font-mono'>
            &copy; 2025 FrogHack. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
