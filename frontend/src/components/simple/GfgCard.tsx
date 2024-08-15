import React, { useEffect } from 'react';
import GfgCardSection from './GfgCardSection';
import { GfgData } from '../types/GfgTypes';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { countState, gfgState } from '../../store/atoms';

const GfgCard: React.FC<GfgData> = (content) => {
    let levels: Array<Array<String>> = [];
    for (let level in content) {
        levels.push(content[level])
    }
    const setCount = useSetRecoilState(countState);
    const gfgValue = useRecoilValue(gfgState);

    useEffect(() => {
        let tc : number = 0
        for(let level in content) {
            tc += parseInt(content[level][1])
        }
        setCount((prevCount) => prevCount + tc);
    }, []); 

    return (
        <div>
            {levels.map((level: Array<String>, index : number) => <GfgCardSection key={index} {...level} />)} 
            <p>Total Solved : {gfgValue/2} </p>
        </div>
    )
}

export default GfgCard;
