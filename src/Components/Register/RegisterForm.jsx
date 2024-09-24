import React from 'react';
import './RegisterForm.css';
import logo from '../Assets/Images/logo.png';
import loginImg from '../Assets/Images/login.png';

const RegisterPage = () => {
    return (
      <>
        {/* Header */}
        <header>
          <div className="logo-container">
          <img className="header-img" src={logo} alt="Logo" />
            <span className="logo-text">BỆNH VIỆN UNIME</span>
          </div>
          <nav className="navigation">
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Đặt lịch khám</a></li>
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
            <h2>Đăng ký</h2>
            <div className="phone-input-container">
              {/* Optional: Country code input */}
              {/* 
              <div className="country-code">
                <img src="assets/img/flag.png" alt="Flag of Vietnam" className="flag" />
                <span>+84</span>
              </div> 
              */}
              <input type="text" placeholder="Nhập số điện thoại để tiếp tục" required />
            </div>
            <label>Mã OTP sẽ được gửi đến số điện thoại này</label>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <button>Gửi OTP</button>
            </div>
            <div className="links">
              <span>Đã có tài khoản?</span>
              <a href="#">Đăng nhập</a>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default RegisterPage;