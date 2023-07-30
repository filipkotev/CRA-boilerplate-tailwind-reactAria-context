import React from 'react'
import {useButton} from 'react-aria';

const Button = (props) => {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} ref={ref} className='h-7 px-3 rounded-sm bg-lime-100'>
      {props.children}
    </button>
  );
}

export default Button;