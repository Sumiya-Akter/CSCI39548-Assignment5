(this.webpackJsonpzip_code_search=this.webpackJsonpzip_code_search||[]).push([[0],{24:function(t,e,a){},26:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),s=a(13),r=a.n(s),i=(a(24),a(4)),o=a.n(i),l=a(14),d=a(15),h=a(16),p=a(19),u=a(18),j=(a(26),a(17)),b=a.n(j),O=a(0),x=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).handleInputChange=function(t){n.setState({Zip:t.target.value})},n.handleSearchClick=Object(l.a)(o.a.mark((function t(){var e,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.state.Zip,a="https://ctp-zip-api.herokuapp.com/zip/"+e,console.log(n.state.Zip),t.prev=3,t.next=6,b.a.get(a);case 6:c=t.sent,n.setState({apiData:c.data,found:!0}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),t.t0.response&&(console.log("Error Data: ",t.t0.response.data),console.log("Error Status: ",t.t0.response.status),n.setState({found:!1}));case 13:case"end":return t.stop()}}),t,null,[[3,10]])}))),n.makeTable=function(){var t=n.state.apiData,e=[];if(n.state.found){for(var a=0;a<t.length;a++)e.push(Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:["State: ",t[a].State,","]}),Object(O.jsxs)("td",{children:["Location: ",t[a].Lat,", ",t[a].Long,","]}),Object(O.jsxs)("td",{children:["Estimated Population: ",t[a].EstimatedPopulation,","]}),Object(O.jsxs)("td",{children:["Total Wages: ",t[a].TotalWages]})]},t[a].id));return e}return e.push(Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:"No Results"})},-1)),e},n.state={apiData:[],Zip:"",found:!1},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("div",{className:"App-header",children:[Object(O.jsx)("h3",{children:"Zip Code Search: "}),Object(O.jsx)("input",{type:"text",value:this.state.Zip,placeholder:"zip code",onChange:this.handleInputChange}),Object(O.jsx)("button",{className:"search-zip",onClick:this.handleSearchClick,children:"Search"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("table",{id:"data",children:Object(O.jsx)("tbody",{children:this.makeTable()})})]})}}]),a}(n.Component),f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),s(t),r(t)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root")),f()}},[[46,1,2]]]);
//# sourceMappingURL=main.10536f44.chunk.js.map