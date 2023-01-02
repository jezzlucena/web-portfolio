<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Portfolio - Jezz Lucena</title>
		<link rel="shortcut icon" href="favicon.ico" />
		<meta name="description" content="A collection of screencaps, videos, and live demos of UI/UX projects programmed by Jezz Lucena."/>

		<meta property="og:title" content="Portfolio - Jezz Lucena"/>
		<meta property="og:url" content="http://jezzlucena.com/"/>
		<meta property="og:image" content="http://jezzlucena.com/resource/common/profile.jpg"/>
		<meta property="og:site_name" content="Portfolio - Jezz Lucena"/>
		<meta property="og:description" content="A collection of screencaps, videos, and live demos of UI/UX projects programmed by Jezz Lucena."/>

		<?php include 'head_imports.php'; ?>
		<script>
			var projects = <?php include 'api/fetch_projects.php' ?>;
		</script>

		<script type="text/javascript" charset="UTF-8" src="js/gallery.js"></script>
	</head>
	<body data-page="portfolio">
		<?php include 'topbar.php' ?>

		<div class="header">
			<div class="headerSvgContainer">
				<?php include 'logo.svg' ?>
			</div>
		</div>
		<div class="headerContent">
			<div class="text">
				<span>Jezz Lucena</span>
				<span class="title">User Interface Engineer</span>
			</div>
		</div>

		<div class="content">
			<div id="about" class="section portfolio">
				<div class="title break">
					<span>Some of my work</span>

					<div class="toggle grid">
						<div class="icon grid"><div class="symbol"></div></div>
						<div class="icon list"><div class="symbol"></div></div>
					</div>
				</div>

				<div class="gallery grid loading">
					<a href="#" class="item trigger template">
						<div class="thumbContainer loadingGradient">
							<video class="thumbVideo" autoplay="autoplay" muted playsinline loop></video>
							<img class="thumb"></img>
						</div>

						<div class="detailsContainer">
							<div class="name"></div>
							<div class="subtitle">
								<span class="role"></span>
								<span class="company"></span>
								<span class="year"></span>
							</div>
							<div class="description"></div>

							<button class="moreBtn"></button>

							<div class="moreDropdown">
								<div class="moreLink details">More Details</div>
								<div class="moreLink behance">View on Behance</div>
								<div class="moreLink github">View on GitHub</div>
								<div class="moreLink live">Try Live</div>
								<div class="moreLink video">Watch Video</div>
							</div>
						</div>
					</a>
				</div>

				<div style="clear: both;"></div>
			</div>

			<?php include 'footer.php' ?>
		</div>
	</body>
</html>
