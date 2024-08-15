import { useState, useEffect } from "react";
import axios from "axios";
import LcCard from "../simple/LcCard";
import { LcData } from "../types/LcTypes";
import { lcState } from "../../store/atoms";
import { useRecoilValue } from "recoil";
import { cardClasses } from "../../utils/tailwindClasses";

const Lc: React.FunctionComponent = ({}) => {

    const [content, setContent] = useState<LcData>();
    const lc = useRecoilValue(lcState);

    useEffect(() => {
        const funct = async () => {
            const json: any = await axios.get("https://leetcode-stats-api.herokuapp.com/nitro_99");
            setContent(json.data)
        }
        funct();
    }, [])

    return (
        <div className={`${cardClasses}`}>
            <h1>Leetcode - <a className="text-sky-600" href="https://leetcode.com/u/nitro_99/">Profile</a></h1>
            {content && <LcCard {...content} />}
            <p>Total Solved : {lc.solved/2} <br/> Total Available : {lc.total/2}</p>
        </div>
    );
}

export default Lc;
