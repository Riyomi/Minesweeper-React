(this["webpackJsonpminesweeper-react"]=this["webpackJsonpminesweeper-react"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),c=n(8),o=n.n(c),r=(n(18),n(5)),l=n(3),u=n(9),d=n(10),f=n(12),h=n(11),j=function(e,t,n){return n&&e?"cell flag":e?"cell":t},p=function(e){var t=e.classes,n=e.hidden,a=e.onClick,i=e.gameState,c=e.onContextMenu,o=e.hasFlag;return Object(s.jsx)("button",{className:j(n,t,o),onClick:a,disabled:"win"===i||"dead"===i,onContextMenu:c})};var m=function(e){for(var t,n,s=e.length;0!==s;)n=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[n],e[n]=t;return e},v=function(e){var t=e.count,n=e.classes;return Object(s.jsxs)("div",{className:n,children:[Object(s.jsx)("span",{className:"count n".concat(Math.floor(t/100))}),Object(s.jsx)("span",{className:"count n".concat(Math.floor(t/10))}),Object(s.jsx)("span",{className:"count n".concat(t%10)})]})};var g=function(e){var t=e.onClick,n=e.gameState;return Object(s.jsx)("button",{className:"smiley ".concat(n),onClick:t})},b=function(e){var t=e.gameState,n=Object(a.useState)(0),i=Object(r.a)(n,2),c=i[0],o=i[1];return Object(a.useEffect)((function(){if(""===t&&o(0),"dead"!==t&&"win"!==t){var e=setInterval((function(){"started"===t&&o((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}}),[t]),Object(s.jsx)(v,{count:c,classes:"time"})};var x=function(e){var t=e.flags,n=e.time,a=e.onReset,i=e.gameState;return Object(s.jsxs)("div",{className:"indicator",children:[Object(s.jsx)(v,{count:t,classes:"flags-counter"}),Object(s.jsx)(g,{onClick:a,gameState:i}),Object(s.jsx)(b,{count:n,classes:"time",gameState:i})]})},y=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={tiles:[],hiddenTilesCount:0,time:0,flags:0,gameState:""},s.handleClick=function(e){if(""===s.state.gameState&&s.setState({gameState:"started"}),!e.hasFlag){if(e.hasMine)return s.gameOver(e.pos);s.floodFill(e.pos.x,e.pos.y,0),s.countHiddenFields()===s.props.difficulty.mines&&s.setState({gameState:"win"})}},s.handleRightClick=function(e,t){e.preventDefault();var n=s.state.flags;if(t.hidden&&(0!==n||t.hasFlag)){var a=Object(l.a)(s.state.tiles);t.hasFlag?(a[t.pos.x][t.pos.y].hasFlag=!1,s.setState({flags:n+1})):(a[t.pos.x][t.pos.y].hasFlag=!0,s.setState({flags:n-1})),s.setState({tiles:a})}},s.handleReset=function(){var e={tiles:s.initBoard(),hiddenTilesCount:s.props.difficulty.count,time:0,flags:s.props.difficulty.mines,gameState:""};s.setState(e)},s.state.tiles=s.initBoard(),s.state.hiddenTilesCount=s.props.difficulty.counter,s.state.flags=s.props.difficulty.mines,s}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e,t){e!==this.props&&this.handleReset()}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"minesweeper",children:[Object(s.jsx)(x,{flags:this.state.flags,time:this.state.time,onReset:this.handleReset,gameState:this.state.gameState}),Object(s.jsx)("div",{className:"board",children:this.state.tiles.map((function(t,n){return Object(s.jsx)("div",{className:"row",children:t.map((function(t){return Object(s.jsx)(p,{classes:t.classes,hidden:t.hidden,onClick:function(){return e.handleClick(t)},gameState:e.state.gameState,onContextMenu:function(n){return e.handleRightClick(n,t)},hasFlag:t.hasFlag},10*t.pos.x+t.pos.y)}))},n)}))})]})}},{key:"initBoard",value:function(){for(var e=[],t=this.props.difficulty.size,n=Object(l.a)(Array(this.props.difficulty.count).keys()),s=m(n).slice(0,this.props.difficulty.mines),a=function(n){for(var a=[],i=function(e){a.push({pos:{x:n,y:e},hasMine:void 0!==s.find((function(s){return s===n*t.x+e})),hasFlag:!1,classes:"cell",hidden:!0})},c=0;c<t.y;c++)i(c);e.push(a)},i=0;i<t.x;i++)a(i);for(var c=0;c<t.x;c++)for(var o=0;o<t.y;o++)e[c][o].hasMine?e[c][o].classes+=" mine":e[c][o].classes+=" n".concat(this.countSurroundingMines(e[c][o],e));return e}},{key:"countSurroundingMines",value:function(e,t){for(var n=this.props.difficulty.size,s=0,a=-1;a<=1;a++)for(var i=-1;i<=1;i++)e.pos.x+a>=0&&e.pos.y+i>=0&&e.pos.x+a<n.x&&e.pos.y+i<n.y&&t[e.pos.x+a][e.pos.y+i].hasMine&&s++;return s}},{key:"floodFill",value:function(e,t,n){var s=Object(l.a)(this.state.tiles),a=this.props.difficulty.size;if(e>=0&&e<a.x&&t>=0&&t<a.y&&s[e][t].hidden&&0===n&&!s[e][t].hasMine&&!s[e][t].hasFlag){s[e][t].hidden=!1;var i=this.countSurroundingMines(s[e][t],s);this.floodFill(e-1,t,i),this.floodFill(e+1,t,i),this.floodFill(e,t-1,i),this.floodFill(e,t+1,i)}this.setState({tiles:s})}},{key:"countHiddenFields",value:function(){for(var e=this.props.difficulty.size,t=0,n=0;n<e.x;n++)for(var s=0;s<e.y;s++)this.state.tiles[n][s].hidden&&t++;return t}},{key:"gameOver",value:function(e){this.revealMines(e),this.setState({gameState:"dead"})}},{key:"revealMines",value:function(e){for(var t=Object(l.a)(this.state.tiles),n=this.props.difficulty.size,s=0;s<n.x;s++)for(var a=0;a<n.y;a++)!t[s][a].hasFlag&&t[s][a].hasMine&&(t[s][a].hidden=!1),t[s][a].hasFlag&&!t[s][a].hasMine&&(t[s][a].hidden=!1,t[s][a].classes+=" dead-flag"),s===e.x&&a===e.y&&(t[s][a].classes+=" triggeredDeath");this.setState({tiles:t})}}]),n}(a.Component);n(7);var O=function(e){var t=e.onMenuItemClick;return Object(s.jsxs)("div",{className:"dropdown",children:[Object(s.jsx)("button",{className:"dropdown-btn",children:"Difficulty"}),Object(s.jsxs)("div",{className:"dropdown-content",children:[Object(s.jsx)("button",{onClick:function(){return t("beginner")},children:"Beginner"}),Object(s.jsx)("button",{onClick:function(){return t("intermediate")},children:"Intermediate"}),Object(s.jsx)("button",{onClick:function(){return t("advanced")},children:"Advanced"})]})]})},S={mines:10,size:{x:9,y:9},count:81},k={mines:40,size:{x:16,y:16},count:256},C={mines:99,size:{x:16,y:32},count:512};var M=function(){var e=Object(a.useState)(k),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)(i.a.Fragment,{children:[Object(s.jsx)(O,{onMenuItemClick:function(e){"beginner"===e?c(S):"intermediate"===e?c(k):"advanced"===e&&c(C),console.log(n)}}),Object(s.jsx)(y,{difficulty:n},n)]})};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(M,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.12e8abf9.chunk.js.map