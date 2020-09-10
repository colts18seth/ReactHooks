import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useFlip = () => {
    const [state, setState] = useState(true);
    const flipCard = () => {
        setState(state => !state)
    }
    return [state, flipCard]
}

const useAxios = () => {
    const [state, setState] = useState([]);
    const callAxios = async (baseURL, name = "") => {
        const res = await axios.get(baseURL + name);
        setState([...state, { ...res.data, id: uuid() }])
    }
    return [state, callAxios]
}

export { useFlip, useAxios };