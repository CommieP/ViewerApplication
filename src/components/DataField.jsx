import DataTitle from "../blocks/Title"
import DataLabel from "../blocks/Label"
import NumberInput from "../blocks/NumberInput"

const DataField = ({ title, data, field, handleChange }) => {
    let currentField = data[field];
    let dataKeys = Object.keys(currentField);
    let dataPoints = Object.entries(currentField)
    return (
        <>
            <DataTitle Text={title}></DataTitle>
            <div className="flex">
                {dataKeys.map((item, index) => (
                    <div className="flex" key={index}>
                        <DataLabel Text={item + " : "} ></DataLabel>
                        <NumberInput id={item} value={dataPoints[index][1]} key={index} onChange={(value) => handleChange({ item }, parseFloat(value), field)} />
                    </div>
                ))}

            </div>
        </>

    )
}


export default DataField;
