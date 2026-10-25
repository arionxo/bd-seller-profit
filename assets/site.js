// Language via URL only (?lang=bn). No cookies or storage.
(function(){
  var T={
    en:{home:"Calculator",guides:"Guides",about:"About",contact:"Contact",privacy:"Privacy Policy",footer:"A planning estimate, not an accounting statement.",back:"← All guides",open:"Open the calculator"},
    bn:{home:"ক্যালকুলেটর",guides:"গাইড",about:"আমাদের সম্পর্কে",contact:"যোগাযোগ",privacy:"গোপনীয়তা নীতি",footer:"এটি পরিকল্পনার আনুমানিক হিসাব, হিসাবরক্ষণ বিবরণী নয়।",back:"← সব গাইড",open:"ক্যালকুলেটর খুলুন"}
  };
  var root=document.documentElement, sel=document.getElementById("language");
  var lang=new URLSearchParams(location.search).get("lang")==="bn"?"bn":"en";
  function withLang(href){
    if(!href||/^(mailto:|tel:|#)/.test(href)) return null;
    var u=new URL(href,location.href);
    if(u.origin!==location.origin) return null;
    if(lang==="bn") u.searchParams.set("lang","bn"); else u.searchParams.delete("lang");
    return u.href;
  }
  function apply(){
    root.lang=lang; root.classList.toggle("bn",lang==="bn");
    document.querySelectorAll("[data-i]").forEach(function(el){var t=T[lang][el.dataset.i]; if(t) el.textContent=t;});
    var t=root.getAttribute("data-title-"+lang); if(t) document.title=t;
    var d=root.getAttribute("data-desc-"+lang), m=document.querySelector('meta[name=description]'); if(d&&m) m.content=d;
    document.querySelectorAll("a[href]").forEach(function(a){var h=withLang(a.getAttribute("href")); if(h) a.setAttribute("href",h);});
    if(sel) sel.value=lang;
    var h=withLang(location.href); if(h&&h!==location.href) history.replaceState(null,"",h);
  }
  if(sel) sel.addEventListener("change",function(e){lang=e.target.value==="bn"?"bn":"en";apply();});
  apply();
})();
