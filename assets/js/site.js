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

/* Desktop header + homepage hero refinement */
if(document.querySelector('.header-featured')){
  const s=document.createElement('style');
  s.textContent=`
  @media (min-width:801px){
    body .header{
      height:120px!important;
      display:grid!important;
      grid-template-columns:auto 1fr!important;
      grid-template-rows:42px 42px!important;
      align-content:center!important;
      align-items:center!important;
      column-gap:32px!important;
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
      padding:0 0 6px!important;
      font-size:9px!important;
      letter-spacing:.09em!important;
    }
    body .header>#nav{
      grid-column:2!important;
      grid-row:2!important;
      justify-self:end!important;
      align-self:start!important;
      display:flex!important;
      align-items:center!important;
      justify-content:flex-end!important;
      gap:20px!important;
      margin:0!important;
      padding:6px 0 0!important;
      font-size:10px!important;
      letter-spacing:.10em!important;
    }
    body .header>.menu{display:none!important}

    body .hero{
      grid-template-columns:minmax(330px,42%) 1fr!important;
      gap:6vw!important;
      padding-top:42px!important;
      padding-bottom:58px!important;
      align-items:center!important;
    }
    body .hero>.hero-image>img{
      width:min(84%,390px)!important;
      max-width:390px!important;
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
      max-width:none!important;
      margin:14px auto 26px!important;
      text-align:center!important;
      font-size:clamp(48px,4.3vw,68px)!important;
      line-height:.95!important;
      letter-spacing:-.035em!important;
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

/* Maribel requested photo swap: writing portrait replaces the red-suit portrait. */
const authorPortrait=document.querySelector('#autora .portrait img');
const culturePortrait=document.querySelector('#cultura .culture-image img');
if(authorPortrait&&culturePortrait){
  authorPortrait.src='assets/maribel-cultura.png';
  culturePortrait.src='assets/maribel-hero.png';
}

/* Published works and recognitions — Maribel 2026 supplied list. */
const obraWrap=document.querySelector('#obra .wrap');
if(obraWrap){
  const movements=[...obraWrap.querySelectorAll('.movement')];
  const render=(el,num,label,title,items)=>{
    if(!el)return;
    el.innerHTML=`<div class="movement-head"><b>${num}</b><div><p class="eyebrow">${label}</p><h3>${title}</h3></div></div><div class="work-list">${items.map(i=>`<p><em>${i[0]}</em><strong>${i[1]}</strong><span>${i[2]||''}</span></p>`).join('')}</div>`;
  };
  render(movements[0],'I','Libros individuales','Obra publicada',[
    ['2014','Frases y Pensamientos de superación personal',''],
    ['2016','¡Aquí tierra llamando al humano! ¡Rescatemos los valores!',''],
    ['2018','Las moléculas juguetonas',''],
    ['2019','Ilusiones al vuelo',''],
    ['2025','Las moléculas juguetonas · 2a edición','Best Seller en Amazon'],
    ['2025','Audiocuento: Las moléculas juguetonas',''],
    ['2020','Ciudad de Robots y otros cuentos para reflexionar','Versión en inglés y español'],
    ['2021','Ciudad de Robots y otros cuentos para reflexionar, lectura y redacción','Versión en inglés y español · Best Seller en Amazon'],
    ['2021','Huellas del tiempo',''],
    ['2023','Mente Imparable sueños de Amor, Magia y Aventuras','Best Seller en Amazon'],
    ['2024','Unstoppable Mind; Dreams of Love. Magic and Adventures','Best Seller en Amazon'],
    ['2024','Secretos Para Escribir y Publicar tu libro','Best Seller en Amazon'],
    ['2025','Manual de Azomalli','Estrategias grupales e individuales para fomentar la paz'],
    ['2026','Azomalli; La superheroína de la paz','']
  ]);
  render(movements[1],'II','Antologías compiladas','Voces compartidas',[
    ['2018','Entre verso y cuento baila la tinta',''],
    ['2018','Vientos de Paz',''],
    ['2019','Pasos hacia la paz',''],
    ['2019','Dos tazas de Romance',''],
    ['2019','Caricias Rosas',''],
    ['2019','Recorrido Poético Mexiquense',''],
    ['2022','Mujeres Guerreras. Vidas que inspiran: Homenaje',''],
    ['2022','Recorrido Mexicano; una mirada poética','Editorial CIGOME · Homenaje a los estados de la República'],
    ['2024','Voces por la paz y el Medio Ambiente',''],
    ['2026','Diálogos Jurídicos; Miradas interdisciplinarias en busca de paz','']
  ]);
  render(movements[2],'III','Reconocimientos','Distinciones',[
    ['2019','Premio Gaviota Internacional',''],
    ['2023','Mujer Líder','Fundación Cultural Forjadores de México'],
    ['2024','Galardón Forjadores de México','Cultura de Paz y Derechos Humanos'],
    ['2019 · 2021 · 2023','Reconocimiento al Mérito Humanitario','Hayek Production International'],
    ['2022–2026','Premio Las Palmas de México',''],
    ['2024','Pergamino al Mérito Educativo “Laura Méndez de Cuenca”','Sociedad de Geografía y Estadística del Estado de México'],
    ['—','Pergamino al Mérito Humanista “Ifigenia Martínez Hernández”','Sociedad de Geografía y Estadística del Estado de México · Cámara de Diputados'],
    ['—','Doctorado Honoris Causa','Universidad Internacional de Desarrollo Humano y Liderazgo e Instituto Universitario UEEM']
  ]);

  /* Keep I, II and III compact: centered heading + two-column list on desktop. */
  [movements[0],movements[1],movements[2]].forEach(m=>m&&m.classList.add('movement-compact'));
  const worksCompactStyle=document.createElement('style');
  worksCompactStyle.textContent=`
    #obra .movement-compact{
      display:block!important;
      padding:58px 0!important;
    }
    #obra .movement-compact .movement-head{
      display:flex!important;
      flex-direction:column!important;
      align-items:center!important;
      justify-content:center!important;
      gap:8px!important;
      margin:0 auto 34px!important;
      text-align:center!important;
    }
    #obra .movement-compact .movement-head>b{
      font-size:58px!important;
      line-height:.82!important;
    }
    #obra .movement-compact .movement-head .eyebrow{
      margin:0 0 7px!important;
      text-align:center!important;
    }
    #obra .movement-compact .movement-head h3{
      margin:0!important;
      text-align:center!important;
    }
    #obra .movement-compact .work-list{
      display:grid!important;
      grid-template-columns:repeat(2,minmax(0,1fr))!important;
      column-gap:48px!important;
      row-gap:0!important;
    }
    #obra .movement-compact .work-list p{
      display:grid!important;
      grid-template-columns:58px minmax(0,1fr)!important;
      gap:6px 14px!important;
      align-content:start!important;
      padding:17px 0!important;
      margin:0!important;
      border-top:1px solid var(--line)!important;
    }
    #obra .movement-compact .work-list p:nth-child(-n+2){
      border-top:0!important;
    }
    #obra .movement-compact .work-list em{
      grid-column:1!important;
      grid-row:1 / span 2!important;
      font-size:20px!important;
    }
    #obra .movement-compact .work-list strong{
      grid-column:2!important;
      font-size:20px!important;
      line-height:1.15!important;
    }
    #obra .movement-compact .work-list span{
      grid-column:2!important;
      font-size:11px!important;
      line-height:1.4!important;
    }
    @media(max-width:800px){
      #obra .movement-compact{
        padding:48px 0!important;
      }
      #obra .movement-compact .work-list{
        grid-template-columns:1fr!important;
      }
      #obra .movement-compact .work-list p:nth-child(2){
        border-top:1px solid var(--line)!important;
      }
    }
  `;
  document.head.appendChild(worksCompactStyle);
}

/* Consistent editorial alignment for all homepage reading paragraphs. */
const proseStyle=document.createElement('style');
proseStyle.textContent=`
  .books .intro,
  .featured p:not(.eyebrow),
  .book p:not(.eyebrow),
  .author-grid>div:last-child>p,
  #autora .author-continuation>p,
  #gruem .dark-intro,
  #gruem .three p,
  .culture-copy>p:not(.eyebrow),
  .steps article p,
  .editorial-grid>div:first-child>p:not(.eyebrow):not(.lead),
  .editorial-points p,
  .contact>.wrap>p:not(.eyebrow),
  .contact .news>p:not(.eyebrow){
    text-align:justify!important;
    text-justify:inter-word;
    hyphens:auto;
  }

  #gruem .dark-intro{
    width:min(760px,100%)!important;
    margin-left:auto!important;
    margin-right:auto!important;
  }

  #gruem .three p{
    text-align-last:justify!important;
  }

  .hero p,
  .eyebrow,
  .lead,
  .location,
  .work-list p{
    text-align:inherit;
  }
`;
document.head.appendChild(proseStyle);

/* La autora: keep the opening beside the portrait, then use the full width below it. */
const authorFlowStyle=document.createElement('style');
authorFlowStyle.textContent=`
  #autora .author-grid{
    align-items:start!important;
  }
  #autora .portrait{
    align-self:start!important;
  }
  #autora .portrait img{
    margin-left:auto!important;
    margin-right:auto!important;
  }
  #autora .author-continuation{
    margin-top:38px;
    padding-top:30px;
    border-top:1px solid rgba(181,154,106,.42);
  }
  #autora .author-continuation>p{
    width:100%!important;
    max-width:none!important;
    margin:0 0 18px;
  }
  #autora .author-continuation blockquote{
    max-width:980px;
    margin:36px auto 30px;
  }
  @media (min-width:801px){
    #autora .author-grid{
      grid-template-columns:minmax(0,44%) 1fr!important;
      gap:7vw!important;
    }
    #autora .portrait{
      width:100%!important;
    }
    #autora .portrait img{
      width:min(100%,460px)!important;
      max-width:460px!important;
    }
  }
  @media (max-width:800px){
    #autora .author-continuation{
      margin-top:26px;
      padding-top:24px;
    }
  }
`;
document.head.appendChild(authorFlowStyle);

/* GRUEM serves as the visual group mark in this section. */
const gruemLabel=document.querySelector('#gruem .eyebrow.gold');
if(gruemLabel){
  gruemLabel.style.cssText='font-family:"Cormorant Garamond",serif;font-size:clamp(34px,5vw,58px);font-weight:600;line-height:.9;letter-spacing:.06em;margin:0 0 18px;text-align:center';
}

/* QUICIO builder credit — subtle brand mark in every site footer. */
const siteFooter=document.querySelector('footer');
if(siteFooter && !siteFooter.querySelector('.quicio-credit')){
  const scriptEl=[...document.scripts].find(s=>s.src.includes('/assets/js/site.js'));
  const logoUrl=scriptEl ? new URL('../quicio-logo.svg',scriptEl.src).href : 'assets/quicio-logo.svg';
  const credit=document.createElement('div');
  credit.className='quicio-credit';
  credit.setAttribute('aria-label','Sitio construido por QUICIO');
  credit.innerHTML=`<img src="${logoUrl}" alt="QUICIO"><span>Sitio construido por <strong>QUICIO</strong></span>`;
  credit.style.cssText='display:flex;align-items:center;justify-content:center;gap:8px;margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.12);width:min(360px,90%);font-size:9px;letter-spacing:.12em;text-transform:uppercase;opacity:.72';
  const logo=credit.querySelector('img');
  if(logo) logo.style.cssText='width:22px;height:22px;object-fit:contain;border-radius:7px;flex:0 0 auto';
  siteFooter.appendChild(credit);
}
