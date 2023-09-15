import { useDispatch, useSelector } from "react-redux";
import { ModelPositionSet } from "../store/reducers/modelPositionSlicer";
import NumberInput from "../blocks/NumberInput"
import AppButton from "../blocks/Button";


const SetupEditor = () => {

    const ModelPosition = useSelector((state) => state.ModelPosition);
    const dispatch = useDispatch();
    return (
        <>
            <NumberInput></NumberInput>
            <NumberInput></NumberInput>
            <NumberInput></NumberInput>

            <AppButton onClick={() => dispatch(ModelPositionSet("Test"))} title ="Test"></AppButton>
        </>
        
    )
}

export default SetupEditor