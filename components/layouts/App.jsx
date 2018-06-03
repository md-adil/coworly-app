import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:3001';
export default props => <div>
	<h1>This belongs to header</h1>
	{ props.children }
	<h1>This belongs to footer</h1>
</div>