# Bemaint - Hệ Thống Quản Lý Nhà Máy Thông Minh

## Giới thiệu
Bemaint là một hệ thống quản lý nhà máy thông minh được xây dựng trên nền tảng NextJS, giúp doanh nghiệp quản lý hiệu quả các thiết bị, phân xưởng, quy trình bảo trì và vận hành nhà máy.

## Tính năng chính

### 1. Quản lý User và Phân quyền
- Phân quyền Admin và User thường
- Quản lý thông tin user: tên đơn vị, địa chỉ, số điện thoại, email
- Thống kê số lượng user và thiết bị giám sát
- Quản lý phân xưởng và thiết bị cho từng user

### 2. Quản lý Thư viện Máy
- Thêm, sửa, xóa máy trong thư viện
- Quản lý thông tin chi tiết máy:
  - Thông tin cơ bản (mã máy, model, serial, hãng sản xuất)
  - Cấu tạo máy (bộ phận, thông số kỹ thuật, số lượng)
  - Thông số vận hành (điện áp, dòng điện, nhiệt độ)
  - Kế hoạch bảo trì

### 3. Quản lý Phân Xưởng
- Tạo và quản lý danh sách phân xưởng
- Thêm máy từ thư viện vào phân xưởng
- Theo dõi trạng thái hoạt động của máy móc
- Giám sát dữ liệu thời gian thực (nhiệt độ, độ ẩm)

### 4. Quản lý Bảo trì và Sửa chữa
- Lập kế hoạch bảo trì định kỳ
- Quản lý đơn vị bảo trì và sửa chữa:
  - Thông tin đơn vị
  - Danh sách nhân viên
  - Lĩnh vực chuyên môn
  - Hồ sơ năng lực
- Theo dõi quá trình bảo trì và sửa chữa
- Quản lý vật tư sử dụng trong bảo trì
- Hệ thống đấu thầu bảo trì, sửa chữa

### 5. Quản lý Kho Vật Tư
- Quản lý danh sách vật tư
- Theo dõi nhập xuất kho
- Lịch sử sử dụng vật tư
- Phân loại mục đích sử dụng (bảo trì, sửa chữa, khác)

### 6. Dashboard và Báo cáo
- Hiển thị thống kê tổng quan
- Theo dõi trạng thái thiết bị real-time
- Cảnh báo và thông báo tự động
- Báo cáo lịch sử bảo trì, sửa chữa

## Yêu cầu hệ thống

### Công nghệ sử dụng
- NextJS 14+
- Node.js 18+
- MongoDB
- Material UI
- Socket.IO (cho dữ liệu real-time)

### Cài đặt môi trường phát triển
1. Clone repository
```bash
git clone <repository-url>
cd bemaint
```

2. Cài đặt dependencies
```bash
npm install
```

3. Tạo file môi trường
```bash
cp .env.example .env
```

4. Khởi động development server
```bash
npm run dev
```

## Cấu trúc thư mục
```
bemaint/
├── src/
│   ├── app/              # App router của NextJS
│   ├── components/       # React components
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Thư viện và utilities
│   ├── models/          # MongoDB models
│   └── services/        # Business logic services
├── public/              # Static files
└── package.json
```

## API Documentation
API documentation được tạo tự động và có thể truy cập tại `/api/docs` sau khi khởi động server.

## Contributing
1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## License
[MIT License](LICENSE)

## Liên hệ
- Email: support@bemaint.com
- Website: https://bemaint.com