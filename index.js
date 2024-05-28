const checkk = document.getElementById("check");

checkk.addEventListener("click", () => {
    checkk.value = "Agreed";
});


function gate() {
    if (checkk.value === "Agreed") {
        window.location.href = "Home.html";
        // function noBack() { 
        //     window.history.forward();
        //     } 
        // noBack(); 
    } 
    
    else{
      alert("Please check Agree")
    }
}


