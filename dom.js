// Bài 1
const btnTinhLuongBai1 = document.getElementById("btnTinhLuongBai1");
btnTinhLuongBai1.onclick = function() {
    // Dom tới thẻ #luongNgay
    const luongNgay = document.getElementById("luongNgay").value;
    
    // Dom tới thẻ #soNgayLamViec
    const ngayLamviec = document.getElementById("ngayLamviec").value;

    let tongTien = 0;
    tongTien = luongNgay * ngayLamviec;

    // convert void
    const formatter = new Intl.NumberFormat("vi-VN", {style: "currency", currency: "VND"});

    const ketQua = formatter.format(tongTien);

    document.getElementById("luongNhan").value = ketQua
}

// Bai 2
const btnBai2 = document.getElementById("btnBai2");

btnBai2.onclick = function() {
    const sothu1 = Number(document.getElementById("sothu1").value);
    const sothu2 = Number(document.getElementById("sothu2").value);
    const sothu3 = Number(document.getElementById("sothu3").value);
    const sothu4 = Number(document.getElementById("sothu4").value);
    const sothu5 = Number(document.getElementById("sothu5").value);

    const average = (sothu1 + sothu2 + sothu3 + sothu4 + sothu5) / 5;

    document.getElementById("resultBai2").value = average;
};

// Bai 3
const btnBai3 = document.getElementById("btnBai3");

btnBai3.onclick = function() {
    const tienUSD = document.getElementById("inputUSD").value;
    const tienQuyDoi = tienUSD * 23500

    document.getElementById("resultBai3").value = tienQuyDoi + " VND";
}

// Bai 4
const btnBai4 = document.getElementById("btnBai4");

btnBai4.onclick = function() {
    const chieudai = Number(document.getElementById("inputChieuDai").value);
    const chieurong = Number(document.getElementById("inputChieuRong").value);

    const dientich = chieudai * chieurong
    const chuvi = (chieudai + chieurong) * 2

    document.getElementById("resultBai4DT").value = dientich;
    document.getElementById("resultBai4CV").value = chuvi;
}

// Bai 5
const btnBai5 = document.getElementById("btnBai5");

btnBai5.onclick = function() {
    const so = Number(document.getElementById("inputSo2Chuso").value);

    const so_hang_dv = so % 10;
    const so_hang_chuc = Math.floor(so / 10);

    const tong2kyso = so_hang_chuc + so_hang_dv

    document.getElementById("resultBai5").value = tong2kyso;
}