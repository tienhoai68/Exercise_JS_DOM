/**
 *  Tính Lương 
 * Mô hình 3 khối :
 * - Đầu vào :
 * + cho người dùng nhập vào số lương 1 ngày 
 * + cho người dùng nhập vào số ngày làm
 * - xử lý :
 * + lấy giá trị (value) của số lương 1 ngày
 * + lấy giá trị (value) của số ngày làm
 * + tính lương = lương 1 ngày * số ngày làm
 * - Kết quả :
 * + xuất ra màn hình kết quả
 *  */


var tinhLuong = document.getElementById('tinhLuong');
    tinhLuong.onclick = function () {
        var luongMotNgay = document.getElementById('luongMotNgay').value;
        var soNgayLam = document.getElementById('soNgayLam').value;
        var soLuong = luongMotNgay * soNgayLam;
        var result = 'Lương của nhân viên là : ' + soLuong.toLocaleString() + ' VNĐ';
        var ketQuaLuong = document.getElementById('ketQuaLuong');
        ketQuaLuong.innerHTML = result;
        ketQuaLuong.style.color = '#1d2c4c';
    }

/**
 * tính kết quả trung bình
 * Mô hình 3 khối : 
 * - Đầu vào :
 * + cho người dùng nhập vào 5 số thực
 * - xử lý :
 * + lấy giá trị (value) của 5 số thực
 * + tính tổng giá trị 5 số thực vừa lấy và chia cho 5
 * - kết quả : 
 * + xuất ra mà hình kết quả trung bình.
 * 
 */

var tinhTrungBinh = document.getElementById('tinhTrungBinh');
    tinhTrungBinh.onclick = function() {
        var soThuNhat = document.getElementById('soThuNhat').value*1;
        var soThuHai = document.getElementById('soThuHai').value*1;
        var soThuBa = document.getElementById('soThuBa').value*1;
        var soThuTu = document.getElementById('soThuTu').value*1;
        var soThuNam = document.getElementById('soThuNam').value*1;
        var tongNamSo = soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam;
        var trungBinh = tongNamSo / 5;
        var result = 'Kết Quả Trung Bình là : ' + trungBinh;
        var ketQuaTrungBinh = document.getElementById('ketQuaTrungBinh');
        ketQuaTrungBinh.innerHTML = result;
        ketQuaTrungBinh.style.color = '#1d2c4c';
    }

    /**
     * quy đổi tiền
     * Mô hình 3 khối
     * - đầu vào
     * + cho phép người dùng nhập vào số tiền USD
     * - xử lý 
     * + lấy ra giá trị (value) của người dùng
     * + 1 USD = 23500
     * + quy đổi tiền = giá trị của người dùng * 23500
     * - kết quả
     * + in ra số tiền quy đổi 
     */

var quyDoiUSD = document.getElementById('quyDoiUSD');
    quyDoiUSD.onclick = function() { 
        const soTienUSD = document.getElementById('soTienUSD').value;
        var motUsD = 23500;
        var quyDoi = soTienUSD * motUsD;
        var result = 'Kết quả quy đổi tiền là : ' + quyDoi.toLocaleString() +' VNĐ';
        var ketQuaChuyenUSD = document.getElementById('ketQuaChuyenUSD');
        ketQuaChuyenUSD.innerHTML = result; 
        ketQuaChuyenUSD.style.color = '#1d2c4c';       
    }

// tính diện tích và chu vi
/**
 * mô hình 3 khối
 * - đầu vào:
 * + nhập vào chiều dài và chiều rộng hình chữ nhật ;
 * - xử lý:
 * + lấy giá trị (value) chiều dài và chiều rộng người dùng nhập vào ;
 * + tạo biến chu vi : (chiều dài + chiều rộng) * 2;
 * + tạo biến diện tích: chiều dài * chiều dài;
 * - đầu ra: 
 * - in ra kết quả
 */

 var chuViDienTich = document.getElementById('chuViDienTich');
     chuViDienTich.onclick = function () {
        const chieuDai = document.getElementById('chieuDai').value *1;
        const chieuRong = document.getElementById('chieuRong').value *1;
        var chuVi = (chieuDai + chieuRong) * 2;
        var dienTich = chieuDai * chieuRong ;
        var result = 'Chu vi là : ' + chuVi + ' Diện tích là : ' + dienTich ;
        var ketQuaChuViDienTich = document.getElementById('ketQuaChuViDienTich');
        ketQuaChuViDienTich.innerHTML = result;
        ketQuaChuViDienTich.style.color = '#1d2c4c';       
     }

// tính tổng 2 ký số
/**
 * mô hình 3 khối
 * - input:
 * + người dùng nhập vào 2 số 
 * - xứ lý:
 * + lấy giá trị (value) từ số người dùng 
 * + tạo biến lấy số nguyên = số người dùng nhập \ 10;
 * + tạo biến lấy số dư = số người dùng nhập % 10;
 * + tạo biến tính tổng 2 số = số nguyên + số dư;
 * - kết quả:
 * + in ra màn hình kết quả
 * 
 */

var tongKySo = document.getElementById('tongKySo');
    tongKySo.onclick = function () {
        var kySo = document.getElementById('kySo').value *1;
        var soNguyen = Math.floor(kySo / 10);
        // math.floor: làm tròn số.
        var soDu = Math.floor(kySo % 10);
        var total = soNguyen + soDu ;
        var result = 'Tổng ký số là : ' + total ;
        var ketQuaKySo = document .getElementById('ketQuaKySo');
        ketQuaKySo.innerHTML = result;
        ketQuaKySo.style.color = '#1d2c4c';       
    }