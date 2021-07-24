function clock(){
    //Khởi tạo đối tượng timer sử dụng Date Object
    var timer = new Date();
    //Gọi các phương thức của đối tượng timer
    var hour = timer.getHours();  //Lấy giờ hiện tại (giá trị từ 0 - 23)
    var minute = timer.getMinutes();  //Lấy phút hiện tại
    var second = timer.getSeconds();  //Lấy giây  hiện tại
    //Thêm ký tự 0 đằng trước nếu giờ, phút, giây < 10 với câu lệnh điều khiển if
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second;
    }
    //Hiện thị thời gian lên thẻ div id="clock" với phương thức innerHTML
    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
 }
 //Thực hiện hàm clock theo chu kỳ 1 giây
 setInterval("clock()",1000);