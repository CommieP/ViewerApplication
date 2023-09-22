import SetupEditor from "../../components/SetupEditor"
import ThreeDPreview from "../../components/ThreeDPreview"
import { useSelector } from "react-redux/es/hooks/useSelector";


const HomePage = () => {
    const data = useSelector((state) => state.SetupReducer.value);

    return (
        <>
            <div className="flex">
                <SetupEditor></SetupEditor>
                <ThreeDPreview data={data}></ThreeDPreview>
            </div>
        </>
    )
}

export default HomePage