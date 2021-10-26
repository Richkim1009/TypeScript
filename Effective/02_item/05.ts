const el = document.getElementById('status');
el.textContent = 'Ready';

if(el){
  el.textContent = 'Ready';
} 
// !단언문 절대 null이 아님을 단언한다.
el!.textContent = 'Ready';