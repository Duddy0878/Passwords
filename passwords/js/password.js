

export var passwords = JSON.parse(localStorage.getItem('passwords'));

if(!passwords){
    passwords = [{
        
        site: 'duudyWerz.com',
        email: '@gmail.com',
        userName: 'duddy0878',
        password: 'Werz0878',
    },
    { 
        site: 'dyWerz.com',  
        email: '@gil.com',
        userName: 'dy0878',
        password: 'W0878',
    },
    { 
        site: 'dyopopoWerz.com',
        email: '@kkkil.com',
        userName: 'dy0878',
        password: 'W0878',
    }

]
  
}

export function saveToStorage() {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  }

  export function removePassword(newPass,newDisplay) {
    passwords = newPass
    saveToStorage();
    newDisplay();
    
  }

