/** Bài tập 1
 * - input: nhập 3 số nguyên 
 * - process: 
 *  + Khai báo 3 biến chưa 3 số nguyên
 *  + xử lý if else
 * - input: thứ tự tăng dần 
 */
document.getElementById('sapXep').onclick = function () {
    var soThuNhat = document.getElementById('txtSoNguyen1').value*1;
    var soThuHai = document.getElementById('txtSoNguyen2').value*1;
    var soThuBa = document.getElementById('txtSoNguyen3').value*1;

    var content = '';

    if (soThuNhat<soThuHai && soThuNhat<soThuBa) {
        if (soThuHai<soThuBa) {
            content = `${soThuNhat} ${soThuHai} ${soThuBa}`;
        } else {
            content = `${soThuNhat}  ${soThuBa} ${soThuHai}`;
        }
    } else if ( soThuHai < soThuNhat && soThuHai < soThuBa) {
        if (soThuNhat < soThuBa) {
            content = `${soThuHai} ${soThuNhat}  ${soThuBa}`;
        } else {
            content = ` ${soThuHai} ${soThuBa}  ${soThuNhat}`;
        }
    } else {
        if (soThuNhat < soThuHai) {
            content = ` ${soThuBa} ${soThuNhat}  ${soThuHai}`;
        } else {
            content = ` ${soThuBa} ${soThuHai}  ${soThuNhat}`;
        }
    }
    document.getElementById('thuTuTangDan').innerHTML = content;
}


/** BÀi tập 2
 * - Input: người sử dụng máy
 * - Process: 
 *  + Khai báo biến nhập người sử dụng máy
 *  + xử lý switch case
 * - Output: lời chào 
 */

document.getElementById('summit').onclick =function () {
    var nguoiSuDung = document.getElementById('nguoiSuDung').value;
    content2 = '';

    switch (nguoiSuDung) {
        case 'B' :
            content2 = 'Xin chào Bố';
            break;
        case 'M' :
            content2 = 'Xin chào Mẹ';
            break;
        case 'A' : 
            content2 = 'Xin chào Anh trai';
            break;
        case 'E' : 
            content2 = 'Xin chào Em gái';
            break;
    }
    document.getElementById('showLoiChao').innerHTML = content2;
}

/** Bài tập 3
 * - Input: 3 số nguyên
 * - Process: 
 *  + Khai báo biến cho 3 số nguyên 
 *  + Xử lý if else với các số chia lấy dư cho 2
 * - Output: số lượng số chẵn và lẻ
 */

document.getElementById('tinhChanLe').onclick = function () {
    var so1 = document.getElementById('txtSo1').value*1;
    var so2 = document.getElementById('txtSo2').value*1;
    var so3 = document.getElementById('txtSo3').value*1;

    var countC = 0;
    var countL = 0;

    if (so1%2==0 && so2 % 2 == 0 && so3 % 2 == 0) {
        countC = 3;
        countL = 0;
    } else if ((so1%2==0 && so2%2==0 && so3%2!=0) || (so1%2==0 && so2%2!=0 && so3%2==0) || (so1%2!=0 && so2%2==0 && so3%2==0)) {
        countC = 2;
        countL = 1;
    } else if ((so1%2==0 && so2%2!=0 && so3%2!=0) || (so1%2!=0 && so2%2==0 && so3%2!=0) || (so1%2!=0 && so2%2!=0 && so3%2==0)) {
        countC = 1;
        countL = 2;
    } else {
        countC = 0;
        countL = 3;
    }
    document.getElementById('soLuong').innerHTML = `Số chắn là : ${countC} - Số lẻ là : ${countL}`; 
}

/** Bài tập 4
 * - Input: nhập 3 cạnh của tam giác
 * - Process: 
 *  + Khai báo 3 biến của cạnh tam giác
 *  + Xử lý if else với các cạnh 
 * - Output: loại tam giác
 */

document.getElementById('loaiTamGiac').onclick = function () {
    var a = document.getElementById('txtCanh1').value*1;
    var b = document.getElementById('txtCanh2').value*1;
    var c = document.getElementById('txtCanh3').value*1;
    
    content3 = '';

    if (a==b && a==c && b==c) {
        content3 = 'Tam giác đều';
    } else if ( (a==b && a!=c && b!=c) || (a==c && a!=b && c!=b) || (b==c && b!=a && c!=a)) {
        content3 = 'Tam giác cân';
    } else if ( (a*a + b*b == c*c) || (a*a + c*c == b*b) || (b*b + c*c == a*a)) {
        content3 = 'Tam giác vuông';
    } else {
        content3 = 'tam giác thường';
    }
    document.getElementById('showLoaiTamGiac').innerHTML = content3;
}

/** Bài tập 5
 * - Input: nhập ngày tháng năm
 * - Process:
 *  + Khai báo 3 biến ngày tháng năm
 *  + Xử lý if else cho ngày tháng năm
 * - Output: ngày trước và ngày sau
 */

document.getElementById('ketqua').onclick = function () {
    var ngay = document.getElementById('ngay').value*1;
    var thang = document.getElementById('thang').value*1;
    var nam = document.getElementById('nam').value*1;

    var contentTruoc = '';
    var contentSau = '' ;

    if (thang == 2) {
        if (nam%4==0) {
            if (ngay < 29 && ngay > 1) {
                contentSau = `${++ngay} - ${thang} - ${nam}`;
                contentTruoc = `${ngay -=2} - ${thang} - ${nam}`;
            } else if (ngay == 29) {
                
                contentTruoc = `${--ngay} - ${thang} - ${nam}`;
                contentSau = ` 1 - ${++thang} - ${nam}`;
            } else {
                contentSau = `${++ngay} - ${thang} - ${nam}`;
                contentTruoc = `31 - ${--thang} - ${nam}`;
            }
        } else {
            if (ngay < 28 && ngay > 1) {
                contentSau = `${++ngay} - ${thang} - ${nam}`;
                contentTruoc = `${ngay -=2} - ${thang} - ${nam}`;
            } else if (ngay == 28) {
                
                contentTruoc = `${--ngay} - ${thang} - ${nam}`;
                contentSau = ` 1 - ${++thang} - ${nam}`;
            } else {
                contentSau = `${++ngay} - ${thang} - ${nam}`;
                contentTruoc = `31 - ${--thang} - ${nam}`;
            }
        }
    } else if ( thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10  ) {
        if (ngay < 31 && ngay > 1) {
            contentSau = `${++ngay} - ${thang} - ${nam}`;
            contentTruoc = `${ngay -=2} - ${thang} - ${nam}`;
        } else if (ngay == 31 ) {
            
            contentTruoc = `${--ngay} - ${thang} - ${nam}`;
            contentSau = ` 1 - ${++thang} - ${nam}`;
        } else {
            contentSau = `${++ngay} - ${thang} - ${nam}`;
            contentTruoc = `31 - ${--thang} - ${nam}`;
        }
    } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        if (ngay < 30 && ngay > 1) {
            contentSau = `${++ngay} - ${thang} - ${nam}`;
            contentTruoc = `${ngay -=2} - ${thang} - ${nam}`;
        } else if ( ngay == 30) {
            
            contentTruoc = `${--ngay} - ${thang} - ${nam}`;
            contentSau = ` 1 - ${++thang} - ${nam}`;
        } else {
            contentSau = `${++ngay} - ${thang} - ${nam}`;
            contentTruoc = `31 - ${--thang} - ${nam}`;
        }
    } else if (thang == 1) {
        if (ngay < 31 && ngay > 1) {
            contentSau = `${++ngay} - ${thang} - ${nam}`;
            contentTruoc = `${ngay -=2} - ${thang} - ${nam}`;
        } else if (ngay == 31 ) {
            
            contentTruoc = `${--ngay} - ${thang} - ${nam}`;
            contentSau = ` 1 - ${++thang} - ${nam}`;
        } else {
            contentSau = `${++ngay} - ${thang} - ${nam}`;
            contentTruoc = `31 - 12 - ${--nam}`;
        }
    } else {
        if (ngay < 31 && ngay > 1) {
            contentSau = `${++ngay} - ${thang} - ${nam}`;
            contentTruoc = `${ngay -=2} - ${thang} - ${nam}`;
        } else if (ngay == 1 ) {
            contentSau = `${++ngay} - ${thang} - ${nam}`;
            contentTruoc = `31 - ${--thang} - ${--nam}`;
        } else {
            contentTruoc = `${--ngay} - ${thang} - ${nam}`;
            contentSau = `1 - 1 - ${++nam}`;
        }
    }
    document.getElementById('showNgayTruoc').innerHTML = contentTruoc;
    document.getElementById('showNgaySau').innerHTML = contentSau;
}

/** Bài tập 6
 * - Input: nhập tháng và năm
 * - Process:
 *  + khai báo 2 biến tháng và năm
 *  + Xử lý if else tháng và năm 
 * - Output: số ngày của tháng
 */

document.getElementById('ketQuaNgay').onclick = function () {
    var soThang = document.getElementById('txtThang').value*1;
    var soNam = document.getElementById('txtNam').value*1;

    var soNgay = 0;
    if (soThang== 2) {
        if (soNam%4==0) {
            soNgay = 29;
        } else {
            soNgay = 28;
        }
    } else if ( soThang == 1 || soThang == 3 || soThang == 5 || soThang == 7 || soThang == 8 || soThang == 10 || soThang == 12  ) {
        soNgay = 31;
    } else {
        soNgay = 30;
    }
    document.getElementById('showSoNgay').innerHTML = soNgay;
}




























