import React, {
    memo,
    useCallback,
    useState
} from 'react';

import './index.scss';
import genId from '../../utils/genId';

const Item = memo(({ id, value, onChange }) => {
    console.log("render item", {
        id, value
    })
    return (
        <div className='item'>
            <div>
                Item
            </div>
            <input
                onChange={e => onChange(id, e.target.value)}
                value={value} />
        </div>
    )
});

function ArrayRerender() {
    console.log("render ArrayRerender");
    const [items, setItems] = useState([
        {
            id: genId(),
            value: '1'
        },
        {
            id: genId(),
            value: '2'
        },
        {
            id: genId(),
            value: '3'
        }
    ]);

    const onChange = useCallback((id, value) => {
        setItems(prevItems => prevItems.map((item, index) => {
            return item.id !== id ? item : {
                id: id,
                value: value
            }
        }))
    }, [])

    const handleAddItem = () => {
        setItems(prevItems => {
            return [
                ...prevItems,
                {
                    id: genId(),
                    value: ''
                }
            ]
        })
    }

    const handleDeleteFirst = () => {
        setItems(prevItems => {
            prevItems.shift();
            return [
                ...prevItems
            ];
        })
    }

    const renderItemList = () => {
        return items.map((item, index) => (
            <Item
                key={item.id}
                id={item.id}
                value={item.value}
                onChange={onChange}
            />
        ));
    }

    return (
        <React.Fragment>
            <div className='container'>
                <div className='header'>
                    <div className='header-title'>
                        ArrayRerender
                    </div>
                </div>
                <div className='body'>
                    <div className='item-list'>
                        {renderItemList()}
                    </div>
                    <div className='item-list-action'>
                        <button onClick={handleAddItem}>Add item</button>
                        <button onClick={handleDeleteFirst}>Delete first</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ArrayRerender;