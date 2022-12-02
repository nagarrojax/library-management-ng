import { Component } from '@angular/core';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    userAction(){
        const request = new XMLHttpRequest();
        request.open("GET", "https://frontend.free.beeceptor.com");
        request.send();
        request.onload = () => {
            if(request.status === 200){
              
                //console.log(JSON.parse(request.response));
                window.alert(request.response);
            
            }else{ 
                console.log(`error ${request.status}`)
            }
        }   
      }
    
      openNewtab(value:string){
        if(value === 'bryan'){
          window.open("https://www.google.com/maps/dir//Fairbanks+Library,+7122+Gessner+Rd,+Houston,+TX+77040/@34.96123,-93.8055129,5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8640cf9355146beb:0xcf6f02dd11cda91c!2m2!1d-95.5411707!2d29.8720013", '_blank');
        }
        else if( value === 'jersey'){
          window.open("https://www.google.com/maps/dir//Clara+B.+Mounce+Public+Library,+201+E+26th+St,+Bryan,+TX+77803/@30.6731037,-96.4073527,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864681a24f6ee9dd:0x503dcfdaa8d02d5b!2m2!1d-96.3722512!2d30.673092", '_blank');
    
        }
        else if( value === 'florida'){
          window.open("https://www.google.com/maps/dir//jacksonville+public+library/@31.3008651,-96.3737503,9z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86483c629776b5fb:0x1857b18c5ed88e4d!2m2!1d-95.2686886!2d31.9657237", '_blank');
    
        }
      }
    
}