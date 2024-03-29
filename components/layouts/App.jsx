import Head from 'next/head'
import axios from 'axios';
import './app.css'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import Aside from './Aside.jsx';

axios.defaults.baseURL = 'https://localhost:3001';
export default props => <React.Fragment>
	<Head>
		<link rel="stylesheet" href="/_next/static/style.css" />
	</Head>
	<Layout>
		<Aside />
		  <Layout>
		    <Content>{ props.children }</Content>
		  </Layout>
    </Layout>
</React.Fragment>