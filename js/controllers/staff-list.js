class StaffList {
  constructor() {
    this.arr = [];
  }

  addStaff(staff) {
    this.arr.push(staff);
  }
  removeStaff(userStaff) {
    this.arr = this.arr.filter((item) => item.username !== userStaff);
  }
  findStaff(userStaff) {
    return this.arr.filter((item) => item.username === userStaff);
  }
  updateStaff(staff) {
    const index = this.arr.findIndex((item) => item.username == staff.username);
    if (index !== -1) this.arr[index] = staff;
  }
  filterStaff(staff) {
    return this.arr.filter((item) => item.type == staff);
  }
  searchStaff(keyword) {
    let findFood = [];
    for (let i = 0; i < this.arr.length; i++) {
      const staff = this.arr[i];
      const nameLowerCase = staff.name.toLowerCase();
      const keyLowerCase = keyword.toLowerCase();
      if (nameLowerCase.indexOf(keyLowerCase) !== -1) {
        findFood.push(staff);
      }
    }

    return findFood;
  }
}

export default StaffList;
