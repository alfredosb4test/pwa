var p=Object.create;var i=Object.defineProperty,q=Object.defineProperties,r=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,u=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var k=(b,a,c)=>a in b?i(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c,x=(b,a)=>{for(var c in a||={})l.call(a,c)&&k(b,c,a[c]);if(j)for(var c of j(a))v.call(a,c)&&k(b,c,a[c]);return b},y=(b,a)=>q(b,s(a));var z=(b,a)=>()=>(a||b((a={exports:{}}).exports,a),a.exports);var w=(b,a,c,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let d of t(a))!l.call(b,d)&&d!==c&&i(b,d,{get:()=>a[d],enumerable:!(e=r(a,d))||e.enumerable});return b};var A=(b,a,c)=>(c=b!=null?p(u(b)):{},w(a||!b||!b.__esModule?i(c,"default",{value:b,enumerable:!0}):c,b));var m=(b,a,c)=>{if(!a.has(b))throw TypeError("Cannot "+c)};var B=(b,a,c)=>(m(b,a,"read from private field"),c?c.call(b):a.get(b)),C=(b,a,c)=>{if(a.has(b))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(b):a.set(b,c)},D=(b,a,c,e)=>(m(b,a,"write to private field"),e?e.call(b,c):a.set(b,c),c);var E=(b,a,c)=>new Promise((e,d)=>{var n=f=>{try{g(c.next(f))}catch(h){d(h)}},o=f=>{try{g(c.throw(f))}catch(h){d(h)}},g=f=>f.done?e(f.value):Promise.resolve(f.value).then(n,o);g((c=c.apply(b,a)).next())});export{x as a,y as b,z as c,A as d,B as e,C as f,D as g,E as h};
