/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import PropTypes from 'prop-types';

const config = { mass: 4, tension: 1500, friction: 100 };

export default function TrailWord({ text }) {
  const word = text.replace(/\s+/g, '').split('');
  const [toggle, setToggle] = useState(true);
  const trail = useTrail(word.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 30 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    <div
      onClick={() => setToggle(!toggle)}
      role="button"
      tabIndex={0}
      // eslint-disable-next-line no-console
      onKeyPress={console.log('We need to get hooks-ahoy')}
    >
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          key={word[index]}
          className="trails-text"
          style={{
            ...rest,
            transform: x.interpolate(newx => `translate3d(0,${newx}px,0)`)
          }}
        >
          <animated.div style={{ height }}>{word[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
}

TrailWord.propTypes = {
  text: PropTypes.string
};
