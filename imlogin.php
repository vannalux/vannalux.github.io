<?php require_once("res/x5engine.php"); ?>
<?php
$pa = Configuration::getPrivateArea();
if (isset($_POST['imUname']) && isset($_POST['imPwd'])) {
	$result = $pa->login($_POST['imUname'], $_POST['imPwd']);
	if ($result < 0) {
		header('Location: imlogin.php?loginstatus=' . $result);
		exit();
	}
	$page = $pa->getSavedPage() ? $pa->getSavedPage() : $pa->getLandingPage();
	if (!$page) {
		if(isset($_SERVER["HTTP_REFERER"]) && strlen($_SERVER["HTTP_REFERER"]) && strpos($_SERVER["HTTP_REFERER"], 'imlogin.php') === false) {
			$page = preg_replace('/\?.*/', '', $_SERVER["HTTP_REFERER"]) . '?loginstatus=1';
		} else {
			$page = 'imlogin.php?loginstatus=1';
		}
	}
	$pa->clearSavedPage();
	$pa->sessionSafeRedirect($page);
}
?><!DOCTYPE html><!-- HTML5 -->
<html prefix="og: http://ogp.me/ns#" lang="ru-RU" dir="ltr">
	<head>
		<title>Доступ ограничен - Moy</title>
		<meta charset="utf-8" />
		<!--[if IE]><meta http-equiv="ImageToolbar" content="False" /><![endif]-->
		<meta name="generator" content="Incomedia WebSite X5 Evo 2019.3.14 - www.websitex5.com" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		
		<link rel="stylesheet" href="style/reset.css?2019-3-14-0" media="screen,print" />
		<link rel="stylesheet" href="style/print.css?2019-3-14-0" media="print" />
		<link rel="stylesheet" href="style/style.css?2019-3-14-0" media="screen,print" />
		<link rel="stylesheet" href="style/template.css?2019-3-14-0" media="screen" />
		<link rel="stylesheet" href="pluginAppObj/imHeader_pluginAppObj_04/custom.css" media="screen, print" />
		
		<link rel="stylesheet" href="pluginAppObj/imSideBar_pluginAppObj_01/custom.css" media="screen, print" />
		<link rel="stylesheet" href="pcss/imlogin.css?2019-3-14-0-637175781852575230" media="screen,print" />
		<script src="res/jquery.js?2019-3-14-0"></script>
		<script src="res/x5engine.js?2019-3-14-0" data-files-version="2019-3-14-0"></script>
		<script src="pluginAppObj/imHeader_pluginAppObj_04/main.js"></script>
		
		<script src="pluginAppObj/imSideBar_pluginAppObj_01/main.js"></script>
		<script>
			window.onload = function(){ checkBrowserCompatibility('Ваш браузер не поддерживает функции, требуемые для визуализации этого Сайта.','Возможно, Ваш браузер не поддерживает функции, требуемые для визуализации этого Сайта.','[1]Обновите Ваш браузер[/1] или [2]продолжите процедуру [/2].','http://outdatedbrowser.com/'); };
			x5engine.utils.currentPagePath = 'imlogin.php';
			x5engine.boot.push(function () { x5engine.imPageToTop.initializeButton({}); });
		</script>
		<link rel="icon" href="favicon.png?2019-3-14-0-637175781852575230" type="image/png" />
		<link rel="alternate" type="application/rss+xml" title="Блог о самом интересном" href="blog/x5feed.php" />
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
						<h1 class="imHidden">Доступ ограничен - Moy</h1>
						<div id="imHeaderObjects"><div id="imHeader_imObjectTitle_06_wrapper" class="template-object-wrapper"><div id="imHeader_imObjectTitle_06"><span id ="imHeader_imObjectTitle_06_text" >BLOG</span></div></div><div id="imHeader_imObjectTitle_05_wrapper" class="template-object-wrapper"><div id="imHeader_imObjectTitle_05"><span id ="imHeader_imObjectTitle_05_text" >DESIGN</span></div></div><div id="imHeader_imMenuObject_03_wrapper" class="template-object-wrapper"><!-- UNSEARCHABLE --><div id="imHeader_imMenuObject_03"><div id="imHeader_imMenuObject_03_container"><div class="hamburger-button hamburger-component"><div><div><div class="hamburger-bar"></div><div class="hamburger-bar"></div><div class="hamburger-bar"></div></div></div></div><div class="hamburger-menu-background-container hamburger-component">
	<div class="hamburger-menu-background menu-mobile menu-mobile-animated hidden">
		<div class="hamburger-menu-close-button"><span>&times;</span></div>
	</div>
</div>
<ul class="menu-mobile-animated hidden">
	<li class="imMnMnFirst imPage" data-link-paths=",/index.html,/">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="index.html">
ГЛАВНАЯ		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imLevel" data-link-paths=",/blog/index.php,/blog/" data-link-hash="-1004162301"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="blog/index.php" class="label" onclick="return x5engine.utils.location('blog/index.php', null, false)">БЛОГ</a></div></div></li><li class="imMnMnLast imPage" data-link-paths=",/page-9.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="page-9.html">
КОНТАКТЫ		</a>
</div>
</div>
	</li></ul></div></div><!-- UNSEARCHABLE END --><script>
var imHeader_imMenuObject_03_settings = {
	'menuId': 'imHeader_imMenuObject_03',
	'responsiveMenuEffect': 'push',
	'animationDuration': 1000,
}
x5engine.boot.push(function(){x5engine.initMenu(imHeader_imMenuObject_03_settings)});
$(function () {$('#imHeader_imMenuObject_03_container ul li').not('.imMnMnSeparator').each(function () {    var $this = $(this), timeout = 0;    $this.on('mouseenter', function () {        if($(this).parents('#imHeader_imMenuObject_03_container-menu-opened').length > 0) return;         clearTimeout(timeout);        setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeIn(); }, 250);    }).on('mouseleave', function () {        if($(this).parents('#imHeader_imMenuObject_03_container-menu-opened').length > 0) return;         timeout = setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeOut(); }, 250);    });});});
$(function () {$('#imHeader_imMenuObject_03_container > ul > li').not('.imMnMnSeparator').each(function () {    var $this = $(this), timeout = 0;    $this.on('mouseenter', function () {        clearTimeout(timeout);        var overElem = $this.children('.label-wrapper-over');        if(overElem.length == 0)            overElem = $this.children('.label-wrapper').clone().addClass('label-wrapper-over').appendTo($this);        setTimeout(function(){overElem.addClass('animated');}, 10);    }).on('mouseleave', function () {        var overElem = $this.children('.label-wrapper-over');        overElem.removeClass('animated');        timeout = setTimeout(function(){overElem.remove();}, 500);    });});});
</script>
</div><div id="imHeader_pluginAppObj_04_wrapper" class="template-object-wrapper"><!-- Social Icons v.16 --><div id="imHeader_pluginAppObj_04">
            <div id="soc_imHeader_pluginAppObj_04">
                <div class="wrapper horizontal flat none">
                	<div class='social-icon flat'><a href='https://fb.me/Incomedia' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M57,93V54H70.14l2-15H57V29.09c0-4.39.94-7.39,7.24-7.39H72V8.14a98.29,98.29,0,0,0-11.6-.6C48.82,7.54,41,14.61,41,27.59V39H27V54H41V93H57Z"/></svg><span class='fallbacktext'>Fb</span></a></div><div class='social-icon flat'><a href='https://www.youtube.com/user/incomedia' target='_blank'><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><path d="M89.2,34S88.42,28.49,86,26.06c-3-3.19-6.45-3.14-8-3.32C66.81,21.93,50,22,50,22h0s-16.79-.07-28,0.74c-1.56.19-5,.17-8,3.36C11.58,28.53,10.8,34,10.8,34A120.47,120.47,0,0,0,10,47V53A121,121,0,0,0,10.8,66s0.78,5.51,3.18,7.94c3,3.19,7,3.09,8.82,3.42,6.4,0.61,27.2.8,27.2,0.8s16.81,0,28-.83a11.44,11.44,0,0,0,8-3.39C88.42,71.48,89.2,66,89.2,66A121.16,121.16,0,0,0,90,53V47A121.16,121.16,0,0,0,89.2,34ZM41.74,60.38V37.9L63.35,49.18Z"/></g></svg><span class='fallbacktext'>Yt</span></a></div><div class='social-icon flat'><a href='https://twitter.com/Incomedia' target='_blank'><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M37,78.44c26.42,0,40.86-21.88,40.86-40.86,0-.62,0-1.24,0-1.86A29.22,29.22,0,0,0,85,28.29a28.67,28.67,0,0,1-8.25,2.26,14.41,14.41,0,0,0,6.32-7.94,28.78,28.78,0,0,1-9.12,3.49,14.37,14.37,0,0,0-24.47,13.1,40.77,40.77,0,0,1-29.6-15,14.37,14.37,0,0,0,4.45,19.17,14.26,14.26,0,0,1-6.5-1.8c0,0.06,0,.12,0,0.18A14.37,14.37,0,0,0,29.33,55.82a14.34,14.34,0,0,1-6.49.25A14.38,14.38,0,0,0,36.26,66a28.82,28.82,0,0,1-17.84,6.15A29.24,29.24,0,0,1,15,72a40.66,40.66,0,0,0,22,6.45"/></svg><span class='fallbacktext'>Tw</span></a></div>
                </div>

            </div>
                <script>
                    socialicons_imHeader_pluginAppObj_04();
                </script>
        </div></div></div>
					</header>
					<div id="imStickyBarContainer">
						<div id="imStickyBarGraphics"></div>
						<div id="imStickyBar">
							<div id="imStickyBarObjects"><div id="imStickyBar_imObjectTitle_01_wrapper" class="template-object-wrapper"><div id="imStickyBar_imObjectTitle_01"><span id ="imStickyBar_imObjectTitle_01_text" >DESIGN</span></div></div><div id="imStickyBar_imObjectTitle_02_wrapper" class="template-object-wrapper"><div id="imStickyBar_imObjectTitle_02"><span id ="imStickyBar_imObjectTitle_02_text" >BLOG</span></div></div><div id="imStickyBar_imMenuObject_03_wrapper" class="template-object-wrapper"><!-- UNSEARCHABLE --><div id="imStickyBar_imMenuObject_03"><div id="imStickyBar_imMenuObject_03_container"><div class="hamburger-button hamburger-component"><div><div><div class="hamburger-bar"></div><div class="hamburger-bar"></div><div class="hamburger-bar"></div></div></div></div><div class="hamburger-menu-background-container hamburger-component">
	<div class="hamburger-menu-background menu-mobile menu-mobile-animated hidden">
		<div class="hamburger-menu-close-button"><span>&times;</span></div>
	</div>
</div>
<ul class="menu-mobile-animated hidden">
	<li class="imMnMnFirst imPage" data-link-paths=",/index.html,/">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="index.html">
ГЛАВНАЯ		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imLevel" data-link-paths=",/blog/index.php,/blog/" data-link-hash="-1004162301"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="blog/index.php" class="label" onclick="return x5engine.utils.location('blog/index.php', null, false)">БЛОГ</a></div></div></li><li class="imMnMnLast imPage" data-link-paths=",/page-9.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="page-9.html">
КОНТАКТЫ		</a>
</div>
</div>
	</li></ul></div></div><!-- UNSEARCHABLE END --><script>
var imStickyBar_imMenuObject_03_settings = {
	'menuId': 'imStickyBar_imMenuObject_03',
	'responsiveMenuEffect': 'push',
	'animationDuration': 1000,
}
x5engine.boot.push(function(){x5engine.initMenu(imStickyBar_imMenuObject_03_settings)});
$(function () {$('#imStickyBar_imMenuObject_03_container ul li').not('.imMnMnSeparator').each(function () {    var $this = $(this), timeout = 0;    $this.on('mouseenter', function () {        if($(this).parents('#imStickyBar_imMenuObject_03_container-menu-opened').length > 0) return;         clearTimeout(timeout);        setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeIn(); }, 250);    }).on('mouseleave', function () {        if($(this).parents('#imStickyBar_imMenuObject_03_container-menu-opened').length > 0) return;         timeout = setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeOut(); }, 250);    });});});
$(function () {$('#imStickyBar_imMenuObject_03_container > ul > li').not('.imMnMnSeparator').each(function () {    var $this = $(this), timeout = 0;    $this.on('mouseenter', function () {        clearTimeout(timeout);        var overElem = $this.children('.label-wrapper-over');        if(overElem.length == 0)            overElem = $this.children('.label-wrapper').clone().addClass('label-wrapper-over').appendTo($this);        setTimeout(function(){overElem.addClass('animated');}, 10);    }).on('mouseleave', function () {        var overElem = $this.children('.label-wrapper-over');        overElem.removeClass('animated');        timeout = setTimeout(function(){overElem.remove();}, 500);    });});});
</script>
</div></div>
						</div>
					</div>
					<a class="imHidden" href="#imGoToCont" title="Заголовок главного меню">Перейти к контенту</a>
					<div id="imSideBar">
						<div id="imSideBarObjects"><div id="imSideBar_pluginAppObj_01_wrapper" class="template-object-wrapper"><!-- Social Icons v.16 --><div id="imSideBar_pluginAppObj_01">
            <div id="soc_imSideBar_pluginAppObj_01">
                <div class="wrapper horizontal original float">
                	<div class='social-icon original'><a href='https://fb.me/Incomedia' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><rect width="100" height="100" style="fill:#3d5a98"/><g><path d="M69,100V61.27H82l1.95-15.09H69V36.55c0-4.37,1.21-7.35,7.48-7.35h8V15.7a106.94,106.94,0,0,0-11.65-.59c-11.52,0-19.41,7-19.41,19.95V46.18h-13V61.27h13V100H69Z" style="fill:#fff"/></g></g></svg><span class='fallbacktext'>Fb</span></a></div><div class='social-icon original'><a href='https://www.youtube.com/user/incomedia' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><defs><linearGradient id="shade_yt_imSideBar_pluginAppObj_01" x1="50" y1="21.87" x2="50" y2="78.13" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e52d27"/><stop offset="1" stop-color="#bf171d"/></linearGradient></defs><g><path d="M89.2,34S88.42,28.49,86,26.06a11.44,11.44,0,0,0-8-3.39c-11.19-.81-28-0.81-28-0.81h0s-16.79,0-28,.81a11.44,11.44,0,0,0-8,3.39C11.58,28.49,10.8,34,10.8,34A121,121,0,0,0,10,47V53A121,121,0,0,0,10.8,66s0.78,5.51,3.18,7.94c3,3.19,7,3.09,8.82,3.42,6.4,0.61,27.2.8,27.2,0.8s16.81,0,28-.83a11.44,11.44,0,0,0,8-3.39C88.42,71.48,89.2,66,89.2,66A121.16,121.16,0,0,0,90,53V47A121.16,121.16,0,0,0,89.2,34ZM41.74,60.38V37.9L63.35,49.18Z" style="fill:url(#shade_yt_imSideBar_pluginAppObj_01)"/></g></svg><span class='fallbacktext'>Yt</span></a></div><div class='social-icon original'><a href='https://twitter.com/Incomedia' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><rect width="100" height="100" style="fill:#1da1f2"/><g><path d="M38.89,76.4c23.59,0,36.48-19.54,36.48-36.48,0-.56,0-1.11,0-1.66a26.09,26.09,0,0,0,6.4-6.64,25.6,25.6,0,0,1-7.36,2A12.87,12.87,0,0,0,80,26.54a25.7,25.7,0,0,1-8.14,3.11A12.83,12.83,0,0,0,50,41.35,36.4,36.4,0,0,1,23.58,28a12.83,12.83,0,0,0,4,17.12,12.73,12.73,0,0,1-5.81-1.6c0,0.05,0,.11,0,0.16A12.83,12.83,0,0,0,32,56.2a12.8,12.8,0,0,1-5.79.22,12.84,12.84,0,0,0,12,8.91,25.73,25.73,0,0,1-15.93,5.49,26.1,26.1,0,0,1-3.06-.18A36.3,36.3,0,0,0,38.89,76.4" style="fill:#fff"/></g></g></svg><span class='fallbacktext'>Tw</span></a></div><div class='social-icon original'><a href='https://it.linkedin.com/company/incomedia' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><rect width="100" height="100" style="fill:#0076b2"/><g><path d="M14.58,37.49H29.43V85.21H14.58V37.49ZM22,13.77a8.6,8.6,0,1,1-8.6,8.6,8.6,8.6,0,0,1,8.6-8.6" style="fill:#fff"/><path d="M38.73,37.49H52.95V44h0.2c2-3.75,6.82-7.71,14-7.71C82.2,36.3,85,46.19,85,59V85.21H70.15V62c0-5.53-.1-12.65-7.71-12.65s-8.9,6-8.9,12.26v23.6H38.73V37.49Z" style="fill:#fff"/></g></g></svg><span class='fallbacktext'>In</span></a></div>
                </div>

            </div>
                <script>
                    socialicons_imSideBar_pluginAppObj_01();
                </script>
        </div></div></div>
					</div>
					<div id="imContentGraphics"></div>
					<main id="imContent">
						<a id="imGoToCont"></a>
						<div id="imLoginPage">
						<?php if (!$fromCart): ?>
							<h2 id="imPgTitle" class="imTitleMargin">Доступ ограничен</h2>
							<div style="height: 15px;">&nbsp;</div>
						<?php else: ?>
							<h2 id ="imPgTitle" class="imTitleMargin">Шаг 2 - данные о покупателе</h2>
							<script>x5engine.boot.push(function () {
							if (x5engine.cart.ui.steps.active) {
								$('#imPgTitle').before(x5engine.cart.ui.getStepStyleDom(1));
							}
							});</script>
						<?php endif; ?>
							<?php if (isset($_GET['loginstatus']) && $_GET['loginstatus'] == 1): ?>
							<div class="alert alert-green"><?php echo $pa->messageFromStatusCode(1) ?></div>
							<?php else: ?>
										<div id="imLoginDescription"><?php echo isset($_GET['cart']) ? Configuration::getLocalizations()->get('cart_step2_descr_login', 'To set the order you are required to login or register.' ) : 'Для доступа к этой части сайта вам нужно ввести свои учетные данные.'; ?></div>
										<div class="imLogin">
											<?php
												if (isset($_GET['loginstatus']) && $pa->messageFromStatusCode($_GET['loginstatus']) != '') {
													echo '<div class="alert alert-' . ($_GET['loginstatus'] >= 0 ? 'green' : 'red') . '">' . $pa->messageFromStatusCode($_GET['loginstatus']) . '</div>';
												}
											?>
											<form method="post" action="imlogin.php" id="imLoginForm">
												<div class="imLoginBlock">
													<label for="imUnameLogin"><span>E-mail:</span></label><br />
													<input type="email" name="imUname" id="imUnameLogin" class="mandatory" autofocus><br />
												</div>
												<div class="imLoginBlock">
													<label for="imPwdLogin"><span>Пароль:</span></label><br />
													<input type="password" name="imPwd" id="imPwdLogin" class="mandatory"><br />
												</div>
												<div class="imLoginBlock" style="text-align: right;">
												<input type="button" onclick="location.href='admin.php'" value="Зарегистрироваться" />&nbsp;
													<input type="submit" value="Войти" class="imLoginSubmit">
												</div>
											</form>
											<script>x5engine.boot.push(function() { x5engine.imForm.initForm('#imLoginForm', false, { 'jsid': 'BAEE67AB938B44863FE1571619A15133', showAll: true, offlineMessage: 'При тестировании вашего сайта вам не потребуется вводить логин и пароль, это нужно будет сделать только при выгрузке сайта.' }); });</script>
										</div>
							<?php endif; ?>
						</div>
						
					</main>
					<footer id="imFooter">
						<div id="imFooterObjects"><div id="imFooter_imTextObject_03_wrapper" class="template-object-wrapper"><div id="imFooter_imTextObject_03">
	<div data-index="0"  class="text-tab-content grid-prop current-tab "  id="imFooter_imTextObject_03_tab0" style="opacity: 1; ">
		<div class="text-inner">
			<div class="imTARight"><span class="fs10lh1-5 cf1"><b>LOREM IPSUM</b></span></div><div class="imTACenter mt1"><div class="imTARight"><span class="fs10lh1-5 cf1">Lorem Ipsum</span></div><div class="imTARight"><span class="fs10lh1-5 cf1">Dolor sit amet, 12</span></div><div class="imTARight"><span class="fs10lh1-5 cf1">12345 Consectetur (Adipiscing)</span></div><div class="imTARight"><span class="fs10lh1-5 cf1">+00 012 345 678 &nbsp;| +00 012 345 678 (fax)</span></div><div class="imTARight"><span class="fs10lh1-5 cf1">info@example.com</span><br></div></div>
		</div>
	</div>

</div>
</div><div id="imFooter_imObjectTitle_04_wrapper" class="template-object-wrapper"><div id="imFooter_imObjectTitle_04"><span id ="imFooter_imObjectTitle_04_text" >BLOG</span></div></div><div id="imFooter_imObjectTitle_05_wrapper" class="template-object-wrapper"><div id="imFooter_imObjectTitle_05"><span id ="imFooter_imObjectTitle_05_text" >DESIGN</span></div></div></div>
					</footer>
				</div>
				<span class="imHidden"><a href="#imGoToCont" title="Прочесть эту страницу заново">Назад к содержимому</a></span>
			</div>
		</div>
		
		<noscript class="imNoScript"><div class="alert alert-red">Для использования этого сайта необходимо включить JavaScript.</div></noscript>
	</body>
</html>