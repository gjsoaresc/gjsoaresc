'use client'

import anime from 'animejs'

export const DotGrid = () => {
  const GRID_WIDTH = 25
  const GRID_HEIGHT = 20

  const dots = []

  const handleDotClick = (e: any) => {
    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 0.7, easing: 'easeOutSine', duration: 250 },
        { value: 0.35, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    })
  }

  let index = 0

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="p-2 cursor-crosshair transition-all duration-300 rounded-lg hover:bg-white/10 group"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point w-2 h-2 rounded-[50%] bg-gradient-to-b from-opaque to-white opacity-30 transition-colors duration-300 group-hover:to-brand group-hover:opacity-100"
            data-index={index}
          />
        </div>
      )
      index++
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="absolute grid h-[620px] top-4 bottom-4 right-14 z-0"
    >
      {dots.map((dot) => dot)}
    </div>
  )
}
