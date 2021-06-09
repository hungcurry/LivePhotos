"use strict";

// screen
var lgDevice = window.matchMedia("(min-width: 992px)");
lgDevice.addEventListener("resize", handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
    // tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
} // Run it initially


handleDeviceChange(lgDevice); // validation

var forms = document.querySelectorAll('.needs-validation');
Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  }, false);
}); // accordion-button

var accordionBtn = document.querySelectorAll('.accordion-item');
accordionBtn.forEach(function (item) {
  item.addEventListener('click', function (e) {
    if (e.target.nodeName !== "BUTTON") {
      return;
    }

    var childrens = item.parentElement.children;

    for (var i = 0; i < childrens.length; ++i) {
      var children = childrens[i];
      children.classList.remove("shadow-active");
    }

    item.classList.add("shadow-active");
  });
}); // sponsorBtn

var formM = document.querySelector("#sponsorForm");
var stickyBottomBtn = document.querySelector("#sponsorBtn");
var footer = document.querySelector(".footer");
var body = document.querySelector("body");
window.addEventListener('scroll', scrollBtn); // stickyBottomBtn.classList.add('d-none');

function scrollBtn() {
  var bodyHeight = document.body.scrollHeight; // 網頁整體高度

  var screenHeight = window.innerHeight; // 裝置高度

  var elHeight = formM.clientHeight + footer.clientHeight + 72; // 表單和footer高度

  var scrollMediumPos = bodyHeight - screenHeight - elHeight; // scroll中間剩餘高度

  var scrollY = window.scrollY; // 滾動的距離

  if (scrollY <= scrollMediumPos) {
    stickyBottomBtn.classList.remove('d-none');
  } else {
    stickyBottomBtn.classList.add('d-none');
  }
}
//# sourceMappingURL=all.js.map
