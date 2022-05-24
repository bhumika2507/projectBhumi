let  yesArray = [];
localStorage.setItem('yesArray', JSON.stringify(yesArray));
yesArray = JSON.parse(localStorage.getItem('yesArray'));
yesArray.push('yes');
localStorage.setItem('yesArray', JSON.stringify(yesArray));
JSON.parse(localStorage.getItem('yesArray')); // Returns ["yes"]



let existing = localStorage.getItem('myFavoriteSandwich');

existing = existing ? existing.split(',') : [];


existing.push('tuna');


localStorage.setItem('myFavoriteSandwich', existing.toString());
