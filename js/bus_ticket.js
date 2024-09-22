
// Get access seat number
const seat = document.querySelectorAll(".seat-number");

// initial sell price 
let totalPrice = 0;

// creare Array for seat selecting
let selectedSeat = [];

seat.forEach(element => {
    let setButton = element.querySelectorAll(".col-span-2")

    for(let singleSeat of setButton) {

        singleSeat.addEventListener("click", function (e) {

            // it use for user don't book aging after bookong
            if(selectedSeat.includes(e.target.innerText)) {
                alert("Already Book")
                return
            }
            
            // it push value into the selectedSeat Array
            selectedSeat.push(`${e.target.innerText}`);

            // use condition so that con't access more than 4 seat
            if(selectedSeat.length > 4) {
                alert("Already 4 Seat Full");
                return;
            }
            
            // Seat counter 
            $("every_person_seat").innerText = selectedSeat.length;


            // Available site counter
            $("available_seat").innerText = 40 - selectedSeat.length

            // Selling seat counter
            $("selected_seat").innerText = selectedSeat.length
            
            // seat ticket style here
            e.target.classList.add("hover:bg-black")
            e.target.classList.add("bg-green-500")
            e.target.classList.add("text-white")
            
            // create div container for storing ticket card
            const div = document.createElement("div");

            // If you want to create id then can use those way
            // div.setAttribute('id', "modeal_cliked_korla_delete_hoba");

            
            // add ticket card element inside of div container
            div.innerHTML = `<h2 class="flex justify-between items-center "> <span>${e.target.innerText}</span> <span>Economi</span> <span id="seat_vara" >750 Tk</span> </h2>`;

            // displayed inside of seat booking serial
            $("seat_booking_serial").appendChild(div);

            //add ticket total price
            totalPrice += parseInt($text("seat_vara"));
            $("total_price").innerHTML = totalPrice + "Tk.";

            // Discount condition apply inside
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
    
    // Gamil validaition here
    if(!$value("ticket_buyer_email").includes("@gmail.com")){
        alert("Gmail is not valide")
        return;
    }

    // // Input Refreash 
    // $nule("ticket_buyer_name")
    // $nule("ticket_buyer_number")
    // $nule("ticket_buyer_email");

    $("success_modeal").classList.remove("hidden")
    
    $("success_modeal").addEventListener("click", (e) => {
        $("success_modeal").classList.add("hidden")
        // Input Refreash 
        $nule("ticket_buyer_name")
        $nule("ticket_buyer_number")
        $nule("ticket_buyer_email");

        // leter remove selected site, total price, Grand Price  and cuppon innerText(onley done ticket card)
        $("seat_booking_serial").innerText = "NO Selected You";
        
    })

})

