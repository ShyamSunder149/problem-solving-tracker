import React, { useEffect, useState } from "react";
import axios from "axios";
import CcCard from "../simple/CcCard";
import { cardClasses } from "../../utils/tailwindClasses";

const Cc = React.memo(({}) => {
    const [content, setContent] = useState<string>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "http://127.0.0.1:3000";
                const response = await axios.get(url + "/cc");
                setContent(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={`${cardClasses}`}>
            <h1>CodeChef - <a className="text-sky-600" href="https://www.codechef.com/users/shyam_5">Profile</a></h1>
            {content && <CcCard value={content} />}
        </div>
    );
});

export default Cc;
