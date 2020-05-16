(this["webpackJsonpcovid19-react-app"]=this["webpackJsonpcovid19-react-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},14:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(23),o=a.n(l),c=(a(65),a(13),a(14),a(6)),s=a(7),d=a(10),i=a(9),m=a(8),p=a.n(m),u=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={error:null,isLoaded:!0,items:[]},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.covid19india.org/data.json",{}).then((function(t){e.setState({items:t.data.statewise[0]})})).catch((function(e){}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,r=e.items;return t?n.a.createElement("div",null,"Error Occurred...."):a?n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"card mt-5 mb-2 ml-1 mr-1 shadow-lg border border-dark mb-5 bg-light rounded"},n.a.createElement("div",{class:"card-header bg-primary text-light font-weight-bold"},"COVID Updates (INDIA)"),n.a.createElement("div",{class:"card-body text-center bg-white"},n.a.createElement("div",{class:"table-responsive"},n.a.createElement("table",{class:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col",class:"text-primary"},"Active"),n.a.createElement("th",{scope:"col",class:"text-warning"},"Confirmed"),n.a.createElement("th",{scope:"col",class:"text-success"},"Recovered"),n.a.createElement("th",{scope:"col",class:"text-danger"},"Deceased"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{scope:"col"},n.a.createElement("p",{class:"text-primary font-weight-bold"},r.active)),n.a.createElement("td",{scope:"col"},n.a.createElement("p",{class:"text-warning font-weight-bold"},r.confirmed,n.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},r.deltaconfirmed," \u21e7"))),n.a.createElement("td",{scope:"col"},n.a.createElement("p",{class:"text-success font-weight-bold"},r.recovered,n.a.createElement("span",{class:"badge badge-light ml-2 text-success"},r.deltarecovered," \u21e7"))),n.a.createElement("td",{scope:"col"},n.a.createElement("p",{class:"text-danger font-weight-bold"},r.deaths,n.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},r.deltadeaths," \u21e7")))))))),n.a.createElement("div",{class:"card-footer text-black font-weight-bold bg-warning"},"Last Updated at ",r.lastupdatedtime))):n.a.createElement("div",null,"Loading...")}}]),a}(n.a.Component),b=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={error:null,isLoaded:!0,items:[],lastUpdate:null},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.covid19india.org/data.json",{}).then((function(t){e.setState({items:t.data.statewise,lastUpdate:t.data.statewise[0].lastupdatedtime})})).catch((function(e){}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,r=e.items,l=e.lastUpdate;return t?n.a.createElement("div",null,"Error Occurred...."):a?n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"card text-center mt-5 mb-3 ml-1 mr-1 shadow bg-white border border-dark"},n.a.createElement("div",{class:"card-header bg-danger font-weight-bold text-light"},"COVID Updates (STATE WISE)"),n.a.createElement("div",{class:"card-body text-center"},n.a.createElement("center",null,n.a.createElement("div",{class:"table-responsive"},n.a.createElement("table",{class:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col",class:"text-dark font-weight-bold"},"Name of State"))),n.a.createElement("tbody",null,r.map((function(e,t){if(t>=1&&t<=r.length)return n.a.createElement("div",{class:"justify-content-center"},n.a.createElement("center",null,n.a.createElement("tr",{class:"table-white"},n.a.createElement("td",{colSpan:"4"},n.a.createElement("button",{class:"btn btn-white text-dark font-weight-bold mr-1"},e.state))),n.a.createElement("tr",null,n.a.createElement("td",{scope:"col",class:"text-primary"},"Active"),n.a.createElement("td",{scope:"col",class:"text-warning"},"Confirmed"),n.a.createElement("td",{scope:"col",class:"text-success"},"Recovered"),n.a.createElement("td",{scope:"col",class:"text-danger"},"Deceased")),n.a.createElement("tr",null,n.a.createElement("td",{scope:"col"},n.a.createElement("p",{class:"text-primary mr-1 font-weight-bold"},e.active)),n.a.createElement("td",{scope:"col"},n.a.createElement("p",{class:"text-warning mr-1 font-weight-bold"},e.confirmed,n.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},e.deltaconfirmed," \u21e7"))),n.a.createElement("td",{scope:"col"},n.a.createElement("p",{class:"text-success mr-1 font-weight-bold"},e.recovered,n.a.createElement("span",{class:"badge badge-light ml-2 text-success"},e.deltarecovered," \u21e7"))),n.a.createElement("td",{scope:"col"},n.a.createElement("p",{class:"text-danger mr-1 font-weight-bold"},e.deaths,n.a.createElement("span",{class:"badge badge-light ml-2 text-danger"},e.deltadeaths," \u21e7"))))))}))))))),n.a.createElement("div",{class:"card-footer bg-success font-weight-bold text-white"},"Last Updated at ",l))):n.a.createElement("div",null,"Loading...")}}]),a}(n.a.Component),h=a(58),g=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={da:[],c:[],d:[],r:[],de:[]},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.covid19india.org/data.json").then((function(t){var a=[],r=[],n=[],l=[];t.data.cases_time_series.map((function(e){a.push(e.date)})),t.data.cases_time_series.map((function(e){r.push(e.dailyconfirmed)})),t.data.cases_time_series.map((function(e){n.push(e.dailyrecovered)})),t.data.cases_time_series.map((function(e){l.push(e.dailydeceased)})),e.setState({da:t.data.cases_time_series,d:a,c:r,r:n,de:l})})).catch((function(e){}))}},{key:"render",value:function(){var e=this.state,t=(e.da,e.d),a=e.c,r=e.r,l=e.de;return n.a.createElement("div",null,n.a.createElement("div",{class:"card mt-5 mb-2 ml-3 mr-3 shadow-lg border border-dark mb-5 bg-light rounded"},n.a.createElement("div",{class:"card-header bg-primary text-light font-weight-bold"},"COVID Daily Confirmed vs Recovered vs Death Graph (INDIA)"),n.a.createElement("div",{class:"card-body text-center bg-white"},n.a.createElement(h.a,{data:{labels:t,datasets:[{label:"Daily Confirmed Cases",fill:!1,lineTension:.1,backgroundColor:"rgb(128, 179, 255)",borderColor:"\trgb(43, 121, 238)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(0, 92, 230)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgb(0, 92, 230)",pointHoverBorderColor:"rgb(0, 61, 153)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a},{label:"Daily Recovered Cases",fill:!1,lineTension:.1,backgroundColor:"rgb(0, 204, 68)",borderColor:"rgb(11, 142, 55)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(0, 128, 43)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgb(11, 142, 55)",pointHoverBorderColor:"rgb(0, 102, 34)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:r},{label:"Daily Death Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgb(204, 0, 0)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(204, 0, 0)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgb(204, 0, 0)",pointHoverBorderColor:"rgb(128, 0, 0)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:l}]},width:100,height:350,options:{maintainAspectRatio:!1,responsive:!0}}))))}}]),a}(n.a.Component);var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,null),n.a.createElement(g,null),n.a.createElement(b,null))};var E=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("nav",{class:"navbar navbar-expand-lg text-primary shadow-lg"},n.a.createElement("a",{class:"navbar-brand font-weight-bold",href:"#"},"Swastha Sebok"),n.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{class:"navbar-toggler text-primary"},"Menu")),n.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{class:"navbar-nav mr-auto"},n.a.createElement("li",{class:"nav-item active"},n.a.createElement("a",{class:"nav-link",href:"#"},"Home ",n.a.createElement("span",{class:"sr-only"},"(current)"))),n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link",href:"#"},"About")),n.a.createElement("li",{class:"nav-item dropdown"},n.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Services"),n.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown"},n.a.createElement("a",{class:"dropdown-item",href:"#"},"COVID Status"),n.a.createElement("a",{class:"dropdown-item",href:"#"},"Self Assess"),n.a.createElement("div",{class:"dropdown-divider"},"Media"),n.a.createElement("a",{class:"dropdown-item",href:"#"},"Govt Rules & FAQs"))),n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link",href:"#"},"Helpline"))))))};var f=function(){return n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"card mt-5 shadow-lg border border-dark bg-light rounded justify-content-center"},n.a.createElement("center",null,n.a.createElement("div",{class:"card-body text-center bg-white"},n.a.createElement("p",null,"Data Source : ",n.a.createElement("a",{href:"https://github.com/covid19india/api"},"https://github.com/covid19india/api")),n.a.createElement("p",null,"Want to Collaborate in Open Project ? ",n.a.createElement("a",{href:"#"},"Join this Group")),n.a.createElement("p",null,"Open Sourced in ",n.a.createElement("a",{href:"https://github.com/DebkantaMondal/Swastha-Sebok-Covid19",target:"blank"},"Github")),n.a.createElement("p",null,"View Updates on Your Messenger ",n.a.createElement("a",{href:"#"},"Accept Bot")),n.a.createElement("p",null,"Data Accuracy : Given Soon")),n.a.createElement("div",{class:"card-footer text-white font-weight-bold bg-primary"},"This is a Project developed by Debkanta Mondal [",n.a.createElement("a",{class:"text-white",href:"#",target:"_blank"},"Open Development Project"),"]"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),o.a.render(n.a.createElement(E,null),document.getElementById("header")),o.a.render(n.a.createElement(f,null),document.getElementById("footer")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a(176)},65:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.03d17575.chunk.js.map