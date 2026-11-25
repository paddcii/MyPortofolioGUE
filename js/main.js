const $=(s,r=document)=>r.querySelector(s),el=(h)=>{const t=document.createElement('template');t.innerHTML=h.trim();return t.content.firstChild};
const fb=i=>i.onerror=()=>{i.onerror=null;i.removeAttribute('src');i.style.background='#1b1b1f'};
$('#cv').href=PROFILE.cv;$('#mail').href='mailto:'+PROFILE.email;$('#mail').textContent=PROFILE.email;$('#yr').textContent=new Date().getFullYear();
$('#sp').dataset.n=PROJECTS.length;$('#sc').dataset.n=CERTS.length;
$('#socials').innerHTML=SOCIALS.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join('');
$('#skills').innerHTML=[['Troubleshooting','Hardware, software, dan jaringan'],['Sistem operasi','Instalasi dan konfigurasi Windows serta Linux'],['Jaringan','TCP/IP, IPv4, subnetting, LAN, WLAN'],['Perangkat jaringan','Router, switch, access point, MikroTik'],['Perakitan komputer','Pemasangan komponen, driver, perawatan']].map(a=>`<div><b>${a[0]}</b>${a[1]}</div>`).join('');
/* kartu 1:1 */
function cards(list,box,kind){list.forEach((d,i)=>{const c=el(`<button class="card rv" style="transition-delay:${(i%3)*80}ms" aria-label="Detail ${d.title}"><img src="${d.img}" alt="${d.title}" loading="lazy"><span class="cap"><b>${d.title}</b><span>${kind=='p'?d.type:d.org+' · '+d.year}</span></span></button>`);fb($('img',c));c.onclick=()=>open(d,kind);$(box).append(c)})}
cards(PROJECTS,'#projects','p');cards(CERTS,'#certs','c');
/* modal */
const M=$('#modal');let last;
function open(d,k){last=document.activeElement;$('#mi').src=d.img;$('#mi').alt=d.title;fb($('#mi'));$('#mt').textContent=d.title;
$('#mk').textContent=k=='p'?d.type:d.org+' · '+d.year;$('#md').textContent=k=='p'?d.desc:'Sertifikat yang diterbitkan oleh '+d.org+'.';
$('#mg').innerHTML=k=='p'?d.tech.map(t=>`<span>${t}</span>`).join(''):'';
const l=$('#ml');l.hidden=!d.url;l.href=d.url||'#';l.textContent=k=='p'?'Kunjungi website':'Lihat sertifikat';
M.hidden=false;document.body.style.overflow='hidden';$('.x',M).focus()}
function close(){M.hidden=true;document.body.style.overflow='';last&&last.focus()}
M.addEventListener('click',e=>e.target.hasAttribute('data-close')&&close());
addEventListener('keydown',e=>{if(e.key=='Escape'&&!M.hidden)close()});
/* nav */
const nav=$('#nav'),menu=$('#menu'),bur=$('#burger'),bar=$('#bar'),hero=$('.portrait img');
bur.onclick=()=>{const o=menu.classList.toggle('open');bur.setAttribute('aria-expanded',o)};
menu.onclick=e=>{if(e.target.tagName=='A'){menu.classList.remove('open');bur.setAttribute('aria-expanded',false)}};
let tk=false;addEventListener('scroll',()=>{if(tk)return;tk=true;requestAnimationFrame(()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
nav.classList.toggle('on',y>20);bar.style.width=(y/h*100)+'%';if(y<innerHeight)hero.style.transform=`translateY(${y*.06}px) scale(1.04)`;tk=false})},{passive:true});
/* reveal, counter, active link */
const cnt=e=>{const n=+e.dataset.n,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1200,1);e.textContent=Math.round(n*(1-Math.pow(1-p,3)));p<1&&requestAnimationFrame(f)})(t0)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(n=>io.observe(n));
setTimeout(()=>document.querySelectorAll('.stats dt').forEach(cnt),500);
const links=[...menu.querySelectorAll('a')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('act',a.getAttribute('href')=='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>so.observe(s));
/* teks role berganti */
const rl=$('#role');let ri=0,ci=0,del=false;
(function tp(){const w=PROFILE.roles[ri];ci+=del?-1:1;rl.textContent=w.slice(0,ci);let d=del?35:70;
if(!del&&ci==w.length){del=true;d=1400}else if(del&&ci==0){del=false;ri=(ri+1)%PROFILE.roles.length;d=300}setTimeout(tp,d)})();

