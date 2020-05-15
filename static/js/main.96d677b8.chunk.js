(this["webpackJsonpcovid19-react-app"]=this["webpackJsonpcovid19-react-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},2:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){},3:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),r=a.n(c),s=(a(24),a(2),a(3),a(4)),o=a(5),d=a(8),i=a(7),m=a(6),p=a.n(m),u=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!0,items:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.covid19india.org/data.json",{}).then((function(t){e.setState({items:t.data.statewise[0]})})).catch((function(e){}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?l.a.createElement("div",null,"Error Occurred...."):a?l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"card text-center mt-5 mb-3 ml-1 mr-1 shadow bg-white"},l.a.createElement("div",{class:"card-header bg-dark text-light"},"COVID Updates (INDIA)"),l.a.createElement("div",{class:"card-body text-center"},l.a.createElement("div",{class:"table-responsive"},l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",class:"text-primary"},"Active"),l.a.createElement("th",{scope:"col",class:"text-warning"},"Confirmed"),l.a.createElement("th",{scope:"col",class:"text-success"},"Recovered"),l.a.createElement("th",{scope:"col",class:"text-danger"},"Deceased"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"col"},l.a.createElement("button",{class:"btn btn-primary mr-1"},n.active)),l.a.createElement("td",{scope:"col"},l.a.createElement("button",{class:"btn btn-warning mr-1 text-dark"},n.confirmed,l.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},n.deltaconfirmed," \u21e7"))),l.a.createElement("td",{scope:"col"},l.a.createElement("button",{class:"btn btn-success mr-1"},n.recovered,l.a.createElement("span",{class:"badge badge-light ml-2 text-success"},n.deltarecovered," \u21e7"))),l.a.createElement("td",{scope:"col"},l.a.createElement("button",{class:"btn btn-danger mr-1"},n.deaths,l.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},n.deltadeaths," \u21e7")))))))),l.a.createElement("div",{class:"card-footer text-success"},"Last Updated at ",n.lastupdatedtime))):l.a.createElement("div",null,"Loading...")}}]),a}(l.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!0,items:[],lastUpdate:null},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.covid19india.org/data.json",{}).then((function(t){e.setState({items:t.data.statewise,lastUpdate:t.data.statewise[0].lastupdatedtime})})).catch((function(e){}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items,c=e.lastUpdate;return t?l.a.createElement("div",null,"Error Occurred...."):a?l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"card text-center mt-5 mb-3 ml-1 mr-1 shadow bg-white"},l.a.createElement("div",{class:"card-header bg-dark text-light"},"COVID Updates (STATE WISE)"),l.a.createElement("div",{class:"card-body text-center"},l.a.createElement("div",{class:"table-responsive"},l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",class:"text-dark",colSpan:"4"},"Name of State"))),l.a.createElement("tbody",null,n.map((function(e,t){if(t>=1&&t<=n.length)return l.a.createElement("div",null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"col",colSpan:"4",style:"bg-dark font-weight-bold"},l.a.createElement("button",{class:"btn btn-dark mr-1"},e.state))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",class:"text-primary"},"Active"),l.a.createElement("th",{scope:"col",class:"text-warning"},"Confirmed"),l.a.createElement("th",{scope:"col",class:"text-success"},"Recovered"),l.a.createElement("th",{scope:"col",class:"text-danger"},"Deceased")),l.a.createElement("tr",null,l.a.createElement("td",{scope:"col"},l.a.createElement("p",{class:"text-primary font-weight-bold"},e.active)),l.a.createElement("td",{scope:"col"},l.a.createElement("p",{class:"text-warning font-weight-bold"},e.confirmed,l.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},e.deltaconfirmed," \u21e7"))),l.a.createElement("td",{scope:"col"},l.a.createElement("p",{class:"text-success font-weight-bold"},e.recovered,l.a.createElement("span",{class:"badge badge-light ml-2 text-success"},e.deltarecovered," \u21e7"))),l.a.createElement("td",{scope:"col"},l.a.createElement("p",{class:"text-danger font-weight-bold"},e.deaths,l.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},e.deltadeaths," \u21e7")))))})))))),l.a.createElement("div",{class:"card-footer text-success"},"Last Updated at ",c))):l.a.createElement("div",null,"Loading...")}}]),a}(l.a.Component);var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement(E,null))};var b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{class:"navbar-brand",href:"#"},"Swastha Sebok"),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{class:"navbar-nav mr-auto"},l.a.createElement("li",{class:"nav-item active"},l.a.createElement("a",{class:"nav-link",href:"#"},"Home ",l.a.createElement("span",{class:"sr-only"},"(current)"))),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",href:"#"},"About")),l.a.createElement("li",{class:"nav-item dropdown"},l.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Services"),l.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("a",{class:"dropdown-item",href:"#"},"COVID Status"),l.a.createElement("a",{class:"dropdown-item",href:"#"},"Self Assess"),l.a.createElement("div",{class:"dropdown-divider"},"Media"),l.a.createElement("a",{class:"dropdown-item",href:"#"},"Govt Rules & FAQs"))),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link disabled",href:"#"},"Helpline"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),r.a.render(l.a.createElement(b,null),document.getElementById("header")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.96d677b8.chunk.js.map