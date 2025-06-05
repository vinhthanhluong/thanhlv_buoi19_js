import Staff from "../js/controllers/staff.js";
import StaffList from "../js/controllers/staff-list.js";
import Validation from "../js/controllers/validation.js";

// const asd = new Staff();
export const getEle = (id) => document.getElementById(id);

const staffList = new StaffList();
const validation = new Validation();

const setLocal = (arr) => {
  localStorage.setItem("STAFF_LIST", JSON.stringify(arr));
};

const getLocal = () => {
  return JSON.parse(localStorage.getItem("STAFF_LIST")) || [];
};

const getValue = () => {
  const userName = getEle("tknv").value;
  const name = getEle("name").value;
  const email = getEle("email").value;
  const password = getEle("password").value;
  const day = getEle("datepicker").value;
  const basicSalary = getEle("luongCB").value;
  const job = getEle("chucvu").value;
  const time = getEle("gioLam").value;

  let isValid = true;

  isValid &=
  validation.checkNumber(userName, "tbTKNV", "Tài khoản phải là số") &&
  validation.checkEmpty(userName,"tbTKNV","Tài khoản không được để trống")&&
  validation.checkLength(userName,"tbTKNV","Độ dài tài khoản từ 4-6 ký tự",4,6) ;

  isValid &=
  validation.checkEmpty(name,"tbTen","Họ và tên không được để trống")&&
  validation.checkString(name, "tbTen", "Họ và tên phải là chữ");

  isValid &=
  validation.checkEmpty(email,"tbEmail","Email không được để trống")&&
  validation.checkEmail(email, "tbEmail", "Email phải đúng định dạng @");

  isValid &=
  validation.checkEmpty(password,"tbMatKhau","Mật khẩu không được để trống")&&
  validation.checkLength(password,"tbMatKhau","Độ dài mật khẩu từ 6-10 ký tự", 6, 10) &&
  validation.checkPassword(password, "tbMatKhau", "Mật khẩu phải có 1 ký tự số, hoa, đặc biệt");

  isValid &= validation.checkEmpty(day,"tbNgay","Ngày không được để trống");

  isValid &= 
  validation.checkEmpty(basicSalary,"tbLuongCB","Lương cơ bản không được để trống") &&
  validation.checkMinMax(basicSalary,"tbLuongCB","Lương cơ bản phải từ 1.000.000 - 20.000.000" , 1000000 , 20000000);

  isValid &= validation.checkOption(job,"tbChucVu","Chức vụ không hợp lệ");

  isValid &= 
  validation.checkEmpty(time,"tbGiolam","Giờ làm không được để trống") &&
  validation.checkMinMax(time,"tbGiolam","Giờ làm phải từ 80 - 200 giờ" , 80 , 200);

  if (!isValid) return;

  const staff = new Staff(
    userName,
    name,
    email,
    password,
    day,
    basicSalary,
    job,
    time
  );
  staff.calcSumSalary();
  staff.calcTypeStaff();

  return staff;
};

const renderStaffList = (arr) => {
  getEle("tableDanhSach").innerHTML = arr
    .map((item) => {
      return `<tr>
        <td>${item.username}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.day}</td>
        <td>${item.job}</td>
        <td>${item.sumSalary}</td>
        <td>${item.type}</td>
        <td>
            <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="onEditStaff('${item.username}')">Edit</button>
            <button class="btn btn-danger" onclick="onDeleteStaff('${item.username}')">Remove</button>
        </td>
        </tr>`;
    })
    .join(" ");
};

// init Staff
const initStaff = () => {
  staffList.arr = getLocal();
  renderStaffList(staffList.arr);
};
initStaff();

// Add Staff
getEle("btnThem").onclick = function () {
  getEle("header-title").innerHTML = "Thêm Nhân viên";
  getEle("btnCapNhat").style.display = "none";
  getEle("btnThemNV").style.display = "block";
};

getEle("btnThemNV").onclick = function () {
  const staff = getValue();
  if (!staff) return;

  staffList.addStaff(staff);
  renderStaffList(staffList.arr);

  setLocal(staffList.arr);
  getEle("mform").reset();
};

// Remove Staff
const onDeleteStaff = (userStaff) => {
  staffList.removeStaff(userStaff);
  renderStaffList(staffList.arr);

  setLocal(staffList.arr);
};
window.onDeleteStaff = onDeleteStaff;

// Edit Staff
const onEditStaff = (userStaff) => {
  getEle("header-title").innerHTML = "Sửa Nhân viên";
  getEle("btnCapNhat").style.display = "block";
  getEle("btnThemNV").style.display = "none";

  const staff = staffList.findStaff(userStaff)[0];
  if (staff) {
    getEle("tknv").value = staff.username;
    getEle("name").value = staff.name;
    getEle("email").value = staff.email;
    getEle("password").value = staff.password;
    getEle("datepicker").value = staff.day;
    getEle("luongCB").value = staff.basicSalary;
    getEle("chucvu").value = staff.job;
    getEle("gioLam").value = staff.time;
  }
};
window.onEditStaff = onEditStaff;

getEle("btnCapNhat").onclick = function () {
  const staff = getValue();
  staffList.updateStaff(staff);

  renderStaffList(staffList.arr);
  setLocal(staffList.arr);

  //close modal
  getEle("btnDong").click();
};

// Filter Staff
getEle("filterName").onchange = function (e) {
  const val = e.target.value;

  const staffFilter = staffList.filterStaff(val);
  renderStaffList(staffFilter);
};

// Search Staff
getEle("searchName").onchange = function (e) {
  const val = e.target.value;

  const staffFinde = staffList.searchStaff(val);
  renderStaffList(staffFinde);
};
