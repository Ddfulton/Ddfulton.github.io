// Write the navbar
// Home
home = '<li><a class="nav-link scrollto " href="index.html">Home</a></li>';
overview =  '<li class="dropdown"><a href="#"><span>Market Overview</span> <i class="bi bi-chevron-down"></i></a>' +
				'<ul>' +
//					'<li><a href="funding.html"><span>Funding</span></a></li>' +
					'<li><a href="fintech-revenue.html"><span>Fintech revenue model</span></a></li>' +
					'<li><a href="ecosystem.html"><span>Ecosystem</span></a></li>' +
					'<li><a href="ma-activity.html"><span>Partnerships</span></a></li>' +
					'<li><a href="regulatory.html"><span>Regulatory context</span></a></li>' +
				'</ul>' +
			'</li>';
businessModels =    '<li class="dropdown active"><a href="#"><span>Fintechs</span> <i class="bi bi-chevron-down"></i></a>' +
						'<ul>' +
							'<li><a href="payments.html"><span>Payments</span> </a>' +
							'</li>' +
							'<li><a href="financing.html"><span>Financing</span> </a>' +
							'<li><a href="banking.html"><span>Banking</span> </a>' +
//							'<li><a href="insurance.html"><span>Insurance</span> </a>' +
							'<li><a href="assetmgmt.html"><span>Asset Mgmt</span> </a>' +
							'<li><a href="other.html"><span>Other</span> </a>' +
						'</ul>' +
					'</li>';
incumbents =    '<li class="dropdown active"><a href="#"><span>Incumbents</span> <i class="bi bi-chevron-down"></i></a>' +
						'<ul>' +
							'<li><a href="intro-incumbents.html"><span>Intro</span> </a></li>' +
							'<li><a href="eu.html"><span>Incumbents in the EU</span> </a></li>' +
							'<li><a href="uk.html"><span>Incumbents in the UK</span> </a>' +
							'<li><a href="us.html"><span>Incumbents in the US</span> </a>' +
//							'<li><a href="other.html"><span>Other</span> </a>' +
						'</ul>' +
					'</li>';
news =    '<li class="dropdown active"><a href="#"><span>News</span> <i class="bi bi-chevron-down"></i></a>' +
						'<ul>' +
							'<li><a href="fintech-news.html"><span>Fintechs</span> </a></li>' +
						'</ul>' +
					'</li>';
esg = '<li><a class="nav-link" href="esg.html">ESG</a></li>';
playbook = '<li><a class="btn btn-primary" href="playbook.html">Library</a></li>';

// Populate the navbar
var navbar = document.getElementById("navbar-master");
navbar.innerHTML = home + overview + businessModels + incumbents + esg + news + playbook;
