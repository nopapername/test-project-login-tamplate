import classnames from 'classnames';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from './index.less';

export default function LoginPage() {

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles["login__container__content"]}>
          <h1><i className={classnames("iconfont", "icon-map")}></i>地图</h1>
          <Form
            className={styles["login__form"]}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入帐号！' }]}
            >
              <Input bordered={false} className={styles["login__form-input"]} prefix={<UserOutlined className="user-icon" />} placeholder="帐号" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码！' }]}
            >
              <Input
                className={styles["login__form-input"]}
                bordered={false}
                prefix={<LockOutlined className="password-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item className={styles["login__form-remember"]}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className={styles["login__form-remember__checkbox"]}>记住密码</Checkbox>
              </Form.Item>

              <a className={styles["login__form-remember__forgot"]} href="/login">
                忘记密码?
              </a>
            </Form.Item>

            <Form.Item>
              <Button shape="round" block htmlType="submit" className={styles["login__form-button"]} size="large">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles["login__container__banner"]}><img src={require('../../assets/img/login_banner.png')} alt='login-banner' /></div>
      </div>
    </div>
  );
}
