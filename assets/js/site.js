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

/* Homepage desktop refinement: top utility row + menu row, smaller portrait, aligned title */
if(document.querySelector('.header-featured')){
  const s=document.createElement('style');
  s.textContent=`
  @media (min-width:801px){
    body .header{
      height:104px!important;
      display:grid!important;
      grid-template-columns:auto 1fr!important;
      grid-template-rows:34px 34px!important;
      align-content:center!important;
      align-items:center!important;
      column-gap:28px!important;
      padding-left:max(3vw,24px)!important;
      padding-right:max(3vw,24px)!important;
    }
    body .header>.brand{
      grid-column:1!important;
      grid-row:1 / 3!important;
      align-self:center!important;
      font-size:17px!important;
      line-height:1!important;
      white-space:nowrap!important;
    }
    body .header>.header-featured{
      grid-column:2!important;
      grid-row:1!important;
      justify-self:end!important;
      align-self:end!important;
      display:flex!important;
      align-items:center!important;
      justify-content:flex-end!important;
      gap:14px!important;
      margin:0!important;
      padding:0 0 3px!important;
      font-size:8.5px!important;
      letter-spacing:.08em!important;
    }
    body .header>#nav{
      grid-column:2!important;
      grid-row:2!important;
      justify-self:end!important;
      align-self:start!important;
      display:flex!important;
      align-items:center!important;
      justify-content:flex-end!important;
      gap:18px!important;
      margin:0!important;
      padding:3px 0 0!important;
      font-size:9.5px!important;
      letter-spacing:.10em!important;
    }
    body .header>.menu{display:none!important}

    body .hero{
      grid-template-columns:minmax(340px,44%) 1fr!important;
      gap:6vw!important;
      padding-top:48px!important;
      padding-bottom:62px!important;
      align-items:center!important;
    }
    body .hero>.hero-image>img{
      width:min(88%,430px)!important;
      max-width:430px!important;
      margin-left:auto!important;
      margin-right:auto!important;
    }
    body .hero>.hero-copy{
      display:flex!important;
      flex-direction:column!important;
      align-items:center!important;
      justify-content:center!important;
      text-align:center!important;
      padding:12px 2vw 12px 0!important;
    }
    body .hero>.hero-copy h1{
      width:100%!important;
      max-width:620px!important;
      margin:14px auto 28px!important;
      text-align:center!important;
      line-height:.92!important;
    }
    body .hero>.hero-copy .hero-phrase,
    body .hero>.hero-copy .hero-location,
    body .hero>.hero-copy .eyebrow{
      width:100%!important;
      text-align:center!important;
      margin-left:auto!important;
      margin-right:auto!important;
    }
  }`;
  document.head.appendChild(s);
}