<?php require_once("res/x5engine.php"); ?>
<!DOCTYPE html><!-- HTML5 -->
<html prefix="og: http://ogp.me/ns#" lang="ru-RU" dir="ltr">
	<head>
		<title>Поиск</title>
		<meta charset="utf-8" />
		<!--[if IE]><meta http-equiv="ImageToolbar" content="False" /><![endif]-->
		<meta property="og:locale" content="ru" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://vannalux.github.io/imsearch.php" />
		<meta property="og:title" content="Поиск" />
		<meta property="og:site_name" content="Пробный сайт" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		
		<link rel="stylesheet" href="style/reset.css?2020-3-3-1" media="screen,print" />
		<link rel="stylesheet" href="style/print.css?2020-3-3-1" media="print" />
		<link rel="stylesheet" href="style/style.css?2020-3-3-1" media="screen,print" />
		<link rel="stylesheet" href="style/template.css?2020-3-3-1" media="screen" />
		<link rel="stylesheet" href="pcss/imsearch.css?2020-3-3-1-637391864225542301" media="screen,print" />
		<script src="res/jquery.js?2020-3-3-1"></script>
		<script src="res/x5engine.js?2020-3-3-1" data-files-version="2020-3-3-1"></script>
		<script>
			window.onload = function(){ checkBrowserCompatibility('Ваш браузер не поддерживает функции, требуемые для визуализации этого Сайта.','Возможно, Ваш браузер не поддерживает функции, требуемые для визуализации этого Сайта.','[1]Обновите Ваш браузер[/1] или [2]продолжите процедуру [/2].','http://outdatedbrowser.com/'); };
			x5engine.utils.currentPagePath = 'imsearch.php';
			x5engine.boot.push(function () { x5engine.imPageToTop.initializeButton({}); });
		</script>
		<link rel="icon" href="favicon.png?2020-3-3-1-637391864225512216" type="image/png" />
		<style>
h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
}
</style>
	</head>
	<body>
		<div id="imPageExtContainer">
			<div id="imPageIntContainer">
				<div id="imHeaderBg"></div>
				<div id="imFooterBg"></div>
				<div id="imPage">
					<header id="imHeader">
						
						<div id="imHeaderObjects"></div>
					</header>
					<div id="imStickyBarContainer">
						<div id="imStickyBarGraphics"></div>
						<div id="imStickyBar">
							<div id="imStickyBarObjects"><div id="imStickyBar_imMenuObject_01_wrapper" class="template-object-wrapper"><!-- UNSEARCHABLE --><div id="imStickyBar_imMenuObject_01"><div id="imStickyBar_imMenuObject_01_container"><div class="hamburger-button hamburger-component"><div><div><div class="hamburger-bar"></div><div class="hamburger-bar"></div><div class="hamburger-bar"></div></div></div></div><div class="hamburger-menu-background-container hamburger-component">
	<div class="hamburger-menu-background menu-mobile menu-mobile-animated hidden">
		<div class="hamburger-menu-close-button"><span>&times;</span></div>
	</div>
</div>
<ul class="menu-mobile-animated hidden">
	<li class="imMnMnFirst imPage" data-link-paths=",/index.html,/">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="index.html">
Главная		</a>
</div>
</div>
	</li><li class="imMnMnLast imPage" data-link-paths=",/page-1.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="page-1.html">
Page 1		</a>
</div>
</div>
	</li></ul></div></div><!-- UNSEARCHABLE END --><script>
var imStickyBar_imMenuObject_01_settings = {
	'menuId': 'imStickyBar_imMenuObject_01',
	'responsiveMenuEffect': 'slide',
	'animationDuration': 1000,
}
x5engine.boot.push(function(){x5engine.initMenu(imStickyBar_imMenuObject_01_settings)});
$(function () {$('#imStickyBar_imMenuObject_01_container ul li').not('.imMnMnSeparator').each(function () {    var $this = $(this), timeout = 0;    $this.on('mouseenter', function () {        if($(this).parents('#imStickyBar_imMenuObject_01_container-menu-opened').length > 0) return;         clearTimeout(timeout);        setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeIn(); }, 250);    }).on('mouseleave', function () {        if($(this).parents('#imStickyBar_imMenuObject_01_container-menu-opened').length > 0) return;         timeout = setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeOut(); }, 250);    });});});

</script>
</div></div>
						</div>
					</div>
					<a class="imHidden" href="#imGoToCont" title="Заголовок главного меню">Перейти к контенту</a>
					<div id="imSideBar">
						<div id="imSideBarObjects"><div id="imSideBar_imObjectImage_01_wrapper" class="template-object-wrapper"><div id="imSideBar_imObjectImage_01"><div id="imSideBar_imObjectImage_01_container"><img src="images/empty-GT_imagea-1-.png" title="" alt="" />
</div></div></div></div>
					</div>
					<div id="imContentGraphics"></div>
					<main id="imContent">
						<a id="imGoToCont"></a>
						<div id="imSearchPage">
						<h1 id="imPgTitle">Результаты поиска</h1>
						<?php
						$search = new imSearch();
						$keys = isset($_GET['search']) ? @htmlspecialchars($_GET['search']) : "";
						$page = isset($_GET['page']) ? @htmlspecialchars($_GET['page']) : 0;
						$type = isset($_GET['type']) ? @htmlspecialchars($_GET['type']) : "pages"; ?>
						<div class="searchPageContainer">
						<?php echo $search->search($keys, $page, $type); ?>
						</div>
						</div>
						
					</main>
					<footer id="imFooter">
						<div id="imFooterObjects"><div id="imFooter_imTextObject_02_wrapper" class="template-object-wrapper"><div id="imFooter_imTextObject_02">
	<div data-index="0"  class="text-tab-content grid-prop current-tab "  id="imFooter_imTextObject_02_tab0" style="opacity: 1; ">
		<div class="text-inner">
			<div><div style="text-align: center;"><span class="fs12 cf1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div></div>
		</div>
	</div>

</div>
</div></div>
					</footer>
				</div>
				<span class="imHidden"><a href="#imGoToCont" title="Прочесть эту страницу заново">Назад к содержимому</a></span>
			</div>
		</div>
		
		<noscript class="imNoScript"><div class="alert alert-red">Для использования этого сайта необходимо включить JavaScript.</div></noscript>
	</body>
</html>
