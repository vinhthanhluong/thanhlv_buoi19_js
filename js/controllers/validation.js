import { getEle } from "../../js/main.js";

class Validation {
  checkEmpty(val, idNoti, mess) {
    if (val === "") {
      getEle(idNoti).innerHTML = mess;
      getEle(idNoti).style.display = "block";
      return false;
    }

    getEle(idNoti).innerHTML = "";
    getEle(idNoti).style.display = "none";
    return true;
  }

  checkLength(val, idNoti, mess, min, max) {
    if (min <= val.trim().length && val.trim().length <= max) {
      getEle(idNoti).innerHTML = "";
      getEle(idNoti).style.display = "none";
      return true;
    }

    getEle(idNoti).innerHTML = mess;
    getEle(idNoti).style.display = "block";
    return false;
  }

  checkNumber(val, idNoti, mess) {
    const regex = "^[0-9]*$";
    if (val.match(regex)) {
      getEle(idNoti).innerHTML = "";
      getEle(idNoti).style.display = "none";
      return true;
    }
    getEle(idNoti).innerHTML = mess;
    getEle(idNoti).style.display = "block";
    return false;
  }

  checkString(val, idNoti, mess) {
    const regex =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (val.match(regex)) {
      getEle(idNoti).innerHTML = "";
      getEle(idNoti).style.display = "none";
      return true;
    }
    getEle(idNoti).innerHTML = mess;
    getEle(idNoti).style.display = "block";
    return false;
  }
  checkEmail(val, idNoti, mess) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (val.match(regex)) {
      getEle(idNoti).innerHTML = "";
      getEle(idNoti).style.display = "none";
      return true;
    }
    getEle(idNoti).innerHTML = mess;
    getEle(idNoti).style.display = "block";
    return false;
  }
   checkPassword(val, idNoti, mess) {
    const regex = "^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{1,}$";
    if (val.match(regex)) {
      getEle(idNoti).innerHTML = "";
      getEle(idNoti).style.display = "none";
      return true;
    }
    getEle(idNoti).innerHTML = mess;
    getEle(idNoti).style.display = "block";
    return false;
  }
  checkOption(val, idNoti, mess) {
    if (val === "") {
      getEle(idNoti).innerHTML = mess;
      getEle(idNoti).style.display = "block";
      return false;
    }

    getEle(idNoti).innerHTML = "";
    getEle(idNoti).style.display = "none";
    return true;
  }
  checkMinMax(val, idNoti, mess, min, max) {
    if (min <= val && val <= max) {
      getEle(idNoti).innerHTML = "";
      getEle(idNoti).style.display = "none";
      return true;
    }
    getEle(idNoti).innerHTML = mess;
    getEle(idNoti).style.display = "block";
    return false;
  }
}

export default Validation;
