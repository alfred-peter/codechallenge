function speeddetector(speed) {
   const speedLimit = 70;
   const kmperdemeritpoint = 5;
   
   if (speed <= speedLimit) {
       console.log("Ok");
       return 0;
   } else {
       const demeritpoints = Math.floor((speed - speedLimit) / kmperdemeritpoint);
       if (demeritpoints > 12) {
           console.log("License suspended");
       } else {
           console.log("demeritpoints:", demeritpoints);
       }
       return demeritpoints;
   }
}
 speeddetector(77)
