import{A as g,C as c,G as w}from"./vendor.8051c3f6.js";const p=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};p();const m=async()=>{const n=new g;document.body.appendChild(n.view),document.body.style.margin="0",n.renderer.view.style.position="absolute",n.renderer.view.style.display="block",n.renderer.resize(window.innerWidth,window.innerHeight);let i=new c;n.stage.addChild(i);let r=new w;r.beginFill(15124893),r.drawRect(0,0,screen.width,screen.height),n.stage.addChild(r),new Date().getHours(),new Date().getMinutes();let d=new Date().getSeconds(),e=new c,t=new c,o=new c,a=[9611975,15554386,10600085,14868386],h=screen.height/2,f=screen.width/5,u=100,s=0;for(n.stage.addChild(e),n.stage.addChild(t),n.stage.addChild(o);d<59;){let l=new w;l.beginFill(a[s]),s>a.length-1?s=0:s+=1,l.drawCircle(f,h,u),n.stage.addChild(l),u-=3}window.addEventListener("resize",l=>{n.renderer.resize(window.innerWidth,window.innerHeight),i.x=window.innerWidth/2,i.y=window.innerHeight/2}),document.body.appendChild(n.view)};m();