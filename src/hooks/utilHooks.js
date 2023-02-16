import React from 'react';

export function useEscapeKey(setter) {
  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        setter([]);
      }
    });
    return () => {
      window.removeEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
          setter([]);
        }
      });
    };
  }, [setter]);
}
