(()=>{"use strict";var e,n={138:(e,n,i)=>{var o=i(689),t=i(376),r=i(477),l=i(844),a=i.n(l);fetch("json/inside-corona.json").then((e=>e.json())).then((e=>{e.links.forEach((n=>{const i=e.nodes[n.source],o=e.nodes[n.target];!i.neighbors&&(i.neighbors=[]),!o.neighbors&&(o.neighbors=[]),i.neighbors.push(o),o.neighbors.push(i),!i.links&&(i.links=[]),!o.links&&(o.links=[]),i.links.push(n),o.links.push(n)}));const n=new Set,i=new Set;let l=null;const s=(0,o.Z)()(document.getElementById("graph")).nodeThreeObject((e=>{const n=(new r.dpR).load(`${e.image}`),i=new r.xeV({map:n}),o=new r.jyi(i);return o.scale.set(14,14),o})).height(document.querySelector("#graph").offsetHeight).showNavInfo(!1).graphData(e).dagMode(null).nodeLabel("title").linkLabel("title").linkWidth((e=>i.has(e)?1:.5)).linkOpacity(.4).linkDirectionalParticles((e=>i.has(e)?2:0)).linkDirectionalParticleColor((()=>"red")).linkDirectionalParticleSpeed(.005).linkDirectionalParticleWidth(1).onNodeHover((e=>{!e&&!n.size||e&&l===e||(n.clear(),i.clear(),e&&(n.add(e),e.neighbors.forEach((e=>n.add(e))),e.links.forEach((e=>i.add(e)))),l=e||null,m())})).onLinkHover((e=>{n.clear(),i.clear(),e&&(i.add(e),n.add(e.source),n.add(e.target)),m()})).onNodeClick((e=>{document.getElementById("info").innerHTML="<h2>"+e.title+'</h2><img src="'+e.image+'" align="left"><p>Group: '+e.group+"</p><p>"+e.notes+"</p>"})).onBackgroundClick((e=>{s.zoomToFit(400)})).onNodeRightClick((e=>{let n=new RegExp(e.title,"gi");""!=d.Search&&null===d.Search.match(n)?d.Search=d.Search+"|^"+e.title+"$":""==d.Search&&(d.Search="^"+e.title+"$"),p()})).onNodeDragEnd((e=>{e.fx=e.x,e.fy=e.y,e.fz=e.z})).onLinkClick((e=>{e.link.length&&(window.open(e.link),window.focus())}));a()().listenTo(document.getElementById("graph"),(e=>s.width(e.offsetWidth)));const d={Orientation:null,"Link Length":80,Dimensions:3,Search:"",Simplify:1,"Link Force":!1,"Hide Info Panel":!1},c=new t.XS,h=c.addFolder("General");h.add(d,"Simplify",1,10,1).listen().onChange((function(){p()})),h.add(d,"Link Length",0,200).listen().onChange((function(){d["Link Force"]=!1,s.d3Force("link").distance(d["Link Length"]),s.numDimensions(d.Dimensions)})),h.add(d,"Hide Info Panel").listen().onChange((function(){d["Hide Info Panel"]?(document.getElementById("info").style.display="none",document.getElementById("graph").style.height="100vh",s.height(document.querySelector("#graph").offsetHeight).zoomToFit(400)):(document.getElementById("info").style.display="block",document.getElementById("graph").style.height="70vh",s.height(document.querySelector("#graph").offsetHeight).zoomToFit(400))}));const u=h.add(d,"Search").listen().onFinishChange((function(e){p()}));h.open();const g=c.addFolder("Groups");e.groups.forEach((e=>{d[e]=!0,g.add(d,e).listen().onChange((function(){p()}))}));const f=c.addFolder("Advanced");function p(){let n=e.nodes,i=e.links,o=[];d.Simplify>1&&(n=n.filter((e=>e.neighbors.length>=d.Simplify)),n.forEach((e=>{o.push(e.id)})),i=i.filter((e=>o.includes(e.source.id)&&o.includes(e.target.id))));let t=[];if(e.groups.forEach((n=>{d[n]&&e.nodes.filter((e=>e.group==n)).forEach((e=>{t.push(e.id)}))})),t=[...new Set(t)],n=n.filter((e=>t.includes(e.id))),i=i.filter((e=>t.includes(e.source.id)&&t.includes(e.target.id))),""!==u.object.Search){let e=[],o=u.object.Search.replace(/[.*+?{}()[\]\\]/g,"\\$&"),r=new RegExp(o,"gi"),l=n.filter((e=>!!e.title.match(r))),a=i.filter((e=>!!e.title.match(r)));l.forEach((n=>{t.includes(n.id)&&e.push(n.id)})),l.forEach((n=>{n.neighbors.forEach((i=>{t.includes(n.id)&&e.push(i.id)}))})),a.forEach((n=>{t.includes(n.source.id)&&t.includes(n.target.id)&&e.push(n.source.id,n.target.id)})),e=[...new Set(e)],n=n.filter((n=>e.includes(n.id))),i=i.filter((n=>e.includes(n.source.id)&&e.includes(n.target.id)))}s.graphData({nodes:n,links:i}),s.numDimensions(d.Dimensions)}function m(){s.linkWidth(s.linkWidth()).linkDirectionalParticles(s.linkDirectionalParticles())}f.add(d,"Orientation",[null,"td","bu","lr","rl","zout","zin","radialout","radialin"]).onChange((e=>s&&s.dagMode(e)&&s.numDimensions(d.Dimensions))),f.add(d,"Dimensions",["2","3"]).onChange((e=>s&&s.dagMode(d.Orientation)&&s.numDimensions(e))),f.add(d,"Link Force").listen().onChange((function(){d["Link Force"]?(s.d3Force("link").distance((e=>1/(e.source.neighbors.length+e.target.neighbors.length)*1e3)),s.numDimensions(d.Dimensions)):(s.d3Force("link").distance(d["Link Length"]),s.numDimensions(d.Dimensions))}))}))}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.m=n,e=[],o.O=(n,i,t,r)=>{if(!i){var l=1/0;for(c=0;c<e.length;c++){for(var[i,t,r]=e[c],a=!0,s=0;s<i.length;s++)(!1&r||l>=r)&&Object.keys(o.O).every((e=>o.O[e](i[s])))?i.splice(s--,1):(a=!1,r<l&&(l=r));if(a){e.splice(c--,1);var d=t();void 0!==d&&(n=d)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,t,r]},o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var i in n)o.o(n,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0};o.O.j=n=>0===e[n];var n=(n,i)=>{var t,r,[l,a,s]=i,d=0;if(l.some((n=>0!==e[n]))){for(t in a)o.o(a,t)&&(o.m[t]=a[t]);if(s)var c=s(o)}for(n&&n(i);d<l.length;d++)r=l[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},i=self.webpackChunkinside_corona_angst_frei_ch=self.webpackChunkinside_corona_angst_frei_ch||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var t=o.O(void 0,[838],(()=>o(138)));t=o.O(t)})();