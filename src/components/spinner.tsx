import React from 'react';

export const Spinner = ({ style, color }: { style?: React.CSSProperties; color?: `#${string}` }) => {
  return (
    <div
      style={style}
      className={`border-t-transparent border-solid animate-spin rounded-full border-[${
        color ? color : '#fff'
      }] border-2 h-4 w-4`}
    ></div>
  );
};
