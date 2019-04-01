//Total Function
$(function () {
    //ticketAmount for radio buttons, ticketAddition for checkboxes
    var ticketAmount = 0,
        ticketAddition = 0;
    $(".ticketAmount").change(function () {
        //Set ticketAmount to the value of the button checked.
        var value = parseInt(this.value);
        ticketAmount = value;
        $('#amount').text((ticketAmount + ticketAddition) + ".00");
    });
    $(".ticketAddition").change(function () {
        //Add or subtract the value of the button from ticketAddition
        //depending on whether or not the button has been checked or unchecked.
        var value = parseInt(this.value); 
        if (this.checked) ticketAddition += value;
        else ticketAddition -= value;
    });
});

//changing the color of Total
var bgcolors = ['#f5977d', '#fcc58e', '#fff69f', '#c5de9e', '#7dccc8', '#7fa8d7', '#8494c8', '#bc8ebe', '#f39bc1', '#f4999e'];

var i = 0;

function change(){  
    document.getElementById("total").style.backgroundColor = bgcolors[i++];
    if(i == bgcolhex.length) i = 0;
}

var bgcolhex = ['#f5977d', '#fcc58e', '#fff69f', '#c5de9e', '#7dccc8', '#7fa8d7', '#8494c8', '#bc8ebe', '#f39bc1', '#f4999e'];
  
 
/*
$(".sticky").on("click", function() {
    $(this).toggleClass("btn4");
})
*/

/*ScrollTopUp*/
const btnscrolltotop = document.querySelector("#btnscrolltotop");
btnscrolltotop.addEventListener("click", function(){
    window.scrollTo({
        top: 0 ,
        left: 0 ,
        behavior: "smooth"
    });
});

$(".ticketAddition").change(function (){
    var name = [];
    name.toString();
    if (this.checked) {
        name.push(this.name);
        console.log(name);
        displayCart();
    }
    function displayCart(){
        cartdata = "<table><tr>Service Name</th><th>Price</th>";
        total=0;
        for(i=0;i<name.length;i++){
            total+=name[i];
            cartdata+="<tr><td>"+name[i];
            console.log(cartdata);
        }
    }
});
