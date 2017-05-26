import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';

export default class BottomCateMenu extends Component {

  render() {
    const list = [{
      'url': '/cong-nghe/',
      'label': 'Điện thoại - Máy tính'
    }, {
      'url': '/thoi-trang-nu/',
      'label': 'Thời trang nữ'
    }, {
      'url': '/thoi-trang-nam/',
      'label': 'Thời trang nam'
    }, {
      'url': '/giay-dep/',
      'label': 'Giày dép'
    }, {
      'url': '/tui-xach/',
      'label': 'Túi xách'
    }, {
      'url': '/me-va-be/',
      'label': 'Mẹ và bé'
    }, {
      'url': '/phu-kien-cong-nghe/',
      'label': 'Phụ kiện công nghệ'
    }, {
      'url': '/tivi-thiet-bi-giai-tri/',
      'label': 'Tivi - Thiết bị giải trí'
    }, {
      'url': '/may-anh-may-quay-phim/',
      'label': 'Máy ảnh - Máy quay phim'
    }, {
      'url': '/dien-may/',
      'label': 'Điện máy'
    }, {
      'url': '/do-dien-gia-dung/',
      'label': 'Đồ điện gia dụng'
    }, {
      'url': '/thiet-bi-y-te/',
      'label': 'Thiết bị y tế'
    }, {
      'url': '/dong-ho-phu-kien/',
      'label': 'Đồng hồ'
    }, {
      'url': '/phu-kien-thoi-trang/',
      'label': 'Phụ kiện thời trang'
    }, {
      'url': '/my-pham/',
      'label': 'Sức khỏe & Làm đẹp'
    }, {
      'url': '/do-dung-trong-nha/',
      'label': 'Nhà cửa'
    }, {
      'url': '/sach-van-phong-pham/',
      'label': 'Sách & Văn phòng phẩm'
    }, {
      'url': '/do-choi/',
      'label': 'Đồ chơi'
    }, {
      'url': '/khong-gian-song/',
      'label': 'Đời sống'
    }, {
      'url': '/o-to-xe-may/',
      'label': 'Ô tô - Xe máy'
    }, {
      'url': '/the-thao-giai-tri/',
      'label': 'Thể dục - Thể thao'
    }, {
      'url': '/thuc-pham/',
      'label': 'Bách Hóa Tổng Hợp'
    }, {
      'url': '/thuc-pham-tuoi-song/',
      'label': 'Thực Phẩm Tươi Sống'
    }, {
      'url': '/voucher-dich-vu/',
      'label': 'Voucher dịch vụ'
    }];
    return (
      <div className="container">
        <Nav bsStyle="pills" stacked>
          {list.map((cate) => (
            <NavItem href={cate.url}>{cate.label}</NavItem>
          ))}
        </Nav>
      </div>
    );
  }
}
