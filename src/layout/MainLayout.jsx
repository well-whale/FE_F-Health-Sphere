import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Layout, Menu, Avatar, Dropdown, Space, message } from "antd";
import { DesktopOutlined, FileOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
      handleLogout();
    } else {
      navigate(`/${key}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear authentication token
    message.success("Logged out successfully!");
    navigate("/login");
  };

  const userMenuItems = [
    { key: "profile", label: "Profile" },
    { key: "settings", label: "Settings" },
    { key: "logout", label: "Logout", onClick: handleLogout },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ backgroundColor: "#34495e", paddingTop: "10px" }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: collapsed ? "14px" : "20px",
            fontWeight: "bold",
            padding: "12px 0",
          }}
        >
          {collapsed ? "Logo" : "My Dashboard"}
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          style={{ backgroundColor: "#2c3e50" }}
          onClick={handleMenuClick}
          items={[
            { key: "dashboard", icon: <DesktopOutlined />, label: "Dashboard" },
            { key: "patient", icon: <FileOutlined />, label: "Patient" },
            { key: "band", icon: <FileOutlined />, label: "Band" },
          ]}
        />
      </Sider>

      <Layout>
        {/* Header */}
        <Header
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            borderBottom: "1px solid #eee",
          }}
        >
          <h1 className="m-0 text-4xl">Welcome to Dashboard</h1>

          <Dropdown menu={{ items: userMenuItems }} trigger={["click"]}>
            <Space>
              <Avatar
                src="https://i.pravatar.cc/40"
                size={40}
                style={{ cursor: "pointer", backgroundColor: "#3498db" }}
              />
            </Space>
          </Dropdown>
        </Header>

        {/* Dynamic Content */}
        <Content
          style={{
            margin: "20px",
            background: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1500px",
              backgroundColor: "#fff",
              padding: "24px",
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              color: "#333",
            }}
          >
            <Outlet />
          </div>
        </Content>

        {/* Footer */}
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#fff",
            color: "#7f8c8d",
            padding: "10px",
            borderTop: "1px solid #eee",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
