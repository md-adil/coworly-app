import Head from 'next/head'
import axios from 'axios';
import './app.css'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default props => <React.Fragment>
	<Head>
		<link rel="stylesheet" href="/_next/static/style.css" />
	</Head>
	<Layout>
	    <Content>{ props.children }</Content>
    </Layout>
</React.Fragment>