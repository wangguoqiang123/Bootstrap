/**
 *自己的js脚本
 *
 *
 * 
 */


'use strict'


$(() => {
	/**
	 *文档加载完成才会执行
	 *根据屏幕宽度展示什么
	 * 
	 */
	

	function resize() {
		//获取屏幕宽度
		const windowWidth = $(window).width();
		//判断屏幕大小
		const isSmallScreen = windowWidth < 768;

		//遍历每一张轮播图设置背景
		$('#main_ad > .carousel-inner > .item').each((i, item) => {
			//转化为jquery对象
			const $item = $(item);
			//var imgSrc = $item.data(is)
			const imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
			//jquery中专门获取自定义属性是$element.data()
			//是一个函数，专门来获取元素的自定义属性
			//
			//$element.attr('data-abc')
			//
			//
			//JS中获取data属性的方法
			//element.getAttribute('data-abc')
			//element.setAttribute('data-abc','')
			

			$item.css('backgroundImage', `url("${imgSrc}")`);

			if(isSmallScreen) {
				$item.html(`<img src="${imgSrc}" alt=""/>`)
			}else{
				$item.empty();
			}

		})
	}
	



	$(window).on('resize', resize).trigger('resize');


	//初始化tooltips插件
	$('[data-toggle="tooltip"]').tooltip();

	/**
	 * 控制标签元素宽度，防止元素下掉
	 * 1.获取所有子元素宽度
	 * 2.遍历子元素
	 * 3.将所有元素宽度相加
	 * 4.将所有宽度和设为容器宽
	 */
	 const $ulContainer = $('#products .nav-tabs');
	 /*原本有padding防止掉落，初始值设置大点*/
	 let width = 30;
	 /*遍历子元素*/
	 $ulContainer.children().each((index, element) => {
	    // console.log(element.clientWidth);
	    // console.log($(element).width());
	    width += element.clientWidth;
	  });

	 /*啥时候显示横向滚动条*/
	 if (width > $(window).width()) {
		$ulContainer
	      .css('width', width)
	      .parent().css('overflow-x', 'scroll');
	  }

	/*新闻界面实现tab栏切换,data-title的处理*/
	/**
	 * 1,第一步获取new-title元素
	 * 2，给a注册点击事件
	 */

	 const newsTitle = $('.new-title');
	 $('#news .nav-pills a').on('click', function() {
	 	//变量本地化
	 	const $this = $(this);
	 	//获取data的值
	 	console.log($this.data('title'));
	 	const title = $this.data('title');
	 	newsTitle.text(title);
	 })




});