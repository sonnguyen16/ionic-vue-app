export enum UserRoles {
  QuanLy = 1,
  CuDan = 2,
}

export enum UserStatus {
  DangHoatDong = 0,
  ChuaKichHoat = 1,
}

export enum UserPhanLoai {
  ChuHo = 1,
  NguoiThue = 2,
  NguoiCoQuanHeVoiChuHo = 3,
}

export enum PhanAnhType {
  GopY = 1,
  KhieuNai = 2,
  HoiDap = 3,
  KyThuat = 4,
}

export enum PhanAnhStatus {
  ChuaXuLy = 1,
  DangXuLy = 2,
  DaXuLy = 3,
}

export enum ChuDeThongBao {
  Chung = 1,
  SinhHoat = 2,
  SuaChua = 3,
}

export enum FeeStatus {
  ChuaThanhToan = 0,
  DaThanhToan = 1,
}

export enum FeeType {
  KhongCoDinh = 1,
  DichVu = 2,
  QuanLy = 3,
}

export enum JobType {
  SuaChuaChinh = 1,
  ThongThuong = 2,
  SuCo = 3,
}

export enum JobLevel {
  XuLyGap = 1,
  BinhThuong = 2,
}

export enum JobStatus {
  ChuaXuLy = 1,
  DangXuLy = 2,
  DaXuLy = 3,
}

export const ChuDeThongBaoText: any = {
  [ChuDeThongBao.Chung]: "Chung",
  [ChuDeThongBao.SinhHoat]: "Sinh hoạt",
  [ChuDeThongBao.SuaChua]: "Sửa chữa",
};

export const UserStatusText: any = {
  [UserStatus.DangHoatDong]: "Đang hoạt động",
  [UserStatus.ChuaKichHoat]: "Chưa kích hoạt",
};

export const UserPhanLoaiText: any = {
    [UserPhanLoai.ChuHo]: "Chủ hộ",
    [UserPhanLoai.NguoiThue]: "Người thuê",
    [UserPhanLoai.NguoiCoQuanHeVoiChuHo]: "Người có quan hệ với chủ hộ",
};

export const UserStatusBadgeColor: any = {
  [UserStatus.DangHoatDong]: "success",
  [UserStatus.ChuaKichHoat]: "warning",
};

export const PhanAnhTypeText: any = {
  [PhanAnhType.GopY]: "Góp ý",
  [PhanAnhType.KhieuNai]: "Khiếu nại",
  [PhanAnhType.HoiDap]: "Hỏi đáp",
  [PhanAnhType.KyThuat]: "Kỹ thuật",
};

export const PhanAnhStatusText: any = {
  [PhanAnhStatus.ChuaXuLy]: "Chưa xử lý",
  [PhanAnhStatus.DangXuLy]: "Đang xử lý",
  [PhanAnhStatus.DaXuLy]: "Đã xử lý",
};

export const PhanAnhStatusBadgeColor: any = {
  [PhanAnhStatus.ChuaXuLy]: "warning",
  [PhanAnhStatus.DangXuLy]: "primary",
  [PhanAnhStatus.DaXuLy]: "success",
};

export const FeeStatusText: any = {
  [FeeStatus.ChuaThanhToan]: "Chưa thanh toán",
  [FeeStatus.DaThanhToan]: "Đã thanh toán",
};

export const FeeStatusBadgeColor: any = {
  [FeeStatus.ChuaThanhToan]: "danger",
  [FeeStatus.DaThanhToan]: "success",
};

export const JobTypeText: any = {
  [JobType.SuaChuaChinh]: "Sửa chữa chính",
  [JobType.ThongThuong]: "Thông thường",
  [JobType.SuCo]: "Sự cố",
};

export const JobLevelText: any = {
  [JobLevel.XuLyGap]: "Xử lý gấp",
  [JobLevel.BinhThuong]: "Bình thường",
};

export const JobStatusText: any = {
    [JobStatus.ChuaXuLy]: "Chưa xử lý",
    [JobStatus.DangXuLy]: "Đang xử lý",
    [JobStatus.DaXuLy]: "Đã xử lý",
}

export const JobLevelBadgeColor: any = {
  [JobLevel.XuLyGap]: "danger",
  [JobLevel.BinhThuong]: "primary",
};
