<!DOCTYPE html>
<!--[if IE 9 ]><html class="ie9"><![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Shadow Banker</title>

<!-- Vendor CSS -->
<link href="vendors/fullcalendar/fullcalendar.css" rel="stylesheet">
<link href="vendors/animate-css/animate.min.css" rel="stylesheet">
<link href="vendors/sweet-alert/sweet-alert.min.css" rel="stylesheet">

<!-- CSS -->
<link href="css/app.min.css" rel="stylesheet">

</head>
<body>
	<div id="view-${entity.name?lower_case}-template">

		<!-- Header -->
		<div data-field="headerWidget"></div>

		<section id="main">

			<!-- Sidebar -->
			<div data-field="sideBarWidget"></div>

			<!-- Chatbar -->
			<div data-field="chatSideBarWidget"></div>

			<section id="content">
				<div class="container">
					<div class="block-header">
						<h2>Dashboard</h2>

						<ul class="actions">
							<li><a href="index.html"> <i class="md md-trending-up"></i>
							</a></li>
							<li><a href="index.html"> <i class="md md-done-all"></i>
							</a></li>
							<li class="dropdown"><a href="index.html"
								data-toggle="dropdown"> <i class="md md-more-vert"></i>
							</a>

								<ul class="dropdown-menu dropdown-menu-right">
									<li><a href="index.html">Refresh</a></li>
									<li><a href="index.html">Manage Widgets</a></li>
									<li><a href="index.html">Widgets Settings</a></li>
								</ul></li>
						</ul>

					</div>

					<div class="card">
						<div class="card-header bgm-lightgreen">
							<h2>
								Basic Example <small>It's just that simple. Turn your
									simple table into a sophisticated data table and offer your
									users a nice experience and great features without any effort.</small>
							</h2>
							<ul class="actions actions-alt">
                                 <li class="dropdown">
                                     <a href="widget-templates.html" data-toggle="dropdown" aria-expanded="false">
                                         <i class="md md-more-vert"></i>
                                     </a>
                                     
                                     <ul class="dropdown-menu dropdown-menu-right">
                                         <li>
                                             <a data-field="createEntityPageLink" href="widget-templates.html">Refresh</a>
                                         </li>
                                         <li>
                                             <a href="widget-templates.html">Manage Widgets</a>
                                         </li>
                                         <li>
                                             <a href="widget-templates.html">Widgets Settings</a>
                                         </li>
                                     </ul>
                                 </li>
                             </ul>
						</div>
						<div class="card-body card-padding">
							<div class="listview">
<#list entity.fields as field>
								<a class="lv-item" href="index.html">
	                                <div class="media">
	                                    <div class="media-body">
	                                        <div class="lv-title">${field.description}</div>
	                                        <small class="lv-small"><span data-field="${field.name}">${field.description}</span></small>
	                                    </div>
	                                </div>
	                            </a>
</#list>
	                        </div>
						</div>
					</div>
				</div>
			</section>
		</section>

		<!-- Older IE warning message -->
		<!--[if lt IE 9]>
	            <div class="ie-warning">
	                <h1 class="c-white">IE SUCKS!</h1>
	                <p>You are using an outdated version of Internet Explorer, upgrade to any of the following web browser <br/>in order to access the maximum functionality of this website. </p>
	                <ul class="iew-download">
	                    <li>
	                        <a href="http://www.google.com/chrome/">
	                            <img src="img/browsers/chrome.png" alt="">
	                            <div>Chrome</div>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="https://www.mozilla.org/en-US/firefox/new/">
	                            <img src="img/browsers/firefox.png" alt="">
	                            <div>Firefox</div>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="http://www.opera.com">
	                            <img src="img/browsers/opera.png" alt="">
	                            <div>Opera</div>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="https://www.apple.com/safari/">
	                            <img src="img/browsers/safari.png" alt="">
	                            <div>Safari</div>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">
	                            <img src="img/browsers/ie.png" alt="">
	                            <div>IE (New)</div>
	                        </a>
	                    </li>
	                </ul>
	                <p>Upgrade your browser for a Safer and Faster web experience. <br/>Thank you for your patience...</p>
	            </div>   
	        <![endif]-->





	</div>
</body>
</html>
