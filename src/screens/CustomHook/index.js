import React from 'react';
import Nav from '../../components/Nav';

import useFetchClientList from '../../hooks/useFetchClientList';

function CustomHook() {
    console.log("render CustomHook")
    const { isLoading, data } = useFetchClientList();

    const renderClientList = () => {
        return data.map(item => (
            <li key={item.id}>{item.name}</li>
        ))
    }

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    CustomHook: Custom hook lấy dữ liệu khách hàng
                </div>
            </div>
            <div>
                <p>Danh sách khách hàng:</p>
                {isLoading
                    ? "Loading..."
                    : <ul>{renderClientList()}</ul>}
            </div>
        </React.Fragment>
    );
}

export default CustomHook;