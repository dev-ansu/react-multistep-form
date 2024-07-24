import "./list-steps.css";

const ListSteps = ({steps, actualStep, handleSetStepByClick})=>{
    return (
        <div id="list-step" className="d-flex justify-content-between align-items-center flex-column">
            {steps.map((el, i)=>(
                <div key={i} onClick={()=> handleSetStepByClick(i)} className="d-flex flex-row-reverse gap-1 align-items-center justiy-content-center">
                    <div className="d-flex gap-2 justify-content-center step-info  align-items-center">
                        <div className={`  circle text-dark ${actualStep == i ? "active":"" }`}>{el.icon}</div>
                        <h2 className={` fs-5 text-dark`}> {el.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListSteps;