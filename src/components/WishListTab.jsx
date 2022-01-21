import { useState, useEffect } from "react";

const WishListTab = ({ activate, name, id, setTodisplay }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    active ? setActive(true) : setActive(false);
  }, [active]);

  return (
    <div
      className={active ? "wishlisttab active" : "wishlisttab"}
      onClick={() => {
        setActive(!active);
        setTodisplay(id);
      }}
    >
      {name}
    </div>
  );
};

export default WishListTab;
