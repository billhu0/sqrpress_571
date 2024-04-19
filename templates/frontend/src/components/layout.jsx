/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import '../App.css';
import { Layout, Menu } from 'antd';
import Home from './home';
import About from "./about";
import NotFoundPage from './notfoundpage'

const menuItems = [
  {
    key: 'main',
    label: 'Home',
    path: '/',
    element: <Home />
  },
  {
    key: 'about',
    label: 'About',
    path: '/about',
    element: <About />
  }
];

function MainLayout() {

  const [selectedKey, setSelectedKey] = useState('main');

  return <BrowserRouter>
    <Layout>
      <Layout.Header className="header">
        <Menu
          theme='light'
          mode='horizontal'
          selectedKeys={[selectedKey]}
        >
          <Menu.Item key='system' style={{ pointerEvents: 'none' }}>
            System_name  {/* Change this to your system name */}
          </Menu.Item>
          {menuItems.map(item => (
            <Menu.Item key={item.key}>
              <Link to={item.path} onClick={() => setSelectedKey(item.key)}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Layout.Header>

      <Routes>
        {menuItems.map(item => (
          <Route key={item.key} path={item.path} element={item.element} />
        ))}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </Layout>
  </BrowserRouter>
}


export default MainLayout;
