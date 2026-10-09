// Mobiles Menü
(function(){
  const h=document.querySelector('header'), b=h.querySelector('.burger');
  b.addEventListener('click',()=>{const o=h.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  h.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{h.classList.remove('open');b.setAttribute('aria-expanded',false)}));
})();
// Formular (Texte stehen als data-Attribute am <form>)
(function(){
  const form=document.getElementById('form'); if(!form)return;
  const status=document.getElementById('status'), d=form.dataset;
  form.addEventListener('submit',async e=>{
    e.preventDefault(); status.textContent=d.sending;
    try{
      const r=await fetch(form.action,{method:'POST',headers:{Accept:'application/json'},body:new FormData(form)});
      const j=await r.json(); if(!j.success)throw 0;
      form.reset(); status.textContent=d.ok;
    }catch{status.textContent=d.fail}
  });
})();
const y=document.getElementById('year'); if(y)y.textContent=new Date().getFullYear();
