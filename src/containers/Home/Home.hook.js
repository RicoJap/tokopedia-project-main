import { useDispatch, useSelector } from "react-redux";
import { setSelectedBottomAction } from "../../actions/actions";


const useHome = () => {
  const dispatch = useDispatch();

  const selectedBottomAction = useSelector((state) => {
    return state.PokemonReducer.selectedBottomAction;
  });

  const onChangeBottomNavigationAction = (_, newAction) => {
    dispatch(setSelectedBottomAction(newAction))
  }

  return {
    onChangeBottomNavigationAction,
    selectedBottomAction
  }
}

export default useHome;