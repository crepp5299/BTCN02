function validateForm(){
    var x = document.forms["myForm"]["number1"].value;
    var y = document.forms["myForm"]["number2"].value;
    var checkPlus = document.getElementById("plus").checked;
    var checkMinus = document.getElementById("minus").checked;
    var checkMulti = document.getElementById("multi").checked;
    var checkDivide = document.getElementById("divide").checked;
    if (y == "" || x == "") {
        alert("CHƯA NHẬP ĐỦ HAI SỐ!");
        return false;
    }
    else if(isNaN(x) || isNaN(y)){
        alert("DỮ LIỆU NHẬP VÀO KHÔNG PHẢI SỐ THỰC!")
        return false;
    }
    else if(!(checkPlus || checkMulti || checkMinus || checkDivide)){
        alert("CHƯA CHỌN PHÉP TÍNH!")
        return false;
    }
    return true;
}

function Caculate(){
    var checkPlus = document.getElementById("plus").checked;
    var checkMinus = document.getElementById("minus").checked;
    var checkMulti = document.getElementById("multi").checked;
    var checkDivide = document.getElementById("divide").checked;
    var x = document.forms["myForm"]["number1"].value;
    var y = document.forms["myForm"]["number2"].value;
    var res;
    if(validateForm()){
        if(checkPlus){
            document.getElementById("result").innerHTML = x + y;
        }
    }
}