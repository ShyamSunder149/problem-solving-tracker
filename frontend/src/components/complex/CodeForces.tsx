import { useState, useEffect } from "react";
import axios from "axios";
import CfCard from "../simple/CfCard";
import { cardClasses } from "../../utils/tailwindClasses";

function Cf(): React.ReactElement {

    const [content, setContent] = useState<CfData>();
    async function func() {
        const json = await axios.get("https://codeforces.com/api/user.status?handle=shyam_5&from=1&count=1000");
        setContent(json.data);
    }
    useEffect(() => {
        func()
    }, [])

    return (
        <div className={`${cardClasses}`}>
            <h1>CodeForces - <a className="text-sky-600" href="https://codeforces.com/profile/shyam_5">Profile</a></h1>
            {content && <CfCard {...content} />}
        </div>
    )
}

export default Cf;

