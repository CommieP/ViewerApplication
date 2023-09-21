import SetupEditor from "../../components/SetupEditor"
import ThreeDPreview from "../../components/ThreeDPreview"
import { useSelector } from "react-redux/es/hooks/useSelector";


const HomePage = () => {
    const ModelPosition = useSelector((state) => state.SetupReducer.value.modelPosition);
    console.log(ModelPosition);

    return (
        <>
            <div className="flex">
                <SetupEditor></SetupEditor>
                <ThreeDPreview ModelPosition={ModelPosition}></ThreeDPreview>
            </div>
        </>
    )
}

export default HomePage