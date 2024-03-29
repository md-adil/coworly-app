import App from '../../components/layouts/App.jsx';
import { Card, Table } from 'antd';

const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];

export default props => (
	<App>
		<Card title="Customers">
			<Table dataSource={dataSource} columns={columns} />
		</Card>
	</App>
)