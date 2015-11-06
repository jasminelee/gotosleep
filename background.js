var now = new Date();
var millisTill11 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 0, 0, 0) - now;
var halfHour = 1*60*1000 // minutes * seconds * milliseconds 
var file_count = 0
// if (millisTill10 < 0) {
//      millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
// }

//setTimeout only calls function once. setInterval calls function repeatedly 
setTimeout(function(){
  setInterval(function(){
    createNotification();
    audioNotification(file_count);
  }, halfHour);
}, millisTill11);



function audioNotification(file_count){
    var files = [];
    for (i = 1; i <= 13; i++) {
      files.push(new Audio('sleep'+i+'.m4a'));
    }

    var yourSound = files[file_count%14];
    yourSound.play();
    file_count += 1
}

function createNotification(){
    var opt = {type: "basic", title: "Your Title", message: "Your message",iconUrl: "icon.png"}
    chrome.notifications.create("notificationName",opt,function(){});

    //include this line if you want to clear the notification after 5 seconds
//    setTimeout(function(){chrome.notifications.clear("notificationName",function(){});},5000);
}