/*!
 * 
 *             jsPDF AutoTable plugin v3.0.13
 *             
 *             Copyright (c) 2014 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *             Licensed under the MIT License.
 *             http://opensource.org/licenses/mit-license
 *             
 *             * /if (typeof window === 'object') window.jspdfAutoTableVersion = '" + newVersion + "';/*"
 *         
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("jspdf"));else if("function"==typeof define&&define.amd)define(["jspdf"],e);else{var o="object"==typeof exports?e(require("jspdf")):e(t.jsPDF);for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(window,function(o){return function(o){var n={};function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=o,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n,r=null,a=null;o.globalDefaults={},o.documentDefaults={},o.default=function(){return a},o.getGlobalOptions=function(){return o.globalDefaults},o.getDocumentOptions=function(){return o.documentDefaults};var l=function(){function t(t){this.doc=t}return t.prototype.pageHeight=function(){return this.pageSize().height},t.prototype.pageWidth=function(){return this.pageSize().width},t.prototype.pageSize=function(){var t=this.doc.internal.pageSize;return null==t.width&&(t={width:t.getWidth(),height:t.getHeight()}),t},t.prototype.scaleFactor=function(){return this.doc.internal.scaleFactor},t.prototype.pageNumber=function(){return this.doc.internal.getCurrentPageInfo().pageNumber},t}();o.setupState=function(t){n=a,a=new l(t),t!==r&&(r=t,o.documentDefaults={})},o.resetState=function(){a=n},o.setDefaults=function(t,e){void 0===e&&(e=null),e?(o.documentDefaults=t||{},r=e):o.globalDefaults=t||{}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(2),i=o(0),r=o(3);function s(t,e){var o=e.fontSize/i.default().scaleFactor();l(e),t=Array.isArray(t)?t:[t];var n=0;t.forEach(function(t){var e=i.default().doc.getStringUnitWidth(t);n<e&&(n=e)});var r=1e4*i.default().scaleFactor();return(n=Math.floor(n*r)/r)*o}function a(t){var e=0<t.lineWidth,o=t.fillColor||0===t.fillColor;return e&&o?"DF":e?"S":!!o&&"F"}function l(n){var t=i.default().doc,r={fillColor:t.setFillColor,textColor:t.setTextColor,fontStyle:t.setFontStyle,lineColor:t.setDrawColor,lineWidth:t.setLineWidth,font:t.setFont,fontSize:t.setFontSize};Object.keys(r).forEach(function(t){var e=n[t],o=r[t];void 0!==e&&(Array.isArray(e)?o.apply(this,e):o(e))})}e.getStringWidth=s,e.ellipsize=function o(t,n,r,a){if(void 0===a&&(a="..."),Array.isArray(t)){var l=[];return t.forEach(function(t,e){l[e]=o(t,n,r,a)}),l}var e=1e4*i.default().scaleFactor();if((n=Math.ceil(n*e)/e)>=s(t,r))return t;for(;n<s(t+a,r)&&!(t.length<=1);)t=t.substring(0,t.length-1);return t.trim()+a},e.addTableBorder=function(){var t=i.default().table,e={lineWidth:t.settings.tableLineWidth,lineColor:t.settings.tableLineColor};l(e);var o=a(e);o&&i.default().doc.rect(t.pageStartX,t.pageStartY,t.width,t.cursor.y-t.pageStartY,o)},e.getFillStyle=a,e.applyUserStyles=function(){l(i.default().table.userStyles)},e.applyStyles=l,e.marginOrPadding=function(t,e){var o={};if(Array.isArray(t))4<=t.length?o={top:t[0],right:t[1],bottom:t[2],left:t[3]}:3===t.length?o={top:t[0],right:t[1],bottom:t[2],left:t[1]}:2===t.length?o={top:t[0],right:t[1],bottom:t[0],left:t[1]}:t=1===t.length?t[0]:e;else if("object"==typeof t){t.vertical&&(t.top=t.vertical,t.bottom=t.vertical),t.horizontal&&(t.right=t.horizontal,t.left=t.horizontal);for(var n=0,r=["top","right","bottom","left"];n<r.length;n++){var a=r[n];o[a]=t[a]||0===t[a]?t[a]:e}}return"number"==typeof t&&(o={top:t,right:t,bottom:t,left:t}),o},e.styles=function(t){return t=Array.isArray(t)?t:[t],r.assign.apply(void 0,[n.defaultStyles()].concat(t))}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FONT_ROW_RATIO=1.15;var n=o(0);e.defaultConfig=function(){return{html:null,head:null,body:null,foot:null,includeHiddenHtml:!1,startY:null,margin:40/n.default().scaleFactor(),pageBreak:"auto",rowPageBreak:"auto",tableWidth:"auto",showHead:"everyPage",showFoot:"everyPage",tableLineWidth:0,tableLineColor:200,tableId:null,theme:"striped",useCss:!1,styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{},didParseCell:function(t){},willDrawCell:function(t){},didDrawCell:function(t){},didDrawPage:function(t){}}},e.defaultStyles=function(){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/n.default().scaleFactor(),lineColor:200,lineWidth:0/n.default().scaleFactor(),cellWidth:"auto",minCellHeight:0}},e.getTheme=function(t){return{striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}}[t]}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.assign=function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1;r<arguments.length;r++){var a=arguments[r];if(null!=a)for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(n[l]=a[l])}return n}},function(t,e){t.exports=o},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(6),r=o(7),a=o(8),l=o(0);o(15);var i=o(1),s=o(4);s.API.autoTable=function(){l.setupState(this);var t=a.parseInput(arguments);return r.calculateWidths(t),n.drawTable(t),t.finalY=t.cursor.y,this.previousAutoTable=t,this.lastAutoTable=t,this.autoTable.previous=t,i.applyUserStyles(),l.resetState(),this},s.API.lastAutoTable=!1,s.API.previousAutoTable=!1,s.API.autoTable.previous=!1,s.API.autoTableSetDefaults=function(t){return l.setDefaults(t,this),this},s.autoTableSetDefaults=function(t,e){return l.setDefaults(t,e),this},s.API.autoTableHtmlToJson=function(r,a){if(console.error("Use of deprecated function: autoTableHtmlToJson. Use html option instead."),a=a||!1,!(r&&r instanceof HTMLTableElement))return console.error("A HTMLTableElement has to be sent to autoTableHtmlToJson"),null;for(var l={},i=[],t=r.rows[0],e=0;e<t.cells.length;e++){var o=t.cells[e],n=window.getComputedStyle(o);(a||"none"!==n.display)&&(l[e]=o)}var s=function(t){var o=r.rows[t],e=window.getComputedStyle(o);if(a||"none"!==e.display){var n=[];Object.keys(l).forEach(function(t){var e=o.cells[t];n.push(e)}),i.push(n)}};for(e=1;e<r.rows.length;e++)s(e);return{columns:Object.keys(l).map(function(t){return l[t]}),rows:i,data:i}},s.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.previousAutoTable.finalY instead.");var t=this.previousAutoTable;return t.cursor&&"number"==typeof t.cursor.y?t.cursor.y:0},s.API.autoTableAddPageContent=function(t){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),s.API.autoTable.globalDefaults||(s.API.autoTable.globalDefaults={}),s.API.autoTable.globalDefaults.addPageContent=t,this},s.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var S=o(2),i=o(1),P=o(0);function C(t){var e=P.default().table;e.cursor.x=e.margin("left"),t.y=e.cursor.y,t.x=e.cursor.x,e.cursor.x=e.margin("left"),t.y=e.cursor.y,t.x=e.cursor.x;for(var o=0,n=e.columns;o<n.length;o++){var r=n[o],a=t.cells[r.dataKey];if(a)if(i.applyStyles(a.styles),a.x=e.cursor.x,a.y=t.y,"top"===a.styles.valign?a.textPos.y=e.cursor.y+a.padding("top"):"bottom"===a.styles.valign?a.textPos.y=e.cursor.y+a.height-a.padding("bottom"):a.textPos.y=e.cursor.y+a.height/2,"right"===a.styles.halign?a.textPos.x=a.x+a.width-a.padding("right"):"center"===a.styles.halign?a.textPos.x=a.x+a.width/2:a.textPos.x=a.x+a.padding("left"),!1!==e.callCellHooks(e.cellHooks.willDrawCell,a,t,r)){var l=i.getFillStyle(a.styles);l&&P.default().doc.rect(a.x,e.cursor.y,a.width,a.height,l),P.default().doc.autoTableText(a.text,a.textPos.x,a.textPos.y,{halign:a.styles.halign,valign:a.styles.valign,maxWidth:a.width-a.padding("left")-a.padding("right")}),e.callCellHooks(e.cellHooks.didDrawCell,a,t,r),e.cursor.x+=r.width}else e.cursor.x+=r.width;else e.cursor.x+=r.width}e.cursor.y+=t.height}function x(t){var e=P.default().table,o=e.margin("bottom"),n=e.settings.showFoot;return(!0===n||"everyPage"===n||"lastPage"===n&&t)&&(o+=e.footHeight),P.default().pageHeight()-e.cursor.y-o}function W(){var t=P.default().table;i.applyUserStyles(),!0!==t.settings.showFoot&&"everyPage"!==t.settings.showFoot||t.foot.forEach(function(t){return C(t)}),t.finalY=t.cursor.y,t.callEndPageHooks(),i.addTableBorder(),n(P.default().doc),t.pageNumber++,t.cursor={x:t.margin("left"),y:t.margin("top")},t.pageStartX=t.cursor.x,t.pageStartY=t.cursor.y,!0!==t.settings.showHead&&"everyPage"!==t.settings.showHead||t.head.forEach(function(t){return C(t)})}function n(t){var e=P.default().pageNumber();t.setPage(e+1),P.default().pageNumber()===e&&t.addPage()}e.drawTable=function(o){var t=o.settings;o.cursor={x:o.margin("left"),y:null==t.startY?o.margin("top"):t.startY};var e=t.startY+o.margin("bottom")+o.headHeight+o.footHeight;"avoid"===t.pageBreak&&(e+=o.height),("always"===t.pageBreak||null!=t.startY&&!1!==t.startY&&e>P.default().pageHeight())&&(n(P.default().doc),o.cursor.y=o.margin("top")),o.pageStartX=o.cursor.x,o.pageStartY=o.cursor.y,o.startPageNumber=P.default().pageNumber(),i.applyUserStyles(),!0!==t.showHead&&"firstPage"!==t.showHead&&"everyPage"!==t.showHead||o.head.forEach(function(t){return C(t)}),i.applyUserStyles(),o.body.forEach(function(t,e){!function t(e,o){var n,r,a,l,i,s=0,d={},u=P.default().table,c=x(o);if(c<e.maxCellHeight)if(c<(i=e,P.default().table.columns.reduce(function(t,e){var o=i.cells[e.dataKey];if(!o)return 0;var n=o.styles.fontSize/P.default().scaleFactor()*S.FONT_ROW_RATIO,r=o.padding("vertical"),a=r+n;return t<a?a:t},0))||"avoid"===u.settings.rowPageBreak&&(n=e,r=P.default().table,a=P.default().pageHeight(),l=a-r.margin("top")-r.margin("bottom"),!(n.maxCellHeight>l)))W();else{e.spansMultiplePages=!0;for(var f=0;f<u.columns.length;f++){var h=u.columns[f],g=e.cells[h.dataKey];if(g){var p=g.styles.fontSize/P.default().scaleFactor()*S.FONT_ROW_RATIO,y=g.padding("vertical"),b=Math.floor((c-y)/p);if(Array.isArray(g.text)&&g.text.length>b){d[h.dataKey]=g.text.splice(b,g.text.length);var m=g.height-c;s<m&&(s=m)}g.height=c}}}if(C(e),0<Object.keys(d).length){for(var v=0,f=0;f<u.columns.length;f++){var w=u.columns[f],g=e.cells[w.dataKey];g&&(g.height=s,g.height>v&&(v=g.height),g&&(g.text=d[w.dataKey]||""))}W(),e.pageNumber++,e.height=s,e.maxCellHeight=v,t(e,o)}}(t,e===o.body.length-1)}),i.applyUserStyles(),!0!==t.showFoot&&"lastPage"!==t.showFoot&&"everyPage"!==t.showFoot||o.foot.forEach(function(t){return C(t)}),i.addTableBorder(),o.callEndPageHooks()},e.addPage=W},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var h=o(2),g=o(1),p=o(0);e.calculateWidths=function(t){10/p.default().scaleFactor()*t.columns.length>t.width?console.error("Columns could not fit on page"):t.minWidth>t.width&&console.error("Column widths to wide and can't fit page"),function t(e,o,n){for(var r=0;r<e.length;r++){var a=e[r],l=a.wrappedWidth/n,i=o*l,s=a.wrappedWidth+i;if(!(s>=a.minWidth)){a.width=a.minWidth+1/p.default().scaleFactor(),n-=a.wrappedWidth,e.splice(r,1),t(e,o,n);break}a.width=s}}(t.columns.slice(0),t.width-t.wrappedWidth,t.wrappedWidth),function(t){for(var e=t.allRows(),o=0;o<e.length;o++)for(var n=e[o],r=null,a=0,l=0,i=0;i<t.columns.length;i++){var s=t.columns[i],d=null;if(1<(l-=1)&&t.columns[i+1])a+=s.width,delete n.cells[s.dataKey];else{if(r)d=r,delete n.cells[s.dataKey],r=null;else{if(!(d=n.cells[s.dataKey]))continue;if(l=d.colSpan,a=0,1<d.colSpan){r=d,a+=s.width;continue}}d.width=s.width+a}}}(t),function(t){for(var e={count:0,height:0},o=0,n=t.allRows();o<n.length;o++){for(var r=n[o],a=0,l=t.columns;a<l.length;a++){var i=l[a],s=r.cells[i.dataKey];if(s){g.applyStyles(s.styles);var d=s.width-s.padding("horizontal");"linebreak"===s.styles.overflow?s.text=p.default().doc.splitTextToSize(s.text,d+1/(p.default().scaleFactor()||1),{fontSize:s.styles.fontSize}):"ellipsize"===s.styles.overflow?s.text=g.ellipsize(s.text,d,s.styles):"hidden"===s.styles.overflow?s.text=g.ellipsize(s.text,d,s.styles,""):"function"==typeof s.styles.overflow&&(s.text=s.styles.overflow(s.text,d));var u=Array.isArray(s.text)?s.text.length:1,c=s.styles.fontSize/p.default().scaleFactor()*h.FONT_ROW_RATIO;s.contentHeight=u*c+s.padding("vertical"),s.styles.minCellHeight>s.contentHeight&&(s.contentHeight=s.styles.minCellHeight);var f=s.contentHeight/s.rowSpan;1<s.rowSpan&&e.count*e.height<f*s.rowSpan?e={height:f,count:s.rowSpan}:e&&0<e.count&&e.height>f&&(f=e.height),f>r.height&&(r.height=f,r.maxCellHeight=f,r.maxCellLineCount=u)}}e.count--}}(t),function(t){for(var e={},o=1,n=t.allRows(),r=0;r<n.length;r++){for(var a=n[r],l=0,i=t.columns;l<i.length;l++){var s=i[l],d=e[s.dataKey];if(1<o)o--,delete a.cells[s.dataKey];else if(d)d.cell.height+=a.height,d.cell.height>a.maxCellHeight&&(d.row.maxCellHeight=d.cell.height,d.row.maxCellLineCount=Array.isArray(d.cell.text)?d.cell.text.length:1),o=d.cell.colSpan,delete a.cells[s.dataKey],d.left--,d.left<=1&&delete e[s.dataKey];else{var u=a.cells[s.dataKey];if(!u)continue;if(u.height=a.height,1<u.rowSpan){var c=n.length-r,f=u.rowSpan>c?c:u.rowSpan;e[s.dataKey]={cell:u,left:f,row:a}}}}"head"===a.section&&(t.headHeight+=a.maxCellHeight),"foot"===a.section&&(t.footHeight+=a.maxCellHeight),t.height+=a.height}}(t)}},function(t,e,o){"use strict";var b=this&&this.__assign||function(){return(b=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var C=o(9),x=o(2),m=o(12),W=o(3),v=o(1),H=o(0),w=o(14);e.parseInput=function(t){var e=function(t){if(1===t.length)return t[0];var e=t[2]||{};return e.body=t[1],e.columns=t[0],e.columns.forEach(function(t){null==t.header&&(t.header=t.title)}),e}(t),o=[H.getGlobalOptions(),H.getDocumentOptions(),e];w.default(o);var n=new C.Table;(H.default().table=n).id=e.tableId;var r=H.default().doc;n.userStyles={textColor:r.getTextColor?r.getTextColor():0,fontSize:r.internal.getFontSize(),fontStyle:r.internal.getFont().fontStyle,font:r.internal.getFont().fontName};for(var a=function(e){var t=o.map(function(t){return t[e]||{}});n.styles[e]=W.assign.apply(void 0,[{}].concat(t))},l=0,i=Object.keys(n.styles);l<i.length;l++)a(i[l]);for(var s=0,d=o;s<d.length;s++)for(var u=d[s],c=0,f=Object.keys(n.cellHooks);c<f.length;c++){var h=f[c];u&&"function"==typeof u[h]&&(n.cellHooks[h].push(u[h]),delete u[h])}n.settings=W.assign.apply(void 0,[{},x.defaultConfig()].concat(o)),n.settings.margin=v.marginOrPadding(n.settings.margin,x.defaultConfig().margin),"auto"===n.settings.theme&&(n.settings.theme=n.settings.useCss?"plain":"striped"),!1===n.settings.startY&&delete n.settings.startY;var g=H.default().doc.previousAutoTable,p=g&&g.startPageNumber+g.pageNumber-1===H.default().pageNumber();null==n.settings.startY&&p&&(n.settings.startY=g.finalY+20/H.default().scaleFactor());var y={};return n.settings.html&&(y=m.parseHtml(n.settings.html,n.settings.includeHiddenHtml,n.settings.useCss)||{}),n.settings.head=y.head||n.settings.head||[],n.settings.body=y.body||n.settings.body||[],n.settings.foot=y.foot||n.settings.foot||[],function(P){var e=P.settings;P.columns=function(t){if(t.columns)return t.columns.map(function(t,e){var o=t.dataKey||t.key||e,n=null!=t?t:e;return new C.Column(o,n,e)});var e=b({},t.head[0],t.body[0],t.foot[0]);delete e._element;var o=Object.keys(e);return o.map(function(t){return new C.Column(t,t,t)})}(e);for(var t=function(w){var S={},t=e[w];if(0===t.length&&e.columns){var n={};P.columns.forEach(function(t){var e=t.raw;if("head"===w){var o="object"==typeof e?e.header:e;o&&(n[t.dataKey]=o)}else"foot"===w&&e.footer&&(n[t.dataKey]=e.footer)}),Object.keys(n).length&&t.push(n)}t.forEach(function(t,e){var o=0,n=new C.Row(t,e,w);P[w].push(n);for(var r,a,l,i,s,d,u,c,f=0,h=0,g=0,p=P.columns;g<p.length;g++){var y=p[g];if(null==S[y.dataKey]||0===S[y.dataKey].left)if(0===h){var b=void 0;b=Array.isArray(t)?t[y.dataKey-f-o]:t[y.dataKey];var m=(r=w,a=y.dataKey,l=e,u=d=void 0,i=H.default().table,s=x.getTheme(i.settings.theme),d=[s.table,s[r],i.styles.styles,i.styles[r+"Styles"]],u="body"===r&&i.styles.columnStyles[a]||{},c="body"===r&&l%2==0?W.assign({},s.alternateRow,i.styles.alternateRowStyles):{},W.assign.apply(void 0,[x.defaultStyles()].concat(d.concat([c,u])))),v=new C.Cell(b,m,w);n.cells[y.dataKey]=v,P.callCellHooks(P.cellHooks.didParseCell,v,n,y),h=v.colSpan-1,S[y.dataKey]={left:v.rowSpan-1,times:h}}else h--,f++;else S[y.dataKey].left--,h=S[y.dataKey].times,o++}})},o=0,n=["head","body","foot"];o<n.length;o++){var r=n[o];t(r)}P.allRows().forEach(function(t){for(var e=0,o=P.columns;e<o.length;e++){var n=o[e],r=t.cells[n.dataKey];r&&1===r.colSpan&&(r.wrappedWidth>n.wrappedWidth&&(n.wrappedWidth=r.wrappedWidth),r.minWidth>n.minWidth&&(n.minWidth=r.minWidth))}})}(n),n.minWidth=n.columns.reduce(function(t,e){return t+e.minWidth},0),n.wrappedWidth=n.columns.reduce(function(t,e){return t+e.wrappedWidth},0),"number"==typeof n.settings.tableWidth?n.width=n.settings.tableWidth:"wrap"===n.settings.tableWidth?n.width=n.wrappedWidth:n.width=H.default().pageWidth()-n.margin("left")-n.margin("right"),n}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(2),i=o(0),l=o(10),s=o(1),d=o(11),r=function(){this.willParseCell=[],this.didParseCell=[],this.willDrawCell=[],this.didDrawCell=[],this.didDrawPage=[]},a=function(){function t(){this.columns=[],this.head=[],this.body=[],this.foot=[],this.height=0,this.width=0,this.preferredWidth=0,this.wrappedWidth=0,this.minWidth=0,this.headHeight=0,this.footHeight=0,this.startPageNumber=1,this.pageNumber=1,this.styles={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},this.cellHooks=new r}return Object.defineProperty(t.prototype,"pageCount",{get:function(){return this.pageNumber},enumerable:!0,configurable:!0}),t.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},t.prototype.callCellHooks=function(t,e,o,n){for(var r=0,a=t;r<a.length;r++){if(!1===(0,a[r])(new l.CellHookData(e,o,n)))return!1}return!0},t.prototype.callEndPageHooks=function(){s.applyUserStyles();for(var t=0,e=this.cellHooks.didDrawPage;t<e.length;t++){(0,e[t])(new l.HookData)}},t.prototype.margin=function(t){return s.marginOrPadding(this.settings.margin,n.defaultConfig().margin)[t]},t}();e.Table=a;var u=function(){function t(t,e,o){this.cells={},this.height=0,this.maxCellLineCount=1,this.maxCellHeight=0,this.pageNumber=1,this.spansMultiplePages=!1,(this.raw=t)._element&&(this.raw=t._element),this.index=e,this.section=o}return Object.defineProperty(t.prototype,"pageCount",{get:function(){return this.pageNumber},enumerable:!0,configurable:!0}),t}();e.Row=u;var c=function(){function t(t,e,o){this.contentWidth=0,this.wrappedWidth=0,this.minWidth=0,this.textPos={},this.height=0,this.width=0,this.rowSpan=t&&t.rowSpan||1,this.colSpan=t&&t.colSpan||1,this.styles=d(e,t&&t.styles||{}),this.section=o;var n="",r=t&&void 0!==t.content?t.content:t;r=null!=r&&null!=r.dataKey?r.title:r;var a="object"==typeof window&&window.HTMLElement&&r instanceof window.HTMLElement;this.raw=a?r:t,n=r&&a?(r.innerText||"").replace(/' '+/g," ").trim():null!=r?""+r:"";if(this.text=n.split(/\r\n|\r|\n/g),this.contentWidth=this.padding("horizontal")+s.getStringWidth(this.text,this.styles),"number"==typeof this.styles.cellWidth)this.minWidth=this.styles.cellWidth,this.wrappedWidth=this.styles.cellWidth;else if("wrap"===this.styles.cellWidth)this.minWidth=this.contentWidth,this.wrappedWidth=this.contentWidth;else{var l=10/i.default().scaleFactor();this.minWidth=this.styles.minCellWidth||l,this.wrappedWidth=this.contentWidth,this.minWidth>this.wrappedWidth&&(this.wrappedWidth=this.minWidth)}}return t.prototype.padding=function(t){var e=s.marginOrPadding(this.styles.cellPadding,s.styles([]).cellPadding);return"vertical"===t?e.top+e.bottom:"horizontal"===t?e.left+e.right:e[t]},t}();e.Cell=c;var f=function(t,e,o){this.preferredWidth=0,this.minWidth=0,this.wrappedWidth=0,this.width=0,this.dataKey=t,this.raw=e,this.index=o};e.Column=f},function(t,e,o){"use strict";var n,a=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),l=function(){function t(){var t=r.default().table;this.table=t,this.pageNumber=t.pageNumber,this.settings=t.settings,this.cursor=t.cursor,this.doc=r.default().doc}return Object.defineProperty(t.prototype,"pageCount",{get:function(){return this.pageNumber},enumerable:!0,configurable:!0}),t}(),i=function(r){function t(t,e,o){var n=r.call(this)||this;return n.cell=t,n.row=e,n.column=o,n.section=e.section,n}return a(t,r),t}(e.HookData=l);e.CellHookData=i},function(t,e,o){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},o=0;o<10;o++)e["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var o,n,r=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),a=1;a<arguments.length;a++){for(var l in o=Object(arguments[a]))d.call(o,l)&&(r[l]=o[l]);if(s){n=s(o);for(var i=0;i<n.length;i++)u.call(o,n[i])&&(r[n[i]]=o[n[i]])}}return r}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var h=o(13),g=o(0);function i(t,e,o,n){var r=[];if(!e)return r;for(var a=0;a<e.rows.length;a++){for(var l=e.rows[a],i=[],s=n?h.parseCss(l,g.default().scaleFactor(),["cellPadding","lineWidth","lineColor"]):{},d=0;d<l.cells.length;d++){var u=l.cells[d],c=t.getComputedStyle(u);if(o||"none"!==c.display){var f=n?h.parseCss(u,g.default().scaleFactor()):{};i.push({rowSpan:u.rowSpan,colSpan:u.colSpan,styles:n?f:null,content:u})}}0<i.length&&(o||"none"!==s.display)&&(i._element=l,r.push(i))}return r}e.parseHtml=function(t,e,o){var n;if(void 0===e&&(e=!1),void 0===o&&(o=!1),n="string"==typeof t?window.document.querySelector(t):t){for(var r=i(window,n.tHead,e,o),a=[],l=0;l<n.tBodies.length;l++)a=a.concat(i(window,n.tBodies[l],e,o));return{head:r,body:a,foot:i(window,n.tFoot,e,o)}}console.error("Html table could not be found with input: ",t)}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(1);function d(t,e){var o=function t(e,o){if(!e)return null;var n=window.getComputedStyle(e)[o];return"rgba(0, 0, 0, 0)"===n||"transparent"===n||"initial"===n||"inherit"===n?t(e.parentElement,o):n}(t,e);if(!o)return null;var n=o.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!n||!Array.isArray(n))return null;var r=[parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];return 0===parseInt(n[4])||isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}e.parseCss=function(t,e,n){void 0===n&&(n=[]);var r={},o=window.getComputedStyle(t);function a(t,e,o){void 0===o&&(o=[]),0!==o.length&&-1===o.indexOf(e)||-1!==n.indexOf(t)||(0===e||e)&&(r[t]=e)}return a("fillColor",d(t,"backgroundColor")),a("lineColor",d(t,"borderColor")),a("fontStyle",(l=o,i="",("bold"===l.fontWeight||"bolder"===l.fontWeight||700<=parseInt(l.fontWeight))&&(i+="bold"),"italic"!==l.fontStyle&&"oblique"!==l.fontStyle||(i+="italic"),i)),a("textColor",d(t,"color")),a("halign",o.textAlign,["left","right","center","justify"]),a("valign",o.verticalAlign,["middle","bottom","top"]),a("fontSize",parseInt(o.fontSize||"")/(96/72)),a("cellPadding",function(t,e,o,n){if(!t)return null;var r=96/(72/n),a=(parseInt(o)-parseInt(e))/n/2,l=t.split(" ").map(function(t){return parseInt(t)/r});return l=s.marginOrPadding(l,0),a>l.top&&(l.top=a),a>l.bottom&&(l.bottom=a),l}(o.padding,o.fontSize,o.lineHeight,e)),a("lineWidth",parseInt(o.borderWidth||"")/(96/72)/e),a("font",(o.fontFamily||"").toLowerCase()),r;var l,i}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=o(1);function i(t){t.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),t.minCellHeight||(t.minCellHeight=t.rowHeight)):t.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),t.cellWidth||(t.cellWidth=t.columnWidth))}e.default=function(t){for(var e=function(n){n&&"object"!=typeof n&&console.error("The options parameter should be of type object, is: "+typeof n),void 0!==n.extendWidth&&(n.tableWidth=n.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),void 0!==n.margins&&(void 0===n.margin&&(n.margin=n.margins),console.error("Use of deprecated option: margins, use margin instead.")),!n.didDrawPage&&(n.afterPageContent||n.beforePageContent||n.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),n.didDrawPage=function(t){l.applyUserStyles(),n.beforePageContent&&n.beforePageContent(t),l.applyUserStyles(),n.afterPageContent&&n.afterPageContent(t),l.applyUserStyles(),n.afterPageAdd&&1<t.pageNumber&&t.afterPageAdd(t),l.applyUserStyles()}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach(function(t){n[t]&&console.error('The "'+t+'" hook has changed in version 3.0, check the changelog for how to migrate.')}),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach(function(t){var e=t[0],o=t[1];n[o]&&(console.error("Use of deprecated option "+o+". Use "+e+" instead"),n[e]=n[o])}),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach(function(t){var e="string"==typeof t?t:t[0],o="string"==typeof t?t:t[1];void 0!==n[e]&&(void 0===n.styles[o]&&(n.styles[o]=n[e]),console.error("Use of deprecated option: "+e+", use the style "+o+" instead."))});for(var t=0,e=["styles","bodyStyles","headStyles","footStyles"];t<e.length;t++)i(n[e[t]]||{});for(var o=n.columnStyles||{},r=0,a=Object.keys(o);r<a.length;r++)i(o[a[r]]||{})},o=0,n=t;o<n.length;o++)e(n[o])}},function(t,e,o){o(4).API.autoTableText=function(t,e,o,n){n=n||{};"number"==typeof e&&"number"==typeof o||console.error("The x and y parameters are required. Missing for text: ",t);var r=this.internal.scaleFactor,a=this.internal.getFontSize()/r,l=null,i=1;if("middle"!==n.valign&&"bottom"!==n.valign&&"center"!==n.halign&&"right"!==n.halign||(i=(l="string"==typeof t?t.split(/\r\n|\r|\n/g):t).length||1),o+=a*(2-1.15),"middle"===n.valign?o-=i/2*a*1.15:"bottom"===n.valign&&(o-=i*a*1.15),"center"===n.halign||"right"===n.halign){var s=a;if("center"===n.halign&&(s*=.5),1<=i){for(var d=0;d<l.length;d++)this.text(l[d],e-this.getStringUnitWidth(l[d])*s,o),o+=a;return this}e-=this.getStringUnitWidth(t)*s}return"justify"===n.halign?this.text(t,e,o,{maxWidth:n.maxWidth||100,align:"justify"}):this.text(t,e,o),this}}])});