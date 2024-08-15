import GfgCard from "../simple/GfgCard";
import { GfgData } from "../types/GfgTypes";
import { useEffect, useState } from "react"
import axios from "axios";
import { cardClasses } from "../../utils/tailwindClasses";

const Gfg = () => {

    const [content, setContent] =  useState<GfgData>();

    useEffect(() => {
        async function getData() {
            const url = "http://127.0.0.1:3000"
            const fetchData = await axios.get(url + "/gfg")
            setContent(fetchData.data);
        }
        getData();
    },[])

    return (
        <div className={`${cardClasses}`}>
            <h1>Geeks for Geeks - <a className="text-sky-600" href="https://www.geeksforgeeks.org/user/nitrocodes/">Profile</a></h1>
            {content && <GfgCard {...content} />}
        </div>
    )
}

export default Gfg;

