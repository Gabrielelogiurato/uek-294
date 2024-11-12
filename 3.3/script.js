let counter = 1;
const log = document.querySelector('#log');
const button = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('form');
const blackList = ['mousemove', 'mouseout']; 

function logEvent(name, origin, value) {
  const message = document.createElement('p'); 
  if (value) {
    message.innerText = `${counter}: "${name}"-Ereignis durch ${origin} mit dem Wert ${value} ausgelöst.`; 
  } else {
    message.innerText = `${counter}: "${name}"-Ereignis durch ${origin} ausgelöst.`;
  }
  log.prepend(message);
  counter++;
}

function registerEvents(element) {
  for (const key in element) { 
    if (/^on/.test(key)) { 
      const eventName = key.slice(2);
      if (blackList.includes(eventName)) { 
        break;
      }
      window.addEventListener(eventName, (e) => {
        logEvent(eventName, e.target.nodeName, e.target.value);  
      });
    }
  };
}

registerEvents(window); 

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
});




