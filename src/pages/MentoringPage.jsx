import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/navigationReducer";

function MentoringPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Klane Zurbano - Mentor";

    dispatch(setCurrentPage('Mentoring'));

  }, [dispatch, setCurrentPage]);

  return (
    <></>
  );
}

export default MentoringPage;