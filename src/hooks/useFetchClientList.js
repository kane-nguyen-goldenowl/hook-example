import { useEffect, useState } from "react";

import {
    getClientListApi
} from '../api/client';

function useFetchClientList() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await getClientListApi();
                setData(result);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return { isLoading, data };
}

export default useFetchClientList;