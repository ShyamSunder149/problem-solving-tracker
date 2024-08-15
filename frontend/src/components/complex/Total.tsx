import { countState } from "../../store/atoms";
import { useRecoilValue } from "recoil";

const total = () => {

    let count = useRecoilValue(countState);
 
    return(
        <h3 className="text-center">
            Total Problems Solved : {count/2} 
        </h3>
    )
}

export default total;
