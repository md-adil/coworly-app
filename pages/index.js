import App from '../components/layouts/App.jsx';
import { Card } from 'antd';
import axios from 'axios';

export default class Index extends React.Component {
	state = { users: [] }

	componentWillMount() {
		axios.get('/users')
			.then(({ data }) => {
				this.setState({ users: data })
			})
	}

	render() {
		return <App>
			<Card title="Dashboard">
          		<p>You're logged in.</p>
        	</Card>
		</App>
	}

}