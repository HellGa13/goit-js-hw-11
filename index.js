import{a as g,S as E,i as m}from"./assets/vendor-Bjf4rVHN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();g.defaults.baseURL="https://pixabay.com/api/";function b(s,o={}){const r={key:"49206664-0ec6b9af3cdb6ffe721ed5088",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,...o};return g.get("",{params:r}).then(n=>n.data).catch(n=>{throw n})}function w(s){console.log("Дані для рендерингу:",s);const o=document.querySelector(".gallery"),r=s.map(n=>{const{webformatURL:e,largeImageURL:t,likes:i,views:h,tags:y,comments:S,downloads:v}=n,c=document.createElement("li");c.classList.add("gallery-item");const l=document.createElement("a");l.classList.add("gallery-link"),l.href=t;const a=document.createElement("img");a.classList.add("gallery-image"),a.src=e,a.alt=y,a.width=360,a.height=200,c.appendChild(l),l.appendChild(a);const d=document.createElement("div");return d.classList.add("gallery-item-info"),d.innerHTML=`
  <div class="item-info-container">
    <span class="description-name">Likes</span>
    <span class="description-counts">${i}</span>
  </div>
  <div class="item-info-container">
    <span class="description-name">Views</span>
    <span class="description-counts">${h}</span>
  </div>
  <div class="item-info-container">
    <span class="description-name">Comments</span>
    <span class="description-counts">${S}</span>
  </div>
  <div class="item-info-container">
    <span class="description-name">Downloads</span>
    <span class="description-counts">${v}</span>
  </div>
`,c.appendChild(d),c});o.append(...r)}function L(){const s=document.querySelector(".gallery");s.innerHTML=""}const C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC",A=document.querySelector(".form"),u=document.querySelector(".loader");document.querySelector(".gallery");const f={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",iconUrl:C};let p=new E(".gallery a",{captions:!0,captionsData:"alt",captionType:"attr",captionDelay:250,animationSpeed:350,captionPosition:"bottom"});p.on("show.simplelightbox",function(){});p.on("error.simplelightbox",function(s){console.log(s)});A.addEventListener("submit",q);function q(s){s.preventDefault();const o=s.currentTarget.elements.searchQuery.value.trim();o&&(u.classList.remove("visually-hidden"),L(),A.reset(),b(o).then(r=>{const n=r.hits;if(console.log("Отримані дані:",n),n.length===0){m.show(f);return}w(r.hits),p.refresh()}).catch(r=>{m.show(f)}).finally(()=>{u.classList.add("visually-hidden")}))}
//# sourceMappingURL=index.js.map
