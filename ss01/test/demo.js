/*
let arr = [1, 3, 5, 7, 9, 10, 100, 99, 45, 23];
let sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, -300);

console.log(sum);
let maxNumber = arr.reduce((previousValue, currentValue) => {
    if (previousValue > currentValue) return previousValue;
    return currentValue;
});
console.log("max:   " + maxNumber);

console.log("max number is:   " + arr.reduce((previousValue, currentValue) => previousValue > currentValue ? previousValue : currentValue));
*/

let array = [2,5,6,4,7,8,2,3];
// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.
// console.log(array.filter(a => a>=5));

// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
// console.log(array.reduce((previousValue, currentValue) => previousValue + currentValue));

// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".


// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.
// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.