import requests from "@/request/requests.js";

const test = async () => {
    try {
        const res = await requests({
            url: '/hello'
        })
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export {
    test
}