
const seat = document.querySelectorAll(".seat-number")
let totalPrice = 0;
let selectedSeat = [];

seat.forEach(element => {
    let setButton = element.querySelectorAll(".col-span-2")

    for(let singleSeat of setButton) {

        singleSeat.addEventListener("click", function (e) {

            

            // Available site count
            selectedSeat.push(`${e.target.innerText}`);
            $("available_seat").innerText = 40 - selectedSeat.length
            $("selected_seat").innerText = selectedSeat.length
            

            
            if(selectedSeat.length > 4) {
                alert("Already 4 Seat Full");
                return;
                
            }

            $("every_person_seat").innerText = selectedSeat.length;

            e.target.classList.add("hover:bg-black")
            e.target.classList.add("bg-green-500")
            e.target.classList.add("text-white")
            

            const div = document.createElement("div");

            div.innerHTML = `<h2 class="flex justify-between items-center "> <span>${e.target.innerText}</span> <span>Economi</span> <span id="seat_vara" >750 Tk</span> </h2>`;

            $("seat_booking_serial").appendChild(div);

           
            totalPrice += parseInt($text("seat_vara"));
            $("total_price").innerHTML = totalPrice + "Tk.";


            // Discount application here
            $("discount_apply_button").addEventListener("click", function() {

                if($("input_discount_apply").value === "suvo") {
                    $("grand_price").innerHTML = totalPrice - totalPrice * 50 / 100 +"Tk."
    
                } else if ($("input_discount_apply").value === "rajib") {
                    $("grand_price").innerHTML = totalPrice - totalPrice * 45 / 100 + "Tk."
    
                } else {
                    $("grand_price").innerHTML = totalPrice
    
                }

            })

            

        })

        
    }
    
});

// // form applicition here
$("next_button").addEventListener("click", function (e) {
    e.preventDefault();
    

    if(!$value("ticket_buyer_email").includes("@gmail.com")){
        alert("Gmail is not valide")
        return;
    }

    console.log($value("ticket_buyer_name"))
    console.log($value("ticket_buyer_number"))

    $nule("ticket_buyer_name")
    $nule("ticket_buyer_number")
    $nule("ticket_buyer_email");

})

