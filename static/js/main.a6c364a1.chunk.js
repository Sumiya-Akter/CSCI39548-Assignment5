(this.webpackJsonpzip_code_search=this.webpackJsonpzip_code_search||[]).push([[0],{24:function(t,e,a){},26:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a.n(n),c=a(13),o=a.n(c),r=(a(24),a(4)),i=a.n(r),l=a(14),d=a(15),h=a(16),p=a(19),u=a(18),j=(a(26),a(17)),b=a.n(j),g=a(0),O=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).handleInputChange=function(t){n.setState({Zip:t.target.value})},n.handleSearchClick=Object(l.a)(i.a.mark((function t(){var e,a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.state.Zip,a="https://ctp-zip-api.herokuapp.com/zip/"+e,console.log(n.state.Zip),t.prev=3,t.next=6,b.a.get(a);case 6:s=t.sent,n.setState({apiData:s.data,found:!0}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),t.t0.response&&(console.log("Error Data: ",t.t0.response.data),console.log("Error Status: ",t.t0.response.status),n.setState({found:!1}));case 13:case"end":return t.stop()}}),t,null,[[3,10]])}))),n.makeTable=function(){var t=n.state.apiData;console.log("apiData: ",t);var e=n.state.found;console.log("match: ",e);var a=[];if(e){for(var s=0;s<t.length;s++)console.log("State: ",t[s].State),console.log("Population: ",t[s].EstimatedPopulation),console.log("Wages: ",t[s].TotalWages),a.push(Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:["City: ",t[s].City]}),Object(g.jsxs)("td",{children:["State: ",t[s].State]}),Object(g.jsxs)("td",{children:["Total Wages: ",t[s].TotalWages]}),Object(g.jsxs)("td",{children:["Estimated Population: ",t[s].EstimatedPopulation]})]},t[s].id));return a}return console.log("No result found"),a.push(Object(g.jsx)("tr",{children:Object(g.jsx)("td",{children:"No Results"})},-1)),a},n.state={apiData:[],Zip:"",found:!1},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{className:"App-header",children:[Object(g.jsx)("h3",{children:"Zip Code Search: "}),Object(g.jsx)("input",{type:"text",value:this.state.Zip,placeholder:"zip code",onChange:this.handleInputChange}),Object(g.jsx)("button",{className:"search-zip",onClick:this.handleSearchClick,children:"Search"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("table",{id:"data",children:Object(g.jsx)("tbody",{children:this.makeTable()})})]})}}]),a}(n.Component),f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),n(t),s(t),c(t),o(t)}))};o.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root")),f()}},[[46,1,2]]]);
//# sourceMappingURL=main.a6c364a1.chunk.js.map