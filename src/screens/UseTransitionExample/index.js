import React, {
    useState,
    useTransition
} from 'react';
import Nav from '../../components/Nav';

const generateProducts = (n) => {
    console.log('generateProducts');
    let productList = [];
    for (let index = 0; index < n; index++) {
        productList.push(`Product ${index}`);
    }
    return productList;
}

const initProductList = generateProducts(10000);

const filterProductList = (searchKey) => {
    if (!searchKey) return initProductList;
    return initProductList.filter(item => item.includes(searchKey));
}

const ProductList = ({ productList }) => {
    return (
        <ul>
            {
                productList.map(item => (
                    <li>
                        {item}
                    </li>
                ))
            }
        </ul>
    )
}

function UseTransitionExample() {
    const [searchKey, setSearchKey] = useState("");
    const [isPending, startTransition] = useTransition();

    const filteredProductList = filterProductList(searchKey);

    const handleSearchKeyChange = (e) => {
        startTransition(() => {
            setSearchKey(e.target.value);
        })

        // setSearchKey(e.target.value);
    }

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    UseTransitionExample: Sử dụng useTransition để giảm độ ưu tiên của việc render danh sách product trùng với search key
                </div>
            </div>
            <div>
                <div>
                    <label>Search </label>
                    <input type='text' onChange={handleSearchKeyChange}></input>
                </div>
                {
                    isPending &&
                    <div>Updating...</div>
                }
                <ProductList productList={filteredProductList}></ProductList>
            </div>
        </React.Fragment>
    );
}

export default UseTransitionExample;