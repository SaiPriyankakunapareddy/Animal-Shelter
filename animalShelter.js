let mobileNoEl = document.getElementById("mobileNo");
let mobileNoErrMsgEl = document.getElementById("mobileNoErrMsg");


mobileNoEl.addEventListener("change", function() {
    if (mobileNoEl.value.match(/^[0-9]+$/)) {
        mobileNoErrMsgEl.textContent = "";
    } else {
        mobileNoErrMsgEl.textContent = "Invalid*";
    }
});

function getFormData() {
    alert("Details Submited Successfully");
}

function getFormDataa() {
    alert("Details Submited Successfully");
}
