!function(){document.body.classList.contains("woocommerce-cart")||document.body.classList.contains("woocommerce-checkout")||window.innerWidth<768||window.addEventListener("load",function(){var a=document.querySelector(".site-header-cart");a.addEventListener("mouseover",function(){var b=window.outerHeight,c=a.querySelector(".widget_shopping_cart_content").getBoundingClientRect().bottom+a.offsetHeight,d=a.querySelector(".cart_list");c>b&&(d.style.maxHeight="15em",d.style.overflowY="auto",a.addEventListener("mouseleave",function(){d.style.maxHeight="",d.style.overflowY=""}))})})}();