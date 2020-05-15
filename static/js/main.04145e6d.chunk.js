(this["webpackJsonpcovid19-react-app"]=this["webpackJsonpcovid19-react-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},2:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){},3:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),s=(a(24),a(2),a(3),a(4)),o=a(5),d=a(8),i=a(7),m=a(6),u=a.n(m),E=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!0,items:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json",{}).then((function(t){e.setState({items:t.data.statewise[0]})})).catch((function(e){}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?r.a.createElement("div",null,"Error Occurred...."):a?r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"card text-center mt-5 mb-3 ml-1 mr-1 shadow bg-white"},r.a.createElement("div",{class:"card-header bg-dark text-light"},"COVID Updates (INDIA)"),r.a.createElement("div",{class:"card-body text-center"},r.a.createElement("div",{class:"table-responsive"},r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",class:"text-primary"},"Active"),r.a.createElement("th",{scope:"col",class:"text-warning"},"Confirmed"),r.a.createElement("th",{scope:"col",class:"text-success"},"Recovered"),r.a.createElement("th",{scope:"col",class:"text-danger"},"Deceased"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"col"},r.a.createElement("button",{class:"btn btn-primary mr-1"},n.active)),r.a.createElement("td",{scope:"col"},r.a.createElement("button",{class:"btn btn-warning mr-1 text-dark"},n.confirmed,r.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},n.deltaconfirmed," \u21e7"))),r.a.createElement("td",{scope:"col"},r.a.createElement("button",{class:"btn btn-success mr-1"},n.recovered,r.a.createElement("span",{class:"badge badge-light ml-2 text-success"},n.deltarecovered," \u21e7"))),r.a.createElement("td",{scope:"col"},r.a.createElement("button",{class:"btn btn-danger mr-1"},n.deaths,r.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},n.deltadeaths," \u21e7")))))))),r.a.createElement("div",{class:"card-footer text-success"},"Last Updated at ",n.lastupdatedtime))):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component),p=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!0,items:[],lastUpdate:null},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json",{}).then((function(t){e.setState({items:t.data.statewise,lastUpdate:t.data.statewise[0].lastupdatedtime})})).catch((function(e){}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items,c=e.lastUpdate;return t?r.a.createElement("div",null,"Error Occurred...."):a?r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"card text-center mt-5 mb-3 ml-1 mr-1 shadow bg-white"},r.a.createElement("div",{class:"card-header bg-dark text-light"},"COVID Updates (STATE WISE)"),r.a.createElement("div",{class:"card-body text-center"},r.a.createElement("center",null,r.a.createElement("div",{class:"table-responsive"},r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",class:"text-dark",colSpan:"4"},"Name of State"))),r.a.createElement("tbody",null,n.map((function(e,t){if(t>=1&&t<=n.length)return r.a.createElement("div",null,r.a.createElement("tr",{class:"table-dark"},r.a.createElement("td",{scope:"col",colSpan:"4"},r.a.createElement("button",{class:"btn btn-dark mr-1"},e.state))),r.a.createElement("tr",null,r.a.createElement("td",{scope:"col",class:"text-primary"},"Active"),r.a.createElement("td",{scope:"col",class:"text-warning"},"Confirmed"),r.a.createElement("td",{scope:"col",class:"text-success"},"Recovered"),r.a.createElement("td",{scope:"col",class:"text-danger"},"Deceased")),r.a.createElement("tr",null,r.a.createElement("td",{scope:"col"},r.a.createElement("button",{class:"btn btn-primary mr-1"},e.active)),r.a.createElement("td",{scope:"col"},r.a.createElement("button",{class:"btn btn-warning mr-1 text-dark"},e.confirmed,r.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},e.deltaconfirmed," \u21e7"))),r.a.createElement("td",{scope:"col"},r.a.createElement("button",{class:"btn btn-success mr-1"},e.recovered,r.a.createElement("span",{class:"badge badge-light ml-2 text-success"},e.deltarecovered," \u21e7"))),r.a.createElement("td",{scope:"col"},r.a.createElement("button",{class:"btn btn-danger mr-1"},e.deaths,r.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},e.deltadeaths," \u21e7")))))}))))))),r.a.createElement("div",{class:"card-footer text-success"},"Last Updated at ",c))):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(p,null))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{class:"navbar-brand",href:"#"},"Swastha Sebok"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{class:"nav-link",href:"#"},"Home ",r.a.createElement("span",{class:"sr-only"},"(current)"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"#"},"About")),r.a.createElement("li",{class:"nav-item dropdown"},r.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Services"),r.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{class:"dropdown-item",href:"#"},"COVID Status"),r.a.createElement("a",{class:"dropdown-item",href:"#"},"Self Assess"),r.a.createElement("div",{class:"dropdown-divider"},"Media"),r.a.createElement("a",{class:"dropdown-item",href:"#"},"Govt Rules & FAQs"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link disabled",href:"#"},"Helpline"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),l.a.render(r.a.createElement(v,null),document.getElementById("header")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.04145e6d.chunk.js.map