(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b732341"],{6381:function(t,e,n){"use strict";n("9d40")},6776:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("CCard",[n("CCardHeader",[n("strong",[t._v("상품 리스트")]),n("CButton",{on:{click:t.addProduct}},[n("small",{staticClass:"text-muted"},[t._v(" 추가")])])],1),n("CCardBody",[n("CDataTable",{attrs:{hover:"",striped:"",loading:t.isLoading,items:t.items,fields:t.fields,"items-per-page":t.perPage,pagination:t.$options.paginationProps,"index-column":"","clickable-rows":""},on:{"row-clicked":t.rowClicked},scopedSlots:t._u([{key:"prod_name",fn:function(e){var r=e.item;return[n("td",[n("strong",[t._v(t._s(r.prod_name))])])]}},{key:"price",fn:function(e){var r=e.item;return[n("td",[t._v(" "+t._s(t.numberWithCommas(r.price))+"원 ")])]}},{key:"image_path",fn:function(t){var e=t.item;return[n("td",[n("img",{attrs:{src:e.image_path,width:"70",height:"70"}})])]}},{key:"type_index",fn:function(e){var r=e.item;return[n("td",[n("div",[t._v(" "+t._s(t.getTypeOption(r.type_index))+" ")])])]}},{key:"status_index",fn:function(e){var r=e.item;return[n("td",[n("div",{directives:[{name:"show",rawName:"v-show",value:1!==r.status_index,expression:"item.status_index !== 1"}],staticClass:"sold_out"},[t._v(" "+t._s(t.getStatusOption(r.status_index))+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:1===r.status_index,expression:"item.status_index === 1"}]},[t._v("-")])])]}}])})],1)],1)],1)},i=[],a=(n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf"),n("1da1")),o=n("c4c8"),u={name:"AdminProductList",data:function(){return{items:[],fields:[{key:"index",label:"번호"},{key:"prod_id",label:"상품 아이디"},{key:"image_path",label:"상품 이미지"},{key:"type_index",label:"상품분류"},{key:"prod_name",label:"상품명"},{key:"price",label:"가격"},{key:"status_index",label:"상태"}],isLoading:!0,perPage:5}},paginationProps:{align:"center",doubleArrows:!0,previousButtonHtml:"prev",nextButtonHtml:"next"},mounted:function(){this.getProductData()},methods:{productLink:function(t){return"/admin/product/".concat(t.toString())},rowClicked:function(t){var e=this.productLink(t.prod_id);this.$router.push({path:e})},getProductData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["d"]();case 3:e=t.sent,this.items=e.data.result,this.isLoading=!1,t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),getTypeOption:function(t){return 1===t?"반지":2===t?"목걸이":"기타"},getStatusOption:function(t){return 1===t?"NONE":2===t?"NEW":3===t?"HOT":"SOLD OUT"},getDate:function(t){var e=new Date(t);return e.toLocaleString()},numberWithCommas:function(t){if(t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},addProduct:function(){this.$router.push("/admin/add-product")}}},s=u,d=(n("6381"),n("2877")),c=Object(d["a"])(s,r,i,!1,null,"5aa78928",null);e["default"]=c.exports},"9d40":function(t,e,n){},c4c8:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return d}));var r=n("bc3a"),i=n.n(r);function a(t){return i()({method:"post",url:"/api/products",data:t})}function o(t){return i()({method:"get",url:"/api/products",data:t})}function u(t,e){return i()({method:"get",url:"/api/products/"+t,data:e})}function s(t,e){return i()({method:"put",url:"/api/products/"+t,data:e})}function d(t,e){return i()({method:"delete",url:"/api/products/"+t,data:e})}}}]);
//# sourceMappingURL=chunk-5b732341.cecffeaf.js.map