(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(24)},16:function(e,n,t){},20:function(e,n,t){},22:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(3),i=t.n(r),s=(t(16),t(1)),c=t.n(s),l=t(4),m=t(5),u=t(6),v=t(8),p=t(7),d=t(9);t(20),t(22);function f(e){var n=e.movieImg;return o.a.createElement("img",{src:n,alt:"hello",className:"Movie__Poster"})}function h(e){var n=e.genre;return o.a.createElement("span",{className:"Movie__Genre"},n)}var _=function(e){var n=e.movieTitle,t=e.movieImg,a=e.genres,r=e.synopsis;return o.a.createElement("div",{className:"Movie"},o.a.createElement("div",{className:"Movie__Columns"},o.a.createElement(f,{movieImg:t})),o.a.createElement("div",{className:"Movie__Columns"},o.a.createElement("h1",null,n),o.a.createElement("div",{className:"Movie__Genres"},a.map(function(e,n){return o.a.createElement(h,{genre:e,key:n})})),o.a.createElement("p",{className:"Movie__Synopsis"},r)))},g=function(e){function n(){var e,t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(v.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).state={},t._renderMovies=function(){return t.state.movies.map(function(e){return console.log(e),o.a.createElement(_,{key:e.id,movieTitle:e.title_english,movieImg:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis})})},t._getMovies=Object(l.a)(c.a.mark(function e(){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._callApi();case 2:n=e.sent,t.setState({movies:n});case 4:case"end":return e.stop()}},e,this)})),t._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.error(e)})},t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.movies?this._renderMovies():"Loading")}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.3b04a3d3.chunk.js.map