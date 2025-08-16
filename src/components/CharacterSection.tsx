export const CharacterSection: React.FC = () => {
  return (
    <section className='flex flex-col md:flex-row mx-auto p-4 md:p-8 max-w-6xl gap-8 items-center'>
      {/* Texto a la izquierda */}
      <div className='md:w-1/2'>
        <h2 className='text-6xl md:text-8xl font-bold text-center sm:text-left mb-4 text-white tracking-[0.5px]'>
          FRO<span className='text-green-400'>GGER</span>
        </h2>
        <div className='p-4 border border-green-400 bg-black/50 backdrop-blur-sm rounded-xl'>
          <p className='text-xl md:text-2xl leading-relaxed text-justify'>
            Four specialists. One deadly mission. Masters of infiltration,
            signal sabotage, decryption, and viral warfare—they're FrogHack’s
            most feared unit. And they're ready to strike.
          </p>
        </div>
      </div>

      {/* Imagen de los 16 personajes a la derecha */}
      <div className='md:w-1/2 flex justify-center items-center'>
        <img
          src='/frogger-grid.png'
          alt='FrogHack Characters'
          className='rounded-xl border border-green-400 w-full h-auto object-contain'
          loading='lazy'
        />
      </div>
    </section>
  );
};
