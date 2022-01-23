import { useState, useEffect, useRef } from "react";
import {RiDeleteBin6Line} from 'react-icons/ri';
import axios from "axios";

const WishListTab = ({ activate, name, id, setTodisplay, setListDeleted, setRefreshList }) => {
  const [active, setActive] = useState(false);
  const tabRef = useRef();

  const handleDeleteList = () => {
    id && axios.delete(
      `https://manomano-hackathon.herokuapp.com/api/lists/${id}`,
      {
        method: "DELETE",
        withCredentials: false,
      }
    );
    setRefreshList(false);
    setListDeleted(true);
  };

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (active && tabRef.current && !tabRef.current.contains(e.target)) {
        setActive(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [active])

  useEffect(() => {
    active ? setActive(true) : setActive(false);
  }, [active]);

  return (
    <div className="wishlisttab">
      <div
        className={active ? "wishlisttab__tab active" : "wishlisttab__tab"}
        ref={tabRef}
        onClick={() => {
          setActive(!active);
          setTodisplay(id);
        }}
      >
        {name}
      </div>
      <div className="wishlisttab__trash-div"  onClick={() => {setRefreshList(true); handleDeleteList()}}>
        <RiDeleteBin6Line className='wishlisttab__trash-div__icon' title="Delete this list" />
      </div>
    </div>
  );
};

export default WishListTab;
