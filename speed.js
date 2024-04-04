// let input =prompt("enter speed of vehicle");
// let speed = parseFloat(input);

function speeddetector(speed){
   const maxSpeed = 70;

   let demeritpoints = 0;

   if(speed <= maxSpeed){
      return "OK";
   }
   else{demeritpoints = Math.floor((speed-maxSpeed)/5);

   if (demeritpoints >12 ){
      console.log("license suspended");
   } }
}
const speed = parseFloat(prompt("Enter the speed of the car (in km/h):"));
const points = calculateDemeritPoints(speed);