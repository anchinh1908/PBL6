import React from 'react';
import './LoginForm.css';
import logo from '../Assets/Images/logo.png';
import loginImg from '../Assets/Images/login.png';

import { Link } from 'react-router-dom';

const LoginForm = () => {

    return (
        <div>
          {/* Header */}
          <header>
            <div className="logo-container">
            <img className="header-img" src={logo} alt="Logo" />
              <span className="logo-text">BỆNH VIỆN UNIME</span>
            </div>
            <nav className="navigation">
              <ul>
                <li><Link to href="/" className='nav_name'>Trang chủ</Link></li>
                <li><Link to  href="/introduce" className='nav_name'>Giới thiệu</Link></li>
                <li><Link to  href="/datlich" className='nav_name'>Đặt lịch khám</Link></li>
              </ul>
              <button className="btnLogin-popup">Đăng nhập</button>
              <button className="btnLogin-popup">Đăng kí</button> 
            </nav>
          </header>
    
          {/* Container */}
          <div className="container">
            <div className="left">
              <img className="login_img" src={loginImg} alt="Login" />
            </div>
            <div className="right">
              <h2>Đăng nhập</h2>
              <input type="text" placeholder="Số điện thoại" required />
              <input type="password" placeholder="Mật khẩu" required />
              <button>Đăng nhập</button>
              <div className="links">
                <a href="#">Tạo tài khoản</a>
                <a href="#">Quên mật khẩu?</a>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default LoginForm
