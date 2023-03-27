//viết trang web để quản lý sách trong 1 cửa hàng
//mỗi quyển sách sẽ gồm có cá ttin: tên, thể loại
/** giá tiền, số lượng.
 * trang web sẽ có các chức năng chính như sau
 * 1. Thêm sách vào cửa hàng
 * 2. tìm kiếm ttin theo tên sách
 * điều chỉnh số lượng sách (cho phép tăng / giảm số lượng)
 * 4. Xóa 1 loại sách ra khỏi cửa hảng
 *
 *
 */
class Book {
  constructor(name, category, price, quantity) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
}
let bookList = [];

//Add new book
let btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", () => {
  let bookName = document.getElementById("book-name").value;
  let bookCategory = document.getElementById("book-category").value;
  let bookPrice = parseInt(document.getElementById("book-price").value);
  let bookQuantity = parseInt(document.getElementById("book-quantity").value);

  let newBook = new Book(bookName, bookCategory, bookPrice, bookQuantity);

  bookList.push(newBook);
  console.log(bookList);
  alert(`New book ${bookName} added successfully!`);
});
// Search book
function searchBook() {
  let searchName = document.getElementById("search-name").value;
  let check = false;
  //loop through each item in bookList
  for (let i in bookList) {
    if (bookList[i].name.includes(searchName)) {
      check = true;
      document.getElementById("book-name").value = bookList[i].name;
      document.getElementById("book-category").value = bookList[i].category;
      document.getElementById("book-price").value = bookList[i].price;
      document.getElementById("book-quantity").value = bookList[i].quantity;

      console.log(bookList[i]);
      break;
    }
  }
  if (check == false) {
    alert("No book found!");
  }
}

// delete
function deleteBook() {
  let searchName = document.getElementById("search-name").value;
  let check = false;
  //loop through each item in bookList
  for (let i in bookList) {
    if (bookList[i].name.includes(searchName)) {
      check = true;
      console.log(bookList[i]);
      bookList.splice(i, 1);
      break;
    }
  }
  if (check == false) {
    alert("No book found!");
  }
}
function updateBook() {
  let bookName = document.getElementById("book-name").value;
  let bookCategory = document.getElementById("book-category").value;
  let bookPrice = parseInt(document.getElementById("book-price").value);
  let bookQuantity = parseInt(document.getElementById("book-quantity").value);

  let check = false;
  //loop through each item in bookList
  for (let i in bookList) {
    if (bookList[i].name.includes(bookName)) {
      bookList[i].category = bookCategory;
      bookList[i].price = bookPrice;
      bookList[i].quantity = bookQuantity;
      check = true;
      console.log(bookList[i]);
      alert("Update book successfully!");
      break;
    }
  }
  if (check == false) {
    alert("No book found!");
  }
}
