export const loginApi = (data) =>
    new Promise((resolve, reject) => {
        console.log("loginApi")
        if (!data.username || !data.password) {
            reject(new Error('Invalid'));
        }

        const user = { username: data.username };

        setTimeout(() => resolve(user), 1500);
    });