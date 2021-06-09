
// screen
const lgDevice = window.matchMedia("(min-width: 992px)");
lgDevice.addEventListener("resize", handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
    // tooltip
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}
// Run it initially
handleDeviceChange(lgDevice);


// validation
let forms = document.querySelectorAll('.needs-validation')
Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  });


// accordion-button
const accordionBtn = document.querySelectorAll('.accordion-item');
accordionBtn.forEach(function(item){
  item.addEventListener('click', function(e) {

    if (e.target.nodeName !== "BUTTON") {
      return ;
    } 
    let childrens = item.parentElement.children;
    for (let i=0; i<childrens.length; ++i) {
      let children =  childrens[i] ;
      children.classList.remove("shadow-active");
    }
    item.classList.add("shadow-active");
  })
})


// sponsorBtn
const formM = document.querySelector("#sponsorForm");
const stickyBottomBtn = document.querySelector("#sponsorBtn");
const footer = document.querySelector(".footer");
const body = document.querySelector("body");

window.addEventListener('scroll', scrollBtn);
// stickyBottomBtn.classList.add('d-none');
function scrollBtn() {
  const bodyHeight = document.body.scrollHeight; // 網頁整體高度
  const screenHeight = window.innerHeight; // 裝置高度
  const elHeight = formM.clientHeight + footer.clientHeight + 72; // 表單和footer高度
  const scrollMediumPos = bodyHeight - screenHeight - elHeight; // scroll中間剩餘高度
  const scrollY = window.scrollY; // 滾動的距離
  if(scrollY <= scrollMediumPos){
    stickyBottomBtn.classList.remove('d-none');
  }
  else{
    stickyBottomBtn.classList.add('d-none');
  }
}

