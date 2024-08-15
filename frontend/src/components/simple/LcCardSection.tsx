import { LcDifficultyData } from "../types/LcTypes";
import { lcState } from "../../store/atoms";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";

const LcCardSection: React.FunctionComponent<LcDifficultyData> = (props) => {
    const setLcCount = useSetRecoilState(lcState);

    type lc = {
        solved : number,
        total : number
    }

    useEffect(() => {
        setLcCount((lcCount: lc) => ({
            ...lcCount,
            solved : lcCount.solved + props.solved,
            total : lcCount.total + props.total
        }));
    },[])
    
    return (
        <div>
            <p>{props.name} : {props.solved} / {props.total}</p>
        </div>
    )
}

export default LcCardSection;