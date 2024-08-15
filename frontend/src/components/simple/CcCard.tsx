import React, { useEffect } from 'react';
import { useSetRecoilState } from "recoil";
import { countState } from '../../store/atoms';

type CcData = {
    value : string
}

const CcCard: React.FunctionComponent<CcData> = ({ value }) => {
    const setCount = useSetRecoilState(countState);

    useEffect(() => {
        setCount(prevCount => prevCount + Number(value));
    }, []);

    return (
        <div>
            <h3>CodeChef</h3>
            Total Problems Solved: {value}
        </div>
    );
}

export default CcCard;
