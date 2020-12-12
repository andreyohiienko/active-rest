import {
  FileImageOutlined,
  FileOutlined,
  FileTextFilled,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'

const { Sider } = Layout

interface Props {
  children: ReactNode
}

const menu = [
  { title: 'Media', href: '/media', icon: <FileImageOutlined /> },
  { title: 'Pages', href: '/pages', icon: <FileTextFilled /> },
  { title: 'Files', href: '/files', icon: <FileOutlined /> },
]

const Dashboard = ({ children }: Props) => {
  const { route } = useRouter()
  const [collapsed, setCollapsed] = useState(true)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[route]} mode="inline">
          {menu.map(({ title, href, icon }) => (
            <Menu.Item key={`/admin${href}`} icon={icon}>
              <Link href={`/admin${href}`}>{title}</Link>
            </Menu.Item>
          ))}
          {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout>{children}</Layout>
    </Layout>
  )
}

export { Dashboard }
