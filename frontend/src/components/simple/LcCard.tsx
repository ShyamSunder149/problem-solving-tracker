import React, { useEffect } from "react";
import LcCardSection from "./LcCardSection";
import { LcData } from "../types/LcTypes";
import { useSetRecoilState } from "recoil";
import { countState } from "../../store/atoms";

const LcCard: React.FunctionComponent<LcData> = (content) => {
    const levels = ["easy", "medium", "hard"];
    const setCount = useSetRecoilState(countState);

    useEffect(() => {
        let tc = 0;
        levels.map((level : string) => {tc += content[level + "Solved"]})
        setCount(prevCount => prevCount + tc);
    }, []);

    return (
        <div>
            {levels.map((level: string, i: number) => {
                return (
                    <div>
                        <LcCardSection solved={content[level + "Solved"]} total={content["total" + level.charAt(0).toUpperCase() + level.slice(1)]} name={level.charAt(0).toUpperCase() + level.slice(1)} key={i} />
                    </div>
                )
            })}
        </div>
    );
}

export default LcCard;
