

const lgDevice = window.matchMedia("(min-width: 992px)");
lgDevice.addEventListener("resize" , handleDeviceChange);

function handleDeviceChange(e) {
  if(e.matches){
    // tooltip
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
  }
}
// Run it initially
handleDeviceChange(lgDevice);



