var now = new Date();
var millisTill11 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 0, 0, 0) - now;
var halfHour = 15*60*1000 // minutes * seconds * milliseconds 

var files = [];
function addFiles(){
  for (i = 1; i <= 13; i++) {
  files.push(new Audio('sound/sleep'+i+'.m4a'));
  }
}

addFiles();

// make notification last longer 
var text = [
"Sleep Deprivation: delaying sleep after learning disrupts memory consolidation by affecting the neuronal signaling pathways in the hippocampus. (Prince, Abel. 2013).",
"Memory Retention: sleep stabilizes declarative (fact-based) memory, offering immunity against forgetting. (Jenkins, Dalenbach. 1924.)", 
"Sleep Deprivation: sleep deprived brains are, on average, smaller in volume and less populous in brain cells than well-rested brains. (Sexton, et. al. 2014).",
"Alcohol and Memory: people who drank alcohol only remembered 40-50% of information for a test after the first night, and only 60% after the the third night. (Sabia 2014). ", 
"Sleep Scheduling: students who had a regular bedtime performed better in language, reading, and math than students who went to bed at different times. (Gaylor 2010).", 
"Emotion: sleep prepares the brain for next-day social and emotional functioning. Accumulated sleep loss leads to an amplification of negative emotions. (Walker, 2009). ", 
"Naps and Recall: a short nap lasting 45 to 60 minutes produces a 5x improvement in information retrieval from memory. (Mecklinger 2015.)", 
"Metabolism: reduced sleep quantity can impair regulation of appetite and metabolism, resulting in an increased risk of diabetes and obesity. (Tasali, 2007)",
"Driving While Sleepy: after 22 hours of going without sleep, a sleep deprived person's driving is worse than someone who is legally drunk. (Williamson, Feyer, 2000.)",
"Health: sleep contributes to the maintenance of the immune system. (Dinges, et. al. 1995)", 
"Beauty Sleep: people who get eight hours of sleep appear healthier, more rested, and more attractive than those who stay up all night. (Axelsson, 2010).", 
"Sleep Deprivation: because sleep deprivation may be a factor in cancer risk, the World Health Organization classified night shift working as a carcinogen. ",
"Creative Abstraction: sleep builds remote associations; it extracts overarching rules and abstracts insights into problems. (Walker, et. al., 2007)." 
]

var messages = [];

function addSleepmessages(){
  for (i = 0; i <= 12; i++) {
    var opt = {type: "basic", title: "Go to Sleep", message: text[i], priority:1, iconUrl: "photos/sleep2.png"}
    messages.push(opt);
  }
}

addSleepmessages();

function audioNotification(file_count){
    var yourSound = files[file_count%14];
    yourSound.play();
}

function createNotification(file_count){
    var opt = messages[file_count%14];
    chrome.notifications.create("notificationName",opt,function(){});
    chrome.notifications.create("notificationName",opt,function(){});

    //include this line if you want to clear the notification after 5 seconds
    setTimeout(function(){chrome.notifications.clear("notificationName",function(){});},20*1000);
}

var file_count = 0

setTimeout(function(){
  setInterval(function(){
    createNotification(file_count);
    createNotification(file_count);
    audioNotification(file_count);
    file_count += 1
  }, halfHour);
}, millisTill11);
