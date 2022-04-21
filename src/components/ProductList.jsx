import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {

  console.log( 'products',products )

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  // const columns = [{
  //   title: 'Name',
  //   dataIndex: 'name',
  // }, {
  //   title: 'Actions',
  //   render: (text, record) => {
  //     return (
  //       <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
  //         <Button>Delete</Button>
  //       </Popconfirm>
  //     );
  //   },
  // }];
  return (
    <div className="">
      {/* <Table
        dataSource={products}
        columns={columns}
      /> */}
        <Table dataSource={dataSource} columns={columns} />
      <Button>Default Button</Button>
    </div>
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;