//

//Added Toastr
toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-left",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

class Product {
  constructor(productName, productPrice, productYear) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productYear = productYear;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
        <div class="mb-2">
        <div class = "card text-center" mb-4">
            <div class = "card-body">
            <strong>Product</strong>: ${product.productName}
            <strong>Price</strong>: ${product.productPrice}
            <strong>Year</strong>: ${product.productYear}
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
            </div>
            </div>
        `;
    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.parentElement.remove();
      toastr.info(`Product Deleted Successfully`);
      // document.getElementById("card-main").remove();
      // this.showMessage("Product Deleted Successfully", "success text-center");
    }

    // showMessage(message, cssClass) {
    //   const div = document.createElement("div");
    //   div.className = `alert alert-${cssClass} mt-2 mb-2`;
    //   div.appendChild(document.createTextNode(message));
    //   //Showing in DOM
    //   const container = document.querySelector(".container");
    //   const app = document.querySelector("#App");
    //   container.insertBefore(div, app);
    //   setTimeout(function () {
    //     document.querySelector(".alert").remove();
    //   }, 3000);
    // }
  }
}

//DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productYear = document.getElementById("productYear").value;

    const product = new Product(productName, productPrice, productYear);

    const ui = new UI();
    ui.addProduct(product);
    ui.resetForm();
    toastr.success(`Product ${productName} Added Successfully`);
    // ui.showMessage('Product Added Successfully','success text-center');
    e.preventDefault();
  });

document.getElementById("product-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteProduct(e.target);
});

//Maxlength
const myNum = document.getElementById("productPrice");
myNum.addEventListener("keypress", function (e) {
  if (this.value.length == 9) {
    e.preventDefault();
    return false;
  }
});
