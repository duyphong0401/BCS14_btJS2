let mangSo = [];
function themSo() {
  let nhapSoN = document.getElementById("nhapSoN").value * 1;

  mangSo.push(nhapSoN);

  document.getElementById("hienThiN").innerHTML = mangSo;
}
document.getElementById("btnThemSo").onclick = themSo;

// Bài 1: Tổng số dương
function tongSoDuong() {
  let sum = 0;
  for (let index = 0; index < mangSo.length; index++) {
    if (mangSo[index] > 0) {
      sum += mangSo[index];
    }
  }
  document.getElementById("kqTongSoDuong").innerHTML = `Tổng số dương là: ${sum}`;
}
document.getElementById("btnTongSoDuong").onclick = tongSoDuong;

// Bài 2: Đếm số dương
function demSoDuong() {
  let dem = 0;
  for (let index = 0; index < mangSo.length; index++) {
    if (mangSo[index] > 0) {
      dem++;
    }
  }
  document.getElementById("kqdemSo").innerHTML = `Có ${dem} số dương trong mảng`;
}
document.getElementById("btnDemSo").onclick = demSoDuong;

// Bài 3: Tìm số nhỏ nhất
function timSoNhoNhat() {
  let min = mangSo[0];

  for (let index = 1; index < mangSo.length; index++) {
    if (mangSo[index] < min) {
      min = mangSo[index];
    }
  }
  document.getElementById("soNhoNhat").innerHTML = `Số nhỏ nhất là: ${min}`;
}

// Bài 4: Tìm số dương nhỏ nhất
function soDuongNhoNhat() {
  let minD = mangSo[0];

  for (let index = 1; index < mangSo.length; index++) {
    if (mangSo[index] < minD && mangSo[index] > 0) {
      minD = mangSo[index];
    }
  }
  document.getElementById("soDNhoNhat").innerHTML = `Số dương nhỏ nhất là: ${minD}`;
}

//Bài 5: Tìm số chẵn cuối cùng
//Duyệt ngược mảng
function timSoChanCuoiCung() {
  for (let index = mangSo.length - 1; index >= 0; index--) {
    if (mangSo[index] % 2 === 0) {
      document.getElementById("soChanCuoiCung").innerHTML = `Số chẵn cuối cùng là: ${mangSo[index]}`;
      return;
    }
  }
  document.getElementById("soChanCuoiCung").innerHTML = "Không có số chẵn: -1";
}

// Bài 6: Đổi chỗ
function doiCho() {
  let viTri1 = document.getElementById("viTri1").value * 1;
  let viTri2 = document.getElementById("viTri2").value * 1;
  let tam = mangSo[viTri1];

  mangSo[viTri1] = mangSo[viTri2];
  mangSo[viTri2] = tam;
  document.getElementById("kqDoiCho").innerHTML = `Mảng sau khi đổi: ${mangSo}`;
  
}

// Bài 7: Sắp xếp theo thứ tự tăng dần
function sapXep() {
  let sapXepTang = [];

  for (let index = 0; index < mangSo.length; index++) {
    sapXepTang.push(mangSo[index]);
  }
  sapXepTang.sort(function (a, b) {
    return a - b;
  });


  document.getElementById("kqSapXep").innerHTML = `Mảng sau khi sắp xếp là: ${sapXepTang}`;
}
// Bài 8: Tìm số nguyên đầu tiên
function kiemTraSoNguyen(n){
  //Number.isInteger(): kiểm tra xem có phải là số nguyên hay không
  if (n < 2 || !Number.isInteger(n)){
    return false;
  }
  //Math.sqrt lấy căn bậc 2
  for (let index = 2; index <= Math.sqrt(n); index++) {
    // cho n chia lấy dư
    if (n % index === 0){
      return false;
    }
  }
  return true;
}

function timSoNguyenToDauTien() {

  // Sử dụng -1 để chỉ ra không có số nguyên tố, số 0 sẽ bị nhầm vs trường hợp ko tìm thấy số
  let soNguyenDT = -1;

  for (let index = 0; index < mangSo.length; index++) {
    // parseInt(string, radix) ; radix: cơ số hệ đếm, 10 là chuyển theo hệ thập phân // nguyên hàm sẽ chuyển kiểu thành số nguyên
    let num = parseInt(mangSo[index], 10);

    if(kiemTraSoNguyen(num)){
      soNguyenDT = num;
      break;
    }
    
  }
  document.getElementById("kqTimSoNguyenDauTien").innerHTML = soNguyenDT === -1
    ? "Không có số nguyên tố nào trong mảng."
    : `Số nguyên tố đầu tiên là: ${soNguyenDT}`;

  return soNguyenDT;
}
document.getElementById("btnTimSoNguyenDauTien").onclick = timSoNguyenToDauTien;


// Bài 9: Đếm số nguyên
let mangSoThuc = [];
function themSoThuc() {

  let nhapSoThuc = document.getElementById("nhapSoThuc").value*1;
  mangSoThuc.push(nhapSoThuc);
  
  document.getElementById("kqThemSoThuc").innerHTML = mangSoThuc;

}

function demSoThuc() {
  let demT = 0;
  for (let index = 0; index < mangSoThuc.length; index++) {
    //Number.isInteger(): kiểm tra xem có phải là số nguyên hay không
    if (Number.isInteger(mangSoThuc[index])) { 
      demT++;
    }
  } 
  
  document.getElementById("kqDemSoThuc").innerHTML = `Số nguyên: ${demT}`;
}

//Bài 10: So Sánh số lượng số âm & số dương
function soSanh() {
  let soDuong = 0;
  let soAm = 0;

  for (let index = 0; index < mangSo.length; index++) {
    // parseFloat chuyển đổi thành số thực
    let so = parseFloat(mangSo[index]);
    
    if (so > 0){
      soDuong++
    }else if (so < 0){
      soAm++;
    }
    if (soDuong > soAm){
      document.getElementById("kqSoSanh").innerHTML = `Số dương > Số âm`;
      
    }else if (soDuong < soAm){
      document.getElementById("kqSoSanh").innerHTML = `Số dương < Số âm`;
    }else{
      document.getElementById("kqSoSanh").innerHTML = `Số dương = Số âm`;
    }
  }
}
