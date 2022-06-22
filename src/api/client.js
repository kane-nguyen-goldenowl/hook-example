const clientList = [
    {
        id: 1,
        name: "Kathen"
    },
    {
        id: 2,
        name: "Bala"
    },
    {
        id: 3,
        name: "Chone"
    }
]

export const getClientListApi = () =>
    new Promise((resolve, reject) => {
        console.log("getClientListApi")

        setTimeout(() => resolve(clientList), 1000);
    });