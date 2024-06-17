export interface ThongBao {
    id: number,
    tieu_de: string,
    noi_dung: string,
    chu_de: string,
    file: string,
    xem_thong_bao: {
        user: {
            id:string
        }
    }[]
}

export interface PhanAnh {
    id: string,
    tieu_de: string,
    noi_dung: string,
    phan_loai: number,
    phan_hoi: PhanHoi[],
}

export interface DichVu {
    id: number,
    ten: string,
    gia: number,
    mo_ta: string,
    hinh_anh: string,
}

export interface DangKyDichVu {
    ngay_bat_dau: string,
    ngay_ket_thuc: string,
    tong_tien: number,
    trang_thai: number,
    phi_dich_vu: DichVu
}

export interface PhanHoi {
    nguoi_tao: string,
    noi_dung: string,
    created_at: string,
    hinh_anh: string,
}

export interface CongViec {
    id: number,
    tieu_de: string,
    noi_dung: string,
    thoi_han: string,
    tinh_trang: number,
    hinh_anh: string,
    phan_hoi: PhanHoi[],
}

export interface ToaNha {
    ten: string,
    can_ho: CanHo[]
}

export interface CanHo {
    id: number,
    so_nha: string,
    so_ghi: SoGhi[],
}

export interface SoGhi {
    ma_can_ho: number,
    chi_so_dien: number,
    chi_so_nuoc: number,
    thang: number,
    nam: number,
}