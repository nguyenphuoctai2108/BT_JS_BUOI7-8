// Mảng chính chứa các số nguyên ban đầu
let mangSo = [];

// Hàm phụ trách in kết quả ra màn hình nhanh
function inKetQua(noiDung) {
  document.getElementById("ketQua").innerHTML = noiDung;
}

// Thêm số vào mảng chính
function themSo() {
  let inputEle = document.getElementById("inputNum");
  let giaTri = inputEle.value;

  if (giaTri === "") {
    alert("Bạn chưa nhập số nào cả!");
    return;
  }

  mangSo.push(parseInt(giaTri));
  document.getElementById("hienThiMang").innerText = mangSo.join(", ");
  inputEle.value = ""; // clear ô nhập dữ liệu
  inputEle.focus();
}

// Reset mảng về rỗng
function xoaMang() {
  mangSo = [];
  document.getElementById("hienThiMang").innerText = "";
  inKetQua("Mảng đã được làm trống.");
}

// CHỨC NĂNG 1: Tổng số dương
function tongSoDuong() {
  let tong = 0;
  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) {
      tong += mangSo[i];
    }
  }
  inKetQua("Tổng các số dương trong mảng là: " + tong);
}

// CHỨC NĂNG 2: Đếm số dương
function demSoDuong() {
  let count = 0;
  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) {
      count++;
    }
  }
  inKetQua("Số lượng số dương hiện có: " + count);
}

// CHỨC NĂNG 3: Tìm số nhỏ nhất
function timSoNhoNhat() {
  if (mangSo.length === 0) return inKetQua("Mảng đang rỗng, vui lòng thêm số!");
  let min = mangSo[0];
  for (let i = 1; i < mangSo.length; i++) {
    if (mangSo[i] < min) {
      min = mangSo[i];
    }
  }
  inKetQua("Số nhỏ nhất trong mảng là: " + min);
}

// CHỨC NĂNG 4: Tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
  let minDuong = null;
  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) {
      if (minDuong === null || mangSo[i] < minDuong) {
        minDuong = mangSo[i];
      }
    }
  }
  if (minDuong === null) {
    inKetQua("Không tìm thấy số dương nào trong mảng.");
  } else {
    inKetQua("Số dương nhỏ nhất trong mảng là: " + minDuong);
  }
}

// CHỨC NĂNG 5: Tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
  let soChanCuoi = -1;
  for (let i = mangSo.length - 1; i >= 0; i--) {
    if (mangSo[i] % 2 === 0) {
      soChanCuoi = mangSo[i];
      break;
    }
  }
  inKetQua("Số chẵn cuối cùng tìm thấy: " + soChanCuoi);
}

// CHỨC NĂNG 6: Đổi chỗ 2 vị trí
function doiCho() {
  let vt1 = parseInt(document.getElementById("viTri1").value);
  let vt2 = parseInt(document.getElementById("viTri2").value);

  if (
    isNaN(vt1) ||
    isNaN(vt2) ||
    vt1 < 0 ||
    vt1 >= mangSo.length ||
    vt2 < 0 ||
    vt2 >= mangSo.length
  ) {
    alert("Vị trí không hợp lệ! Vui lòng nhập từ 0 đến " + (mangSo.length - 1));
    return;
  }

  let temp = mangSo[vt1];
  mangSo[vt1] = mangSo[vt2];
  mangSo[vt2] = temp;

  document.getElementById("hienThiMang").innerText = mangSo.join(", ");
  inKetQua(`Đã đổi chỗ phần tử vị trí ${vt1} và ${vt2} thành công.`);
}

// CHỨC NĂNG 7: Sắp xếp tăng dần
function sapXepTangDan() {
  mangSo.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("hienThiMang").innerText = mangSo.join(", ");
  inKetQua("Mảng đã được sắp xếp tăng dần thành công.");
}

// CHỨC NĂNG 8: Tìm số nguyên tố đầu tiên
function kiemTraSNT(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function timSoNguyenToDauTien() {
  let sntDau = -1;
  for (let i = 0; i < mangSo.length; i++) {
    if (kiemTraSNT(mangSo[i])) {
      sntDau = mangSo[i];
      break;
    }
  }
  inKetQua("Số nguyên tố đầu tiên tìm được: " + sntDau);
}

// CHỨC NĂNG 9: Đếm số nguyên từ một mảng số thực mới nhập độc lập
function demSoNguyenTrongMangThuc() {
  let txt = document.getElementById("inputMangThuc").value;
  if (txt.trim() === "") {
    alert("Vui lòng nhập chuỗi các số thực cách nhau bởi dấu phẩy!");
    return;
  }
  let mangThuc = txt.split(",").map(Number);
  let count = 0;
  for (let i = 0; i < mangThuc.length; i++) {
    if (Number.isInteger(mangThuc[i])) {
      count++;
    }
  }
  inKetQua(
    `Mảng thực nhận vào: [${mangThuc.join(", ")}]. <br> Số lượng số nguyên nằm trong đó: <strong>${count}</strong>`,
  );
}

// CHỨC NĂNG 10: So sánh số âm và số dương
function soSanhAmDuong() {
  let duong = 0;
  let am = 0;
  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) duong++;
    else if (mangSo[i] < 0) am++;
  }

  if (duong > am) {
    inKetQua(`Số lượng số Dương nhiều hơn số Âm (${duong} > ${am}).`);
  } else if (am > duong) {
    inKetQua(`Số lượng số Âm nhiều hơn số Dương (${am} > ${duong}).`);
  } else {
    inKetQua(`Số lượng số Âm và số Dương bằng nhau (${am} = ${duong}).`);
  }
}
