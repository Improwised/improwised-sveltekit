<script>
	// import  BASE_URL  from '$env/static/public';
	// import HomeTyped from '$lib/components/HomeTyped.svelte';
	import HomeCallToActionGranim from "$lib/components/HomeCallToActionGranim.svelte";
	import Tool from "$lib/components/Tool.svelte";

	export let data;
	let services = data.services.data;
	let whyUs = data.whyUs.data;

	let testimonials = data.testimonials.data;
	// console.log(whyUs);

	let baseUrl = data.baseUrl;
</script>

<!-- Manage head elements -->
<svelte:head>
	<title>Company Title</title>
	<meta name="description" content="Page description here" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={baseUrl + "/"} />
	<meta property="og:title" content="Company Title" />
	<meta property="og:description" content="Page description here" />
	<meta property="og:image" content={baseUrl + "/img/logo.png"} />
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:site" content="@improwised" />
	<meta property="twitter:creator" content="@improwised" />
	<meta property="twitter:title" content="Company Title" />
	<meta property="twitter:description" content="Page description here" />
	<meta property="twitter:image" content={baseUrl + "/img/logo.png"} />
	<link rel="canonical" href={baseUrl + "/"} />
</svelte:head>

<div class="main-container">
	<div>
		<div class="container py-5">
		  <div class="row align-items-center justify-content-around">
			<div
			  class="col-md-6 col-12 d-flex align-items-center justify-content-center"
			>
			  <div>
				<h1 class="" style="font-size: 44px">
				  Empowering Developers, Accelerating Delivery
				</h1>
				<p class="lead homeLead">
				  Boost developer efficiency with platform engineering, delivering
				  scalable internal developer platforms across cloud-native,
				  hybrid, and multicloud architectures.
				</p>
				<a class="btn btn--primary text-white" href="/"
				><span>Contact Us</span></a
			>
				<br />
			  </div>
			</div>
			<div
			  class="col-md-6 col-12 d-flex align-items-center justify-content-center"
			>
			  <img
				src="/img/l13.svg"
				alt="Platform Engineers"
				class="img-dim"
			  />
			</div>
		  </div>
		</div>
	  </div>


	<section id="services" class="bg--secondary services space--xs">
		{#if services && services.length}
			<div class="container">
				<div class="row mb-5 text-center">
					<div class="col-sm-12">
						<h2 class="mb-0">Our Services</h2>
					</div>
				</div>
				<div class="row">
					{#each services as service, index}
						<div class="col-md-6 col-sm-12">
							<div
								class="feature feature-3 boxed boxed--lg boxed--border text-center"
							>
								{#if service.icon}
									<i
										class={`icon icon--lg color--primary ${service.icon}`}
									></i>
								{:else}
									<i
										class="icon icon--lg color--primary icon-Optimization"
									></i>
								{/if}

								<div class="svg">{@html service.iconsvg}</div>
								<a href={`/`}>
									<h2 class="h4">{service.title}</h2>
								</a>
								<p>{service.short_description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</section>
	<section id="whyUs" class="features-style space--xs">
		{#if whyUs && whyUs.length}
			<div class="container">
				<div class="row mb-5 text-center">
					<div class="col-sm-12">
						<h2 class="mb-0">Why Us</h2>
					</div>
				</div>

				<div class="row">
					{#each whyUs as whyus, index}
						<div class="col-sm-6">
							<div
								class="feature feature-5 boxed boxed--sm boxed--border"
							>

								<div class="svg">{@html whyus.iconsvg}</div>

								<div class="feature__body">
									<h2 class="h5">{whyus.title}</h2>

									<div>{@html whyus.description}</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</section>

	<section
		id="toolBox"
		class="bg--secondary text-center technologies space--xs"
	>
		<div class="container">
			<div class="row mb-5">
				<div class="col-sm-12">
					<h2 class="mb-0">Our Toolbox</h2>
				</div>
			</div>

			<div class="row text-center justify-content-center">
				<!-- Backend -->
				<div class="col-sm-12">
					<h2 class="mb-0 h3"><strong>Backend</strong></h2>
					<div class="dlab-separator-outer">
						<div class="dlab-separator style-liner"></div>
					</div>
				</div>

				<Tool image="img/technologies/go.png" name="Go" />
				<Tool image="img/technologies/laravel.png" name="Laravel" />
				<Tool image="img/technologies/node.png" name="Node Js" />
				<Tool image="img/technologies/python.png" name="Python" />

				<!-- Databases -->
				<div class="col-sm-12">
					<h2 class="mb-0 h3"><strong>Databases</strong></h2>
					<div class="dlab-separator-outer">
						<div class="dlab-separator style-liner"></div>
					</div>
				</div>

				<Tool
					image="img/technologies/postgresql-icon.svg"
					name="PostgreSQL"
				/>
				<Tool
					image="img/technologies/mariadb-icon.svg"
					name="MariaDB"
				/>
				<Tool image="img/technologies/mysql-icon.svg" name="MySQL" />
				<Tool image="img/technologies/redis.png" name="Redis" />
				<Tool
					image="img/technologies/mongodb-icon.svg"
					name="MongoDB"
				/>

				<!-- Infrastructure -->
				<div class="col-sm-12">
					<h2 class="mb-0 h3"><strong>Infrastructure</strong></h2>
					<div class="dlab-separator-outer">
						<div class="dlab-separator style-liner"></div>
					</div>
				</div>

				<Tool image="img/technologies/linux.png" name="Linux" />
				<Tool image="img/technologies/docker.png" name="Docker" />
				<Tool
					image="img/technologies/kubernetes.svg"
					name="Kubernetes"
				/>
				<Tool image="img/technologies/helm.png" name="Helm" />
				<Tool image="img/technologies/terraform.svg" name="Terraform" />
				<Tool image="img/technologies/nginx.png" name="Nginx" />

				<!-- Cloud -->
				<div class="col-sm-12">
					<h2 class="mb-0 h3"><strong>Cloud</strong></h2>
					<div class="dlab-separator-outer">
						<div class="dlab-separator style-liner"></div>
					</div>
				</div>

				<Tool
					image="img/technologies/amazon-web-services-icon.svg"
					name="AWS"
				/>
				<Tool
					image="img/technologies/google_cloud_platform.png"
					name="GCP"
				/>
				<Tool image="img/technologies/azure.svg" name="Azure" />
				<Tool
					image="img/technologies/digital_ocean.png"
					name="DigitalOcean"
				/>

				<!-- Frontend -->
				<div class="col-sm-12">
					<h2 class="mb-0 h3"><strong>Frontend</strong></h2>
					<div class="dlab-separator-outer">
						<div class="dlab-separator style-liner"></div>
					</div>
				</div>

				<Tool image="img/technologies/js.png" name="JavaScript" />
				<Tool image="img/technologies/vuejs.png" name="Vue.js" />
				<Tool image="img/technologies/react.png" name="React" />
				<Tool image="img/technologies/angular.png" name="Angular.js" />
				<Tool image="img/technologies/bootstrap.png" name="Bootstrap" />

				<!-- Other -->
				<div class="col-sm-12">
					<h2 class="mb-0 h3"><strong>Other</strong></h2>
					<div class="dlab-separator-outer">
						<div class="dlab-separator style-liner"></div>
					</div>
				</div>

				<Tool image="img/technologies/github.png" name="Github" />
				<Tool image="img/technologies/gitlab.png" name="GitLab" />
				<Tool
					image="img/technologies/circleci-icon.svg"
					name="Circle ci"
				/>
			</div>
		</div>
	</section>

	<section class="space--sm text-center services">
		{#if testimonials && testimonials.length}
			<div class="container">
				<div class="row mb-5">
					<div class="col-sm-12">
						<h2 class="mb-0">Testimonials</h2>
					</div>
				</div>
				<div class="row">
					{#each testimonials as testimonial, index (index)}
						<div class="col-lg-4 col-md-6 mb-2">
							<div
								class="testimonial testimonial-home boxed boxed--sm boxed--border"
							>
								<div class="verticle-middle">
									<div class="testimonial-text contentbox">
										&ldquo;{testimonial.quote}&rdquo;
									</div>
									<div class="testimonial-detail clearfix">
										<h2 class="testimonial-name h4">
											{testimonial.author}
										</h2>
										<span
											>{testimonial.author_designation}</span
										>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</section>
	<section
		class="space--xs imagebg"
		data-gradient-bg="#4876BD,#5448BD,#8F48BD,#BD48B1"
	>
		<HomeCallToActionGranim />

		<div class="container">
			<div class="row">
				<!-- <div class="cta cta--horizontal text-center-xs"> -->
				<div class="col-sm-9 d-flex align-items-center">
					<h2 class="lead m-0">
						We will do our best to answer you within 24 hours or
						less.
					</h2>
				</div>
				<div class="col-sm-3 text-right text-center-xs">
					<a class="btn btn--primary type--uppercase" href="/"
						>Contact Us</a
					>
				</div>

				<!-- </div> -->
			</div>
			<!--end of row-->
		</div>
		<!--end of container-->
	</section>
</div>
