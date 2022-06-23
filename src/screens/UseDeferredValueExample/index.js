import React, {
    useState,
    useDeferredValue
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
    const deferredProductList = useDeferredValue(productList);
    return (
        <ul>
            {
                deferredProductList.map(item => (
                    <li>
                        {item}
                    </li>
                ))
            }
        </ul>
    )
}

function UseDeferredValueExample() {
    const [searchKey, setSearchKey] = useState("");
    const filteredProductList = filterProductList(searchKey);

    const handleSearchKeyChange = (e) => {
        setSearchKey(e.target.value);
    }

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    UseDeferredValueExample
                </div>
            </div>
            <div>
                <input type='text' onChange={handleSearchKeyChange}></input>
                <ProductList productList={filteredProductList}></ProductList>
            </div>
        </React.Fragment>
    );
}

export default UseDeferredValueExample;