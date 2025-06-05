class Staff {
  constructor(username, name, email, password, day, basicSalary, job, time) {
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
    this.day = day;
    this.basicSalary = basicSalary;
    this.job = job;
    this.time = time;
    this.sumSalary = 0;
    this.type = "";
  }

  calcSumSalary() {
    switch (this.job) {
      case "Sếp":
        this.sumSalary = new Intl.NumberFormat("vi-VN", { style: 'currency', currency: 'VND' }).format(this.basicSalary * 3);
        break;
      case "Trưởng phòng":
        this.sumSalary = new Intl.NumberFormat("vi-VN", { style: 'currency', currency: 'VND' }).format(this.basicSalary * 2);
        break;
      case "Nhân viên":
        this.sumSalary = new Intl.NumberFormat("vi-VN", { style: 'currency', currency: 'VND' }).format(this.basicSalary * 1)
        break;

      default:
        this.sumSalary = 0;
        break;
    }
  }

  calcTypeStaff() {
    let val = Number(this.time);
    switch (true) {
      case val >= 192:
        this.type = "Xuất sắc";
        break;
      case val >= 176:
        this.type = "Giỏi";
        break;
      case val >= 160:
        this.type = "Khá";
        break;
      default:
        this.type = "Trung bình";
        break;
    }
  }
}

export default Staff;
