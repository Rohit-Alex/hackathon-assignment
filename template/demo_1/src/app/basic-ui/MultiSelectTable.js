import { Table } from 'antd';
import React, { useState } from 'react';
import { columnsForMultiSelect } from '../../constants';

const data = [];

for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

const App = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        // selections: [
        //     Table.SELECTION_ALL,
        //     Table.SELECTION_INVERT,
        //     Table.SELECTION_NONE,
        //     {
        //         key: 'odd',
        //         text: 'Select Odd Row',
        //         onSelect: (changableRowKeys) => {
        //             let newSelectedRowKeys = [];
        //             newSelectedRowKeys = changableRowKeys.filter((_, index) => {
        //                 if (index % 2 !== 0) {
        //                     return false;
        //                 }

        //                 return true;
        //             });
        //             setSelectedRowKeys(newSelectedRowKeys);
        //         },
        //     },
        //     {
        //         key: 'even',
        //         text: 'Select Even Row',
        //         onSelect: (changableRowKeys) => {
        //             let newSelectedRowKeys = [];
        //             newSelectedRowKeys = changableRowKeys.filter((_, index) => {
        //                 if (index % 2 !== 0) {
        //                     return true;
        //                 }

        //                 return false;
        //             });
        //             setSelectedRowKeys(newSelectedRowKeys);
        //         },
        //     },
        // ],
    };
    return <Table rowSelection={rowSelection} columns={columnsForMultiSelect} dataSource={data} />;
};

export default App;