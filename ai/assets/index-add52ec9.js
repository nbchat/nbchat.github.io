import{d as B,a2 as A,A as E,O as G,a1 as M,h as w,r as b,B as U,C as z,J as s,Q as i,S as a,D as e,N as I,W as l,ab as d,ac as p,R as P,_ as x,ag as V,I as W,a8 as H,ah as Q,P as $,F as Y,ai as q,aj as K,ak as X,al as Z}from"./index-13488ab8.js";function ee(){const v=new Date,r=v.getDate(),m=v.getMonth()+1;return`${v.getFullYear()}-${m}-${r}`}const te={class:"p-4 space-y-5 min-h-[200px]"},se={class:"space-y-6"},ae={class:"flex items-center space-x-4"},ne={class:"flex-shrink-0 w-[100px]"},oe={class:"flex-1"},le={class:"flex items-center space-x-4"},ie={class:"flex-shrink-0 w-[100px]"},re={class:"w-[200px]"},ce={class:"flex items-center space-x-4"},ue={class:"flex-shrink-0 w-[100px]"},de={class:"flex-1"},pe={class:"flex-shrink-0 w-[100px]"},me={class:"flex flex-wrap items-center gap-4"},fe={class:"flex items-center space-x-4"},ve={class:"flex-shrink-0 w-[100px]"},ge={class:"flex flex-wrap items-center gap-4"},he={class:"flex items-center space-x-4"},ye={class:"flex-shrink-0 w-[100px]"},_e={class:"flex flex-wrap items-center gap-4"},xe={class:"flex items-center space-x-4"},ke={class:"flex-shrink-0 w-[100px]"},$e=B({__name:"General",setup(v){const r=A(),m=E(),{isMobile:h}=G(),c=M(),y=w(()=>r.theme),u=w(()=>m.userInfo),f=b(u.value.avatar??""),C=b(u.value.name??""),S=b(u.value.description??""),D=w({get(){return r.language},set(t){r.setLanguage(t)}}),L=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],O=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"}];function N(t){m.updateUserInfo(t),c.success($("common.success"))}function T(){m.resetUserInfo(),c.success($("common.success")),window.location.reload()}function F(){const t=ee(),n=localStorage.getItem("chatStorage")||"{}",o=JSON.stringify(JSON.parse(n),null,2),g=new Blob([o],{type:"application/json"}),k=URL.createObjectURL(g),_=document.createElement("a");_.href=k,_.download=`chat-store_${t}.json`,document.body.appendChild(_),_.click(),document.body.removeChild(_)}function R(t){const n=t.target;if(!n||!n.files)return;const o=n.files[0];if(!o)return;const g=new FileReader;g.onload=()=>{try{const k=JSON.parse(g.result);localStorage.setItem("chatStorage",JSON.stringify(k)),c.success($("common.success")),location.reload()}catch{c.error($("common.invalidFileFormat"))}},g.readAsText(o)}function j(){localStorage.removeItem("chatStorage"),location.reload()}function J(){const t=document.getElementById("fileInput");t&&t.click()}return(t,n)=>(U(),z("div",te,[s("div",se,[s("div",ae,[s("span",ne,i(t.$t("setting.avatarLink")),1),s("div",oe,[a(e(I),{value:f.value,"onUpdate:value":n[0]||(n[0]=o=>f.value=o),placeholder:""},null,8,["value"])]),a(e(p),{size:"tiny",text:"",type:"primary",onClick:n[1]||(n[1]=o=>N({avatar:f.value}))},{default:l(()=>[d(i(t.$t("common.save")),1)]),_:1})]),s("div",le,[s("span",ie,i(t.$t("setting.name")),1),s("div",re,[a(e(I),{value:C.value,"onUpdate:value":n[2]||(n[2]=o=>C.value=o),placeholder:""},null,8,["value"])]),a(e(p),{size:"tiny",text:"",type:"primary",onClick:n[3]||(n[3]=o=>N({name:C.value}))},{default:l(()=>[d(i(t.$t("common.save")),1)]),_:1})]),s("div",ce,[s("span",ue,i(t.$t("setting.description")),1),s("div",de,[a(e(I),{value:S.value,"onUpdate:value":n[4]||(n[4]=o=>S.value=o),placeholder:""},null,8,["value"])]),a(e(p),{size:"tiny",text:"",type:"primary",onClick:n[5]||(n[5]=o=>N({description:S.value}))},{default:l(()=>[d(i(t.$t("common.save")),1)]),_:1})]),s("div",{class:P(["flex items-center space-x-4",e(h)&&"items-start"])},[s("span",pe,i(t.$t("setting.chatHistory")),1),s("div",me,[a(e(p),{size:"small",onClick:F},{icon:l(()=>[a(e(x),{icon:"ri:download-2-fill"})]),default:l(()=>[d(" "+i(t.$t("common.export")),1)]),_:1}),s("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:R},null,32),a(e(p),{size:"small",onClick:J},{icon:l(()=>[a(e(x),{icon:"ri:upload-2-fill"})]),default:l(()=>[d(" "+i(t.$t("common.import")),1)]),_:1}),a(e(V),{placement:"bottom",onPositiveClick:j},{trigger:l(()=>[a(e(p),{size:"small"},{icon:l(()=>[a(e(x),{icon:"ri:close-circle-line"})]),default:l(()=>[d(" "+i(t.$t("common.clear")),1)]),_:1})]),default:l(()=>[d(" "+i(t.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),s("div",fe,[s("span",ve,i(t.$t("setting.theme")),1),s("div",ge,[(U(),z(W,null,H(L,o=>a(e(p),{key:o.key,size:"small",type:o.key===e(y)?"primary":void 0,onClick:g=>e(r).setTheme(o.key)},{icon:l(()=>[a(e(x),{icon:o.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),s("div",he,[s("span",ye,i(t.$t("setting.language")),1),s("div",_e,[a(e(Q),{style:{width:"140px"},value:e(D),options:O,onUpdateValue:n[6]||(n[6]=o=>e(r).setLanguage(o))},null,8,["value"])])]),s("div",xe,[s("span",ke,i(t.$t("setting.resetUserInfo")),1),a(e(p),{size:"small",onClick:T},{default:l(()=>[d(i(t.$t("common.reset")),1)]),_:1})])])]))}}),we={class:"ml-2"},be={class:"min-h-[100px]"},Se=B({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(v,{emit:r}){const m=v,h=b("General"),c=w({get(){return m.visible},set(y){r("update:visible",y)}});return(y,u)=>(U(),Y(e(Z),{show:e(c),"onUpdate:show":u[1]||(u[1]=f=>X(c)?c.value=f:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:l(()=>[s("div",null,[a(e(q),{value:h.value,"onUpdate:value":u[0]||(u[0]=f=>h.value=f),type:"line",animated:""},{default:l(()=>[a(e(K),{name:"General",tab:"General"},{tab:l(()=>[a(e(x),{class:"text-lg",icon:"ri:file-user-line"}),s("span",we,i(y.$t("setting.general")),1)]),default:l(()=>[s("div",be,[a($e)])]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{Se as default};
