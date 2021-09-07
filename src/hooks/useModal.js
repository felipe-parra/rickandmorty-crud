import { useState } from "react";

const useModal = () => {
  const [show, setshow] = useState(false);

  function toggle() {
    setshow(!show);
  }

  return {
    show,
    toggle,
  };
};

export default useModal;
