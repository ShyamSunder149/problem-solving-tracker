import { useSetRecoilState } from "recoil";
import { gfgState } from "../../store/atoms";
import { useEffect } from "react";

const GfgCardSection : React.FunctionComponent<any> = (content) => {

    const setGfgState = useSetRecoilState(gfgState);

    useEffect(() => {
        setGfgState((prevCount) => prevCount + parseInt(content[1]))
    }, [])

    return(
        <div>
            {content[0].charAt(0).toUpperCase() + content[0].slice(1).toLowerCase()} : {content[1]}
        </div>
    )
}

export default GfgCardSection;