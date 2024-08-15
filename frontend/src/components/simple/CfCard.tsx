import { useSetRecoilState } from "recoil";
import { countState } from "../../store/atoms";
import { useEffect } from "react";

interface Result {
    verdict: string;
}

interface CfData {
    result: Result[];
}

const CfCard = ({ result }: CfData) => {
    const setCount = useSetRecoilState(countState);
    const cont = result.filter((el: Result) => el.verdict === "OK");

    useEffect(() => {
            setCount(prevCount => prevCount + cont.length);
    }, []);

    return (
        <div>
            Total Problems Solved : {cont.length}
        </div>
    );
}

export default CfCard;
