import App from '../components/layouts/App.jsx';
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

		</App>
	}

}