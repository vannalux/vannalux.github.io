<?php require_once("res/x5engine.php"); ?>
<!DOCTYPE html><!-- HTML5 -->
<html prefix="og: http://ogp.me/ns#" lang="ru-RU" dir="ltr">
	<head>
		<title>Поиск - Новый проект</title>
		<meta charset="utf-8" />
		<!--[if IE]><meta http-equiv="ImageToolbar" content="False" /><![endif]-->
		<meta property="og:locale" content="ru" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://vannalux.github.io/imsearch.php" />
		<meta property="og:title" content="Поиск" />
		<meta property="og:site_name" content="Новый проект" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		
		<link rel="stylesheet" href="style/reset.css?2020-2-5-1" media="screen,print" />
		<link rel="stylesheet" href="style/print.css?2020-2-5-1" media="print" />
		<link rel="stylesheet" href="style/style.css?2020-2-5-1" media="screen,print" />
		<link rel="stylesheet" href="style/template.css?2020-2-5-1" media="screen" />
		
		<link rel="stylesheet" href="pluginAppObj/imFooter_pluginAppObj_10/custom.css" media="screen, print" />
		
		<link rel="stylesheet" href="pluginAppObj/imStickyBar_pluginAppObj_01/custom.css" media="screen, print" />
		<link rel="stylesheet" href="pcss/imsearch.css?2020-2-5-1-637348978607629339" media="screen,print" />
		<script src="res/jquery.js?2020-2-5-1"></script>
		<script src="res/x5engine.js?2020-2-5-1" data-files-version="2020-2-5-1"></script>
		
		<script src="pluginAppObj/imFooter_pluginAppObj_10/main.js"></script>
		
		<script src="pluginAppObj/imStickyBar_pluginAppObj_01/main.js"></script>
		<script>
			window.onload = function(){ checkBrowserCompatibility('Ваш браузер не поддерживает функции, требуемые для визуализации этого Сайта.','Возможно, Ваш браузер не поддерживает функции, требуемые для визуализации этого Сайта.','[1]Обновите Ваш браузер[/1] или [2]продолжите процедуру [/2].','http://outdatedbrowser.com/'); };
			x5engine.utils.currentPagePath = 'imsearch.php';
		</script>
		
	</head>
	<body>
		<div id="imPageExtContainer">
			<div id="imPageIntContainer">
				<div id="imHeaderBg"></div>
				<div id="imFooterBg"></div>
				<div id="imPage">
					<header id="imHeader">
						<h1 class="imHidden">Поиск - Новый проект</h1>
						<div id="imHeaderObjects"></div>
					</header>
					<div id="imStickyBarContainer">
						<div id="imStickyBarGraphics"></div>
						<div id="imStickyBar">
							<div id="imStickyBarObjects"><div id="imStickyBar_pluginAppObj_01_wrapper" class="template-object-wrapper"><!-- Social Icons v.16 --><div id="imStickyBar_pluginAppObj_01">
            <div id="soc_imStickyBar_pluginAppObj_01">
                <div class="wrapper horizontal flat shake">
                	<div class='social-icon flat'><a href='https://www.facebook.com/Incomedia' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M57,93V54H70.14l2-15H57V29.09c0-4.39.94-7.39,7.24-7.39H72V8.14a98.29,98.29,0,0,0-11.6-.6C48.82,7.54,41,14.61,41,27.59V39H27V54H41V93H57Z"/></svg><span class='fallbacktext'>Fb</span></a></div><div class='social-icon flat'><a href='https://it.linkedin.com/company/incomedia' target='_blank'><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><path d="M30,86H15V39H30V86ZM23.19,31.82a8.47,8.47,0,1,1,8.47-8.47A8.47,8.47,0,0,1,23.19,31.82ZM85,86H71V62.4c0-5.45.07-12.47-7.41-12.47S55,55.87,55,62V86H41V39H54v4H53.87c1.95-1,6.61-6.76,13.72-6.76C82.37,36.24,85,46.81,85,59.47V86Z"/></g></svg><span class='fallbacktext'>In</span></a></div>
                </div>

            </div>
                <script>
                    socialicons_imStickyBar_pluginAppObj_01();
                </script>
        </div></div></div>
						</div>
					</div>
					<a class="imHidden" href="#imGoToCont" title="Заголовок главного меню">Перейти к контенту</a>
					<div id="imSideBar">
						<div id="imSideBarObjects"></div>
					</div>
					<div id="imContentGraphics"></div>
					<main id="imContent">
						<a id="imGoToCont"></a>
						<div id="imSearchPage">
						<h2 id="imPgTitle">Результаты поиска</h2>
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
						<div id="imFooterObjects"><div id="imFooter_imTextObject_07_wrapper" class="template-object-wrapper"><div id="imFooter_imTextObject_07">
	<div data-index="0"  class="text-tab-content grid-prop current-tab "  id="imFooter_imTextObject_07_tab0" style="opacity: 1; ">
		<div class="text-inner">
			<div class="imTALeft"><span class="fs12lh1-5 cf1"><b>Created with WebSite X5</b></span></div>
		</div>
	</div>

</div>
</div><div id="imFooter_pluginAppObj_10_wrapper" class="template-object-wrapper"><!-- Social Icons v.16 --><div id="imFooter_pluginAppObj_10">
            <div id="soc_imFooter_pluginAppObj_10">
                <div class="wrapper horizontal flat shake">
                	<div class='social-icon flat'><a href='https://www.facebook.com/Incomedia' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M57,93V54H70.14l2-15H57V29.09c0-4.39.94-7.39,7.24-7.39H72V8.14a98.29,98.29,0,0,0-11.6-.6C48.82,7.54,41,14.61,41,27.59V39H27V54H41V93H57Z"/></svg><span class='fallbacktext'>Fb</span></a></div><div class='social-icon flat'><a href='https://it.linkedin.com/company/incomedia' target='_blank'><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><path d="M30,86H15V39H30V86ZM23.19,31.82a8.47,8.47,0,1,1,8.47-8.47A8.47,8.47,0,0,1,23.19,31.82ZM85,86H71V62.4c0-5.45.07-12.47-7.41-12.47S55,55.87,55,62V86H41V39H54v4H53.87c1.95-1,6.61-6.76,13.72-6.76C82.37,36.24,85,46.81,85,59.47V86Z"/></g></svg><span class='fallbacktext'>In</span></a></div>
                </div>

            </div>
                <script>
                    socialicons_imFooter_pluginAppObj_10();
                </script>
        </div></div></div>
					</footer>
				</div>
				<span class="imHidden"><a href="#imGoToCont" title="Прочесть эту страницу заново">Назад к содержимому</a></span>
			</div>
		</div>
		
		<noscript class="imNoScript"><div class="alert alert-red">Для использования этого сайта необходимо включить JavaScript.</div></noscript>
	</body>
</html>
