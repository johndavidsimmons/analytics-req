(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),o=(a(81),a(20)),i=a(21),s=a(23),u=a(22),m=a(24),d=a(119),h=a(116),E=a(117),p=function(e){var t=e.code;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("pre",null,l.a.createElement("code",null,t))))},b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e='<script src="//assets.adobedtm.com/launch-ENc379233258344e5ab0033464ce7e8d21-staging.min.js" async><\/script>;',t=e.replace("-staging","");return l.a.createElement("div",null,l.a.createElement("h3",null,"Embedding Launch"),l.a.createElement("p",null,"The Launch javascript snippet loads the Launch library on a page load. The script should be loaded in the global head as high as possible. Each page requires one script, but the scripts differs based on environment: there is one for the ",l.a.createElement("b",null,"production environment"),", and one for ",l.a.createElement("b",null,"all non-production environments.")," It is recommended that you load the library asychronously."),l.a.createElement("h4",{className:"push"},"Non-Production"),l.a.createElement("p",null,"This is an ",l.a.createElement("b",null,"EXAMPLE")," of a Launch script to be placed in"," ",l.a.createElement("b",null,"non-production"),' environments. Note the async attribute and "-staging" flag in the file.'),l.a.createElement(p,{code:e}),l.a.createElement("h4",{className:"push"},"Production"),l.a.createElement("p",null,"This is an ",l.a.createElement("b",null,"EXAMPLE")," of a Launch script to be placed in a"," ",l.a.createElement("b",null,"production")," environment. Note the async attribute and"," ",l.a.createElement("b",null,"lack of"),' "-staging" flag in the file.'),l.a.createElement(p,{code:t}))}}]),t}(n.Component),g=a(120),y=a(122),f=a(121),k=a(27),v=function(){return l.a.createElement(g.a,{bg:"dark",variant:"dark",fixed:"top"},l.a.createElement(g.a.Brand,null,"Web Analytics Standards"),l.a.createElement(y.a,{className:"mr-auto"},l.a.createElement(k.b,{to:"/",className:"nav-link"},"Overview"),l.a.createElement(f.a,{title:"Launch",id:"launch-nav-dropdown"},l.a.createElement(k.b,{to:"/embed",className:"dropdown-item"},"Embed"),l.a.createElement(k.b,{to:"/tagging",className:"dropdown-item"},"Tagging"),l.a.createElement(f.a.Divider,null),l.a.createElement(f.a.Item,{href:"//docs.adobelaunch.com/",target:"_blank",rel:"noopener noreferrer"},"Official Documentation")),l.a.createElement(k.b,{to:"/datalayer",className:"nav-link"},"Data Layer")))},w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Click Tracking"),l.a.createElement("p",null,'There are two ways that clicks are tracked in Launch, explicity through attribute "tagging" and automatically through a process called "Activity Map".'),l.a.createElement("h4",null,"Explicit click tracking with Attribute tagging"),l.a.createElement("p",{className:"push"},"Placing the attribute"," ",l.a.createElement("code",null,'data-analytics-click="channel:product:link text"')," on an element will instruct Launch to track clicks on that element and record the value of the ",l.a.createElement("code",null,"data-analytics-click")," attribute. Primary buttons (and buttons that execute a non-navigation action) should contain a click tracking tag."," ",l.a.createElement("code",null,"Channel:product:link text"),' is a generic guideline for the value. For example, a "tagged" primary button that runs a calculation on a purchase calculator on a Rocket Mortgage Page would look like:'),l.a.createElement(p,{code:'<button data-analytics-click="rocket:purchase calculator:calculate">Calculate</button>'}),l.a.createElement("h4",{className:"push"},"Automatic click tracking with Activity Map"),l.a.createElement("p",null,"Launch will automatically track clicks on certain elements through a process called Activity Map. This is how all other clicks (i.e. those that are not tagged) will be collected and sent to reporting. Launch will record an Activity Map click events on elements that meet any of the following criteria:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Anchor or Area element with an href attribute"),l.a.createElement("li",null,"Input element with a value attribute or child text"),l.a.createElement("li",null,"Button elements"),l.a.createElement("li",null,"Any element with an onClick function that sets an s_objectID variable (Used if element needs to be tracked by activity map, but does not meet any criteria above, Uncommon)")),l.a.createElement("p",null,l.a.createElement("strong",null,"Note:")," Button elements with the attribute"," ",l.a.createElement("code",null,'type="button"')," will NOT be tracked by Activity Map. To track clicks on these elements you can replace"," ",l.a.createElement("code",null,'type="button"')," with ",l.a.createElement("code",null,'role="button"')," or"," ",l.a.createElement("code",null,'submit="button"'),"."))}}]),t}(n.Component),A=a(118),j=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Adobe Analytics/Adobe Launch"),l.a.createElement(h.a,{className:"push-bottom"},l.a.createElement(E.a,{xs:1},l.a.createElement(A.a,{className:"logo",src:"https://assets.adobedtm.com/extensions/EP4c3fcccffd524251ae198bf677f3b6e9/resources/icons/mc_analytics.svg"})),l.a.createElement(E.a,{xs:1},l.a.createElement(A.a,{className:"logo",src:"https://assets.adobedtm.com/extensions/EP04617b99e04841b9991487d04c8db46c/resources/icons/core.svg"}))),l.a.createElement("p",null,"Quicken Loans runs a web analytics stack centered around"," ",l.a.createElement("a",{href:"//www.adobe.com/experience-platform/launch.html",target:"_blank"},"Adobe Launch")," ","(formerly DTM) for data collection and"," ",l.a.createElement("a",{href:"https://www.adobe.com/analytics/adobe-analytics.html",target:"_blank"},"Adobe Analytics")," ","for reporting."),l.a.createElement("p",null,l.a.createElement("b",null,"Launch")," has two primary functions:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Collect data from a website and send it to ",l.a.createElement("b",null,"Adobe Analytics"),"."),l.a.createElement("li",null,"Load vendor code or other code unrelated to the core application. Examples include Facebook marketing code and the Live Engage Chat library. This process is referred to as ",l.a.createElement("b",null,"tag management"),".")),l.a.createElement("p",null,"Please note that the collection of web analytics is ",l.a.createElement("b",null,"not")," automatic and must be configured on a per property basis. Typically, ",l.a.createElement("b",null,"Launch")," ","properties (collections of analytics rules) are segmented by codebase, rather than domain. The data collected by a property is determined by its various stakeholders."),l.a.createElement("h4",null,"Accounts"),l.a.createElement("p",null,"An Adobe Experience Cloud ID is required to access Adobe Analytics and Adobe Launch. If you need access to these tools please send an email to"," ",l.a.createElement("strong",null,"digitaldatastrategy@quickenloans.com")," with your role and which product you work on."))},L=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Google Analytics"),l.a.createElement(A.a,{className:"logo",src:"https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_vertical_black_2x.png"}),l.a.createElement("p",null,"We load Google Analytics on a few client facing websites in order to utilize Google's advertising capabilities. We also use Google Analytics on internal sites because it generally requires less setup than Adobe Analytics. To use Google Analytics on your internal facing website, send me email to digitaldatastrategy@quickenloans.com."),l.a.createElement("h4",null,"Accounts"),l.a.createElement("p",null,"A Google Account is required to access Google Analytics. You will need to link your Quickenloans.com email address to this Google Account. You can do this by adding your @quickenloans.com email address as an alernate email address on your Google account. This can be done at"," ",l.a.createElement("a",{href:"https://myaccount.google.com/personal-info"},"https://myaccount.google.com/personal-info")," ","> email > alternate email."))},O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement("hr",null),l.a.createElement(L,null))}}]),t}(n.Component),N=a(45),T=a.n(N),x=a(75),C=a.n(x),I=a(54),P=a.n(I),_=function(){return l.a.createElement("code",null,"digitalData")},q=function(){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"The data layer object should be called ",l.a.createElement(_,null)),l.a.createElement("li",null,"The values in ",l.a.createElement(_,null)," should not persist between pages or other state changes"),l.a.createElement("li",null,l.a.createElement(_,null)," keys should not contain empty values. Key/value pairs should be set only when they exist."),l.a.createElement("li",null,l.a.createElement(_,null)," should not contain PII"),l.a.createElement("li",null,"The values in ",l.a.createElement(_,null)," should be strings. No integers, booleans, arrays, etc.")))},D=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Data Layer"),l.a.createElement("p",null,"The data layer is a static JavaScript object (called ",l.a.createElement(_,null),") that contains information about the current state of the application. This can include:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Page information such as URL or query parameters"),l.a.createElement("li",null,"User information such as a username or unique ID (provided the user is logged in)."),l.a.createElement("li",null,"Form information such as the loan purpose the user selected on a lead form.")),l.a.createElement("p",null,l.a.createElement("strong",null,"On it's own, the data layer object does nothing. It exists in order to streamline data collection by reducing the need to scrape the page for information and to serve as a source of truth for any tool that collects front end data.")),l.a.createElement(C.a,{className:"push"},l.a.createElement(P.a,{sm:8},l.a.createElement(T.a,null,l.a.createElement(T.a.Image,{src:"https://i.imgur.com/TJ5mnmi.png",rounded:!0}),l.a.createElement(T.a.Caption,null,"A basic data layer object on Rocketmortgage.com"))),l.a.createElement(P.a,{sm:4},l.a.createElement(q,null))),l.a.createElement("hr",null),l.a.createElement("h4",null,"To add the data layer to your website..."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://git.rockfin.com/marketing-web/bi-data-layer",target:"_blank"},"Quicken Loans data layer library")))},G=(a(114),a(26)),M=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k.a,null,l.a.createElement(v,null),l.a.createElement(d.a,null,l.a.createElement(h.a,null,l.a.createElement(E.a,{sm:12},l.a.createElement(G.c,null,l.a.createElement(G.a,{path:"/",component:O,exact:!0}),l.a.createElement(G.a,{path:"/embed",component:b}),l.a.createElement(G.a,{path:"/tagging",component:w}),l.a.createElement(G.a,{path:"/datalayer",component:D})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,a){e.exports=a(115)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.7c331104.chunk.js.map