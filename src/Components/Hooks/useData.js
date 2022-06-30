import { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(json => setData(json));
    }
        , []);
    return [data];
};

export default useData;