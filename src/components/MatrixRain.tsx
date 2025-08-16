export const MatrixRain = () => {
  return (
    <>
      {/* Binary Rain Effect */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className='absolute text-green-400 text-xs opacity-70 font-mono binary-rain'
            style={{
              left: `${(i % 10) * 10}%`,
              animation: 'binary-fall 5s linear infinite',
              animationDelay: `${i * 0.1}s`,
              top: '-20px',
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes binary-fall {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .binary-rain {
          position: absolute;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
};
