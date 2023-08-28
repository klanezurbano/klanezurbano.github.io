import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/navigationReducer";

function MusicPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Klane Zurbano - Musician";

    dispatch(setCurrentPage('Music'));

  }, [dispatch, setCurrentPage]);

  return (
    <></>
  );
}

export default MusicPage;