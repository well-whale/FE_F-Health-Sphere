import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';

const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item className="flex justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="#" className="text-blue-500">Forgot password?</a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Log in
            </Button>
          </Form.Item>

          <div className="text-center text-gray-500">or</div>

          <Form.Item>
            <Button className="w-full flex items-center justify-center border-gray-300" icon={<GoogleOutlined />}>
              Login with Google
            </Button>
          </Form.Item>

          <div className="text-center">
            Or <a href="#" className="text-blue-500">register now!</a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
