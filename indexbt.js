//bài 1 Quản lý sinh viên

/**
 * Mô hình ba khối
 *
 * INPUT:
 *
 *
 * PROCESS:
 *
 * OUTPUT:
 *
 */
//điều kiện để xét điểm ưu tiên khu vực
function calsAreaGrade(area) {
  if (area === "A") {
    return 2;
  }
  if (area === "B") {
    return 1;
  }
  if (area === "C") {
    return 0.5;
  }
  return 0;
}

//điều kiện để xét điểm ưu tiên đối tượng
function calcStudentTypeGrade(type) {
  if (type === "1") {
    return 2.5;
  }
  if (type === "2") {
    return 1.5;
  }
  if (type === "3") {
    return 1;
  }
  return 0;
}

function ex1() {
  //input
  var standardGrade = 23;
  var sub1 = 0;
  var sub2 = 8;
  var sub3 = 10;
  var area = "A";
  var studentType = "1";
  //output
  // var result = "";

  //process
  //tính điểm ưu tiên theo khu vực
  var areaGrade = calsAreaGrade(area);

  //tính điểm ưu tiên theo đối tượng
  var studentTypeGrade = calcStudentTypeGrade(studentType);

  var totalGrade = sub1 + sub2 + sub3 + areaGrade + studentTypeGrade; //tổng của 3 môn + điểm khu vực + điểm đối tượng
  //điều kiện 1 trong 3 môn lớn hơn 0
  if (totalGrade >= standardGrade && sub1 > 0 && sub2 > 0 && sub3 > 0) {
    // result = "Đậu";
    console.log("ĐẬU", totalGrade);
  } else {
    console.log("RỚT", totalGrade);
  }
}
ex1();

//bài 2 Tính tiền điện

/**
 * Mô hình ba khối
 *
 * INPUT:
 *
 * PROCESS:
 *
 * OUTPUT:
 *
 */

function ex2() {
  //input
  var name = "Long";
  var kw = 550;
  //output
  var bill = 0;
  //process
  if (kw <= 50) {
    bill = kw * 500;
  } else if (kw <= 100) {
    bill = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    bill = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 350) {
    bill = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    bill = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }
  console.log("số tiền là : ", bill);
}
ex2();

//bài 3 tính thuế thu nhập

function ex3() {
  //input
  var name = "Long";
  var totalincome = 100;
  var peopleDependent = 3;
  var taxincome = totalincome - 4 - peopleDependent * 1.6;
  //output
  var tax = 0;
  //process
  if (taxincome <= 60) {
    tax = taxincome * 0.05;
  } else if (taxincome <= 120) {
    tax = taxincome * 0.1;
  } else if (taxincome <= 210) {
    tax = taxincome * 0.15;
  } else if (taxincome <= 384) {
    tax = taxincome * 0.2;
  } else if (taxincome <= 624) {
    tax = taxincome * 0.25;
  } else if (taxincome <= 960) {
    tax = taxincome * 0.3;
  } else {
    tax = taxincome * 0.35;
  }
}
ex3();

//bài 4 : tính tiền cáp
function citizenpayment() {
  //input
  var invoiceFee = 4.5;
  var serviceFee = 20.5;
  var chanelFee = 7.5;
  var chanelNum = 10;

  var totalBill = chanelFee * chanelNum + invoiceFee + serviceFee;
  return totalBill;
}

function companypayment() {
  var invoiceFee = 15;
  var chanelFee = 50;
  var serviceFee = 75;
  var chanelNum = 20;
  var connest = 12;
  if (connest <= 10) {
    serviceFee = 75;
  } else {
    serviceFee = 75 + (connest - 10) * 5;
  }
  var totalBill = chanelFee * chanelNum + invoiceFee + serviceFee;
  return totalBill;
}

function ex4() {
  //input
  var checkFee = 0
  var cityzen = "A"
  var company = "B"
  if()
}
