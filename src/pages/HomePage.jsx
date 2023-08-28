import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/navigationReducer";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage('Home'));
  }, [dispatch, setCurrentPage]);

  return (
    <></>
  );
}

export default HomePage;