import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/navigationReducer";

function WebDevPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Klane Zurbano - Web Developer";

    dispatch(setCurrentPage('Web Dev'));

  }, [dispatch, setCurrentPage]);

  return (
    <></>
  );
}

export default WebDevPage;