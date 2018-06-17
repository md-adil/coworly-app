import App from '../../components/layouts/App.jsx';
import { Card, Table } from 'antd';
import { Modal, Button } from 'antd';
// table headers
const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, 
{
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
},
{
  title: 'Check-in Time',
  dataIndex: 'chktime',
  key: 'chktime',
},
{
  title: 'Mobile',
  dataIndex: 'mobile',
  key: 'mobile',
}];

const dataSource = [{
  key: '1',
  id: '001',
  name: 'Sandeep Singh',
  email: 'hello@coworly.com',
  chktime: '30 mins ago',
  mobile: '+91 9899990277'
}, 
{
  key: '2',
  id: '002',
  name: 'Sandeep Singh',
  email: 'hello@coworly.com',
  chktime: '30 mins ago',
  mobile: '+91 9899990277'
},
{
  key: '3',
  id: '003',
  name: 'Sandeep Singh',
  email: 'hello@coworly.com',
  chktime: '30 mins ago',
  mobile: '+91 9899990277'
},
{
  key: '4',
  id: '004',
  name: 'Sandeep Singh',
  email: 'hello@coworly.com',
  chktime: '30 mins ago',
  mobile: '+91 9899990277'
}];

class Visitors extends React.Component {
  state = {
    visible: true
  }

  handleCancel = e => {
    this.setState({ visible: false })
  }

   handleOk = e => {
    this.setState({ visible: false })
  }

  render() {
      return (
        <App>
        <Card title="Visitors Management">
          <Table dataSource={dataSource} columns={columns} />
        </Card>
        <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
      </App>
      )
  }
}

export default Visitors;