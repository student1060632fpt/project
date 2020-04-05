// Hien thi button
function hienthi() {
    document.getElementById("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "img/calendar-icon.png",
        buttonImageOnly: true,
        buttonText: "Select date",
        dateFormat: "mm/dd/yy"

    });
}
hienthi();
// Lay ngay mac dinh
var d = new Date();

var month = d.getMonth() + 1;
var day = d.getDate();

var output = (('' + month).length < 2 ? '0' : '') + month + '/' +
    (('' + day).length < 2 ? '0' : '') + day + '/' +
    d.getFullYear();
$('#datepicker').val(output);

console.log("Data zooooo");
