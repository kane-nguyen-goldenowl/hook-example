let token = null;

const agent = {
    setToken: (_token) => {
        token = _token;
    },
    getToken: () => token
}

export default agent;
