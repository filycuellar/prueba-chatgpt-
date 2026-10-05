const b=document.querySelector('.menu'),n=document.querySelector('#nav');
if(b&&n){
  const closeMenu=()=>{
    n.classList.remove('open');
    b.setAttribute('aria-expanded','false');
    b.setAttribute('aria-label','Abrir menú');
  };
  b.setAttribute('aria-label','Abrir menú');
  b.addEventListener('click',()=>{
    const open=n.classList.toggle('open');
    b.setAttribute('aria-expanded',String(open));
    b.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
  });
  n.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
}