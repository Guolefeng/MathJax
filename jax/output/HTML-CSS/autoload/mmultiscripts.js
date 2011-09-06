/*
 *  /MathJax/jax/output/HTML-CSS/autoload/mmultiscripts.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var c="1.1";var a=MathJax.ElementJax.mml,b=MathJax.OutputJax["HTML-CSS"];a.mmultiscripts.Augment({toHTML:function(I,G,B){I=this.HTMLcreateSpan(I);var N=this.HTMLgetScale();var l=b.createStack(I),f;var j=b.createBox(l);if(this.data[this.base]){var k=this.data[this.base].toHTML(j);if(B!=null){b.Remeasured(this.data[this.base].HTMLstretchV(j,G,B),j)}else{if(G!=null){b.Remeasured(this.data[this.base].HTMLstretchH(j,G),j)}else{b.Measured(k,j)}}}var L=b.TeX.x_height*N,A=b.TeX.scriptspace*N*0.75;var z=this.HTMLgetScripts(l,A);var m=z[0],e=z[1],w=z[2],i=z[3];var g=(this.data[1]||this).HTMLgetScale();var E=b.TeX.sup_drop*g,C=b.TeX.sub_drop*g;var x=j.bbox.h-E,o=j.bbox.d+C,M=0,F;if(j.bbox.ic){M=j.bbox.ic}if(this.data[this.base]&&(this.data[this.base].type==="mi"||this.data[this.base].type==="mo")){if(this.data[this.base].data.join("").length===1&&j.bbox.scale===1&&!this.data[this.base].Get("largeop")){x=o=0}}var H=this.getValues("subscriptshift","superscriptshift");H.subscriptshift=(H.subscriptshift===""?0:b.length2em(H.subscriptshift));H.superscriptshift=(H.superscriptshift===""?0:b.length2em(H.superscriptshift));var n=0;if(w){n=w.bbox.w+M}else{if(i){n=i.bbox.w-M}}if(n<0){n=0}b.placeBox(j,n,0);if(!e&&!i){o=Math.max(o,b.TeX.sub1*N,H.subscriptshift);if(m){o=Math.max(o,m.bbox.h-(4/5)*L)}if(w){o=Math.max(o,w.bbox.h-(4/5)*L)}if(m){b.placeBox(m,n+j.bbox.w+A-M,-o)}if(w){b.placeBox(w,0,-o)}}else{if(!m&&!w){f=this.getValues("displaystyle","texprimestyle");F=b.TeX[(f.displaystyle?"sup1":(f.texprimestyle?"sup3":"sup2"))];x=Math.max(x,F*N,H.superscriptshift);if(e){x=Math.max(x,e.bbox.d+(1/4)*L)}if(i){x=Math.max(x,i.bbox.d+(1/4)*L)}if(e){b.placeBox(e,n+j.bbox.w+A,x)}if(i){b.placeBox(i,0,x)}}else{o=Math.max(o,b.TeX.sub2*N);var y=b.TeX.rule_thickness*N;var J=(m||w).bbox.h,K=(e||i).bbox.d;if(w){J=Math.max(J,w.bbox.h)}if(i){K=Math.max(K,i.bbox.d)}if((x-K)-(J-o)<3*y){o=3*y-x+K+J;E=(4/5)*L-(x-K);if(E>0){x+=E;o-=E}}x=Math.max(x,H.superscriptshift);o=Math.max(o,H.subscriptshift);if(e){b.placeBox(e,n+j.bbox.w+A,x)}if(i){b.placeBox(i,n+M-i.bbox.w,x)}if(m){b.placeBox(m,n+j.bbox.w+A-M,-o)}if(w){b.placeBox(w,n-w.bbox.w,-o)}}}this.HTMLhandleSpace(I);this.HTMLhandleColor(I);return I},HTMLgetScripts:function(p,q){var o,d,e=[];var n=1,g=this.data.length,f=0;for(var h=0;h<4;h+=2){while(n<g&&this.data[n].type!=="mprescripts"){for(var l=h;l<h+2;l++){if(this.data[n]&&this.data[n].type!=="none"){if(!e[l]){e[l]=b.createBox(p);e[l].bbox=this.HTMLemptyBBox({});if(f){b.createBlank(e[l],f);e[l].bbox.w=e[l].bbox.rw=f}}this.data[n].toHTML(e[l]);this.HTMLcombineBBoxes(this.data[n],e[l].bbox)}n++}d=e[h];o=e[h+1];if(d&&o){if(d.bbox.w<o.bbox.w){b.createBlank(d,o.bbox.w-d.bbox.w);d.bbox.w=o.bbox.w;d.bbox.rw=Math.max(d.bbox.w,d.bbox.rw)}else{if(d.bbox.w>o.bbox.w){b.createBlank(o,d.bbox.w-o.bbox.w);o.bbox.w=d.bbox.w;o.bbox.rw=Math.max(o.bbox.w,o.bbox.rw)}}}if(d){f=d.bbox.w}else{if(o){f=o.bbox.w}}}n++;f=0}for(l=0;l<4;l++){if(e[l]){e[l].bbox.w+=q;e[l].bbox.rw=Math.max(e[l].bbox.w,e[l].bbox.rw);this.HTMLcleanBBox(e[l].bbox)}}return e},HTMLstretchH:a.mbase.HTMLstretchH,HTMLstretchV:a.mbase.HTMLstretchV});MathJax.Hub.Startup.signal.Post("HTML-CSS mmultiscripts Ready");MathJax.Ajax.loadComplete(b.autoloadDir+"/mmultiscripts.js")});

