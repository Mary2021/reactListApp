import './App.css';
import React, { useState } from 'react';
import ListItem from './components/ListItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import { Input, Table, Space, Button } from 'antd'; 


export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState();
  const [count, setCount] = useState();
  const [data, setData] = useState([]);

  const notify = () => toast("Kustutamine õnnestus!");

  function Example() {
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    toast.promise(
      resolveAfter3Sec,
      {
        position: toast.POSITION.TOP_CENTER,
        pending: 'Promise is pending',
        success: 'Promise resolved 👌',
        error: 'Promise rejected 🤯'
      }
    )
  }
  
  //setListInput
  function handleClick() {
    setCount(count +1);
    let newList = [...list, input];
    setList(newList);
    setData(newList);
    
    console.log(count);
    console.log(input);
    console.log(list);
    console.log(data);
    
  }

  function handleDeleteClick(index) {
    const copy = [...list];
    copy.splice(index, 1); // kustutab 1 elemendi index positsioonilt
    setList(copy);
    setData(copy);
    Example();
    notify();
  }

  const columns = [
    {
      title:'Name',
      dataIndex: data.index,
      key: 'index',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, record, index) => (
        <Space size="middle">
          <Button
            onClick={() => handleDeleteClick (index)}

            type="primary" 
            style={{ background: "#e6fffb", borderColor: "#08979c", color: "#08979c" }}
            >
              Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
  <div className="App">
    <div className="App-body">
      <div className='inputDiv'>
      <Space direction="horisontal">
        <Input 
          type="text" 
          value={input} 
          onChange={(event) => setInput(event.target.value)}>
        </Input>
        <Button 
          type="primary" 
          style={{ background: "#e6fffb", borderColor: "#08979c", color: "#08979c" }} 
          onClick={handleClick}>
            Add
        </Button>
        </Space>
      </div>
      <Table rowKey={count} columns={columns} dataSource={data} />
      <div>
      <ToastContainer autoClose={1000} />
    </div>
      {/*map funktsioon annab esimese argumendina listi elemendi, teise argumendina selle järjekorra numbri*/}
      <ul>{list.map((el, i) => <ListItem 
      index={i} 
      className={'qwe'} 
      onDelete={handleDeleteClick}><b>{el}</b>
      </ListItem>)}</ul>
    </div>
  </div>
);
}
