let purchase=75000;
let discount;
    if(purchase<5000){
         discount=purchase*0/100;
    }
    else if(purchase>=5000 && purchase<10000){
         discount=purchase*10/100;
    }
    else if(purchase>=10000 && purchase<25000){
         discount=purchase*15/100;
    }
    else if(purchase>=25000 && purchase<50000){
         discount=purchase*20/100;
    }
    else{
        discount=purchase*30/100;
    }
    purchase=purchase-discount;
    console.log(purchase)