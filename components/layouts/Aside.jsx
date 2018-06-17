import { Row, Col } from 'antd';
import Link from 'next/link';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class Aside extends React.Component {
	state = {
	    collapsed: false,
	  };
  	onCollapse = (collapsed) => {
	    console.log(collapsed);
	    this.setState({ collapsed });
	  }
	render() {
		return (
		<Sider
	          style={{height: '100%'}}
			>
			<h1 className="logo">Coworly</h1>
			<Menu
	            mode="inline"
	            defaultSelectedKeys={['1']}
	            defaultOpenKeys={['sub1']}
	            style={{background: '#fff','height':'100%'}}
	          >
              <Menu.Item key="1"><Link href="/"><a>Dashboard</a></Link></Menu.Item>
              <Menu.Item key="2"><Link href="/customers"><a>Customers</a></Link></Menu.Item>
              <Menu.Item key="3"><Link href="/visitors"><a>Visitors</a></Link></Menu.Item>
	        </Menu>
        </Sider>
		)
	}
}

export default Aside;