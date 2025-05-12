import { useState } from 'react';

function useToggle(initialValue) {
  const [visible, setVisible] = useState(initialValue);

  function toggle() {
    setVisible(prevVisible => !prevVisible);
  }

  return [visible, toggle];
}

export default useToggle;
