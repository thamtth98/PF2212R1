//viết trang web để quản lý món ăn trong 1 cửa hàng
//mỗi món ăn sẽ gồm có cá ttin: tên,
/** giá tiền, số lượng.
 * App quản lý thức ăn trong cửa hàng. 
Các chức năng chính: tạo/tìm kiếm/chỉnh sửa số lượng thức ăn,
 tạo ra hóa đơn khi mua hàng
 * trang web sẽ có các chức năng chính như sau
 * 1. Tạo món ăn
 * 2. tìm kiếm ttin món ăn
 * điều chỉnh số lượng (cho phép tăng / giảm số lượng  thức ăn)
 * 4. Xóa 1 loại món ra khỏi cửa hàng
 *
 *
 */
class food {
  constructor(dish, category, price, quantity) {
    this.dish = dish;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
}
//Tạo object các món ăn
let ham = new food("Honey Roast Ham", "Main Course", 100000, 10);
let turkey = new food("Roasted Turkey", "Main Course", 60000, 10);
let chesse = new food("Mac-Chesse", "Main Course", 150000, 10);
let marbrella = new food("Chicken Marbrella", "Main Course", 200000, 10);
let sandChick = new food("Chicken Sandwich", "Sandwiches", 70000, 10);
let sandHam = new food("Ham Sandwich", "Sandwiches", 90000, 10);
let sandTuna = new food("Tuna Sandwich", "Sandwiches", 40000, 10);
let sandBeef = new food("Beef Sandwich", "Sandwiches", 100000, 10);
let apple = new food("Apple", "Fruits", 46000, 10);
let orange = new food("Orange", "Fruits", 32000, 10);
let grapes = new food("Grapes", "Fruits", 70000, 10);
let watermelon = new food("Watermelon", "Fruits", 45000, 10);
let lemonade = new food("Lemonade", "Drink", 40000, 10);
let beer = new food("Beer", "Drink", 30000, 10);
let coffee = new food("Coffee", "Drink", 35000, 10);

let foodList = {
  ham,
  turkey,
  chesse,
  marbrella,
  sandChick,
  sandHam,
  sandTuna,
  sandBeef,
  apple,
  orange,
  grapes,
  watermelon,
  lemonade,
  beer,
  coffee,
};

console.log(foodList);

// tạo món mới
function addFood() {
  let addName = document.getElementById("dish-name").value;
  let priceAd = document.getElementById("food-price").value;
  let add_1 = document.getElementById("add-food1");

  console.log(addName);
  console.log(priceAd);
  add_1.innerHTML += `<div id="item-card">
      <div id="card-top">
      </div>
      <img
        src="https://i.ytimg.com/vi/08JdNj8jGHk/maxresdefault.jpg"
        alt=""
      />
      <p id="item-name">${addName}</p>
      <p id="item-price">Price: ${priceAd} VND</p>
    </div>`;
}

//tìm kiếm món và thêm món vào bill
function searchDish() {
  let check = false;
  let searchName = document.getElementById("search-name").value;
  let search = document.getElementById("search");

  //loop through each item in foodList
  for (let property in foodList) {
    if (foodList[property].dish == searchName) {
      check = true;
      console.log(foodList[property]);
      let addDish = foodList[property];
      alert("This item is still on the list");
      let quanti = document.getElementById("food-quantity").value;
      console.log(addDish.dish);

      search.innerHTML += `
      <table>
      <tbody>
      <tr>
      <td>Tên món: </td>
      <td>${addDish.dish}</td>
      </tr>
      <tr>
      <td>Số lượng: </td>
      <td>${quanti}</td>
      </tr>
      <tr>
      <td>Giá tiền: </td>
      <td>${addDish.price * quanti}</td>
      </tr>
      </tbody>
      </table>
      `;
      break;
    }
  }
  if (check == false) {
    alert("This item is out of stock");
  }
}

// Update số lượng món
function updateFood() {
  let check = false;
  let updateName = document.getElementById("search-name").value;
  let search = document.getElementById("search");
  search.innerHTML = "";

  //loop through each item in foodList
  for (let property in foodList) {
    if (foodList[property].dish == updateName) {
      check = true;
      console.log(foodList[property]);
      let addDish = foodList[property];
      let quanti = document.getElementById("food-quantity").value;
      console.log(addDish.dish);
      alert("Update successfully!");
      search.innerHTML += `
      <table>
      <tbody>
      <tr>
      <td>Tên món: </td>
      <td>${addDish.dish}</td>
      </tr>
      <tr>
      <td>Số lượng: </td>
      <td>${quanti}</td>
      </tr>
      <tr>
      <td>Tổng tiền: </td>
      <td>${addDish.price * quanti}</td>
      </tr>
      </tbody>
      </table>`;
      break;
    }
  }
  if (check == false) {
    alert("This item is out of stock");
  }
}

// xóa món
  function deleteDish() {
    let check = false;
    let searchName = document.getElementById("search-name").value;
    let search = document.getElementById("search");
    search.innerHTML = "";
  
    //loop through each item in foodList
    for (let property in foodList) {
      if (foodList[property].dish == searchName) {
        check = true;
        delete foodList[property];
        console.log(foodList);
        alert("Deleted");
        break;
      }
    }
    if (check == false) {
      alert("This item is out of stock");
    }
  }
