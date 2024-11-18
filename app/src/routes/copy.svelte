<script>
  let gradientX = 45.5; // Initial X position for the gradient
  let gradientY = -200; // Initial Y position for the gradient

  // Event handler for mouse move
  function updateGradient(event) {
    const rect = event.target.getBoundingClientRect();
    gradientX = event.clientX - rect.left;
    gradientY = event.clientY - rect.top;
  }
</script>

<section class="ds-main-banner-area">
	<div class="container-lg px-0">
		<div class="flex flex-col items-center lg:flex-row">
			<div class="w-full">
				<div class="ds-banner-content">
					<h2
						class="

					text-center text-3xl font-bold !leading-[1.30] [text-wrap:balance] lg:text-center lg:text-4xl lg:tracking-tight xl:text-6xl xl:tracking-tighter"
					>
						Empowering Developers,<br /><span class="text-theme">Accelerating Delivery</span>
					</h2>
				</div>
			</div>
		</div>
	</div>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<div class="btn btn-down">
		<a href="#section2"
			><img
				alt="button-img"
				loading="lazy"
				width="24"
				height="40"
				decoding="async"
				data-nimg="1"
				style="color:transparent"
				src="images/scroll-icon.svg"
			/></a
		>
	</div>
	<div class="ds-banner-large-shape">
		<!-- <div class="circle-ripple"></div> -->
		<img src="images/large-shape.png" alt="Large Shape" />
	</div>
</section>

<div class="overflow-x-clip transition duration-500 ease-in-out" id="section2">
	<div class="section-team-hero build-in-animate relative overflow-hidden">
		<div class="relative z-10 md:absolute md:bottom-0 md:left-0 md:right-0 md:top-0">
			<div class="container-lg p-responsive">
				<div class="mx-auto my-5 px-5 pt-[15%] text-center md:w-2/3 lg:w-5/6 xl:w-full">
					<main class="relative place-items-center">
						<!-- <div class="ds-banner-shape-3">

							<img src="images/shape3.png" alt="imag1"/>
						</div>

						<div class="shape5"><img src="images/shape5.png" alt="image2"/></div> -->
						<div
							class="bg-gradient-radial from-blues-200 absolute right-0 top-0 -z-10 h-96 w-96 blur-2xl"
						></div>
						<div
							class="bg-gradient-radial absolute right-36 top-10 -z-10 h-96 w-96 from-green-200 blur-2xl"
						></div>

						<h2
							class="

							text-center text-3xl font-bold !leading-[1.30] [text-wrap:balance] lg:text-center lg:text-4xl lg:tracking-tight xl:text-6xl xl:tracking-tighter"
						>
							We are providing affective <span class="text-theme"> development strategies.</span>
						</h2>

						<p
							class="mx-auto mb-4 pt-5 text-xl text-slate-600 sm:w-10/12 md:w-2/3 lg:w-7/12 xl:w-2/3"
						>
							Boost developer efficiency with platform engineering, delivering scalable internal
							developer platforms across cloud-native, hybrid, and multicloud architectures.
						</p>

						<div class="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
							<a
								href="/"
								target="_blank"
								rel="noopener"
								class="focus-visible:shadow-outline-theme bg-grd-primary-600 hover:bg-theme-dark focus-visible:ring-theme flex items-center justify-center gap-1 rounded-full px-7 py-2.5 text-center text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:self-center"
							>
								Contact Us
							</a>

							<a
								href="/"
								rel="noopener"
								target="_blank"
								class="focus-visible:shadow-outline-theme gradient-button hover:bg-theme-light focus-visible:ring-theme ml-2 flex items-center justify-center gap-1 rounded-full border-2 px-7 py-2.5 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
							>
								Book a Demo
							</a>
						</div>
					</main>
				</div>
			</div>
		</div>

		<div class="team-hero-artwork absolute top-0 hidden md:relative md:block">
			<!-- Generator: Adobe Illustrator 23.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				id="Layer_1"
				x="0px"
				y="0px"
				width="2596px"
				height="946.6px"
				viewBox="0 0 2596 946.6"
				style="enable-background:new 0 0 2596 946.6;height:auto; fill:none; stroke:#24292e; stroke-width:3px; opacity:0.1; left:50%; transform: translateX(-50%);"
				xml:space="preserve"
				class="team-hero-branches relative block"
			>
				<path
					id="path1"
					d="M723.5,731.5c-34.2,0-81.2-7.8-81.2-83.7c0-119.6,0-209,0-328.6c0-40-23-76.9-76.9-76.9  c-24.5,0-470.2,0-565.4,0"
				></path>
				<path id="path2" d="M1952.3,523.4c2.8-19.8,7.8-59.3,50.2-59.3H2596"></path>
				<path id="path3" d="M1873.8,0.3v239.6c0,0-0.8,70.2,79,70.2"></path>
				<path id="path4" d="M2596,844.5h-763.4c0,0-70.2,0.7-70.2-72.2"></path>
				<path
					id="path5"
					d="M1953.8,238.1c-1,10.3-1.4,23.1-1.4,39c0,58.9,0,352.7,0,411.6c0,75.9-85.2,83.7-118.1,83.7  c-134.5,0-335.3,0-469.8,0c-52.1,0-66.8,45.6-66.8,83.5v90.8"
				></path>
				<path id="path6" d="M2054.3,1.5c0,76.1,0,49.3,0,108.2c0,60.3-100.5,45.5-100.5,128.3"></path>
				<path
					id="path7"
					d="M0,605.2c0,0,343.5,0,438.9,0S509,731.5,616.2,731.5s472.1,0,612.1,0c54.2,0,69.5,55.7,69.5,93.5v121.4"
				></path>
				<path id="path8" d="M578.1,243c-32-5-67.7-8.5-67.7-84.4c0-58.9,0-82.5,0-158.6"></path>
				<defs>
					<filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
						<feFlood flood-color="#089e5a" result="flood" />
						<!-- Darker green shadow color -->
						<feComposite in="flood" in2="SourceAlpha" operator="in" />
						<feGaussianBlur stdDeviation="1" />
						<!-- Adjust blur for shadow spread -->
						<feOffset dx="1" dy="1" result="offsetblur" />
						<!-- Adjust shadow position -->
					</filter>
				</defs>
				<circle
					class="circle-dot"
					id="dot1"
					cx="0"
					cy="0"
					r="8"
					fill="#00c16a"
					filter="url(#drop-shadow)"
				>
					<animateMotion repeatCount="indefinite" dur="5s">
						<mpath href="#path1" />
					</animateMotion>
				</circle>
				<circle
					class="circle-dot"
					id="dot2"
					cx="0"
					cy="0"
					r="8"
					fill="#00c16a"
					filter="url(#drop-shadow)"
				>
					<animateMotion repeatCount="indefinite" dur="10s">
						<mpath href="#path2" />
					</animateMotion>
				</circle>
				<circle
					class="circle-dot"
					id="dot3"
					cx="0"
					cy="0"
					r="8"
					fill="#00c16a"
					filter="url(#drop-shadow)"
				>
					<animateMotion repeatCount="indefinite" dur="5s">
						<mpath href="#path3" />
					</animateMotion>
				</circle>
				<circle
					class="circle-dot"
					id="dot4"
					cx="0"
					cy="0"
					r="8"
					fill="#00c16a"
					filter="url(#drop-shadow)"
				>
					<animateMotion repeatCount="indefinite" dur="5s">
						<mpath href="#path4" />
					</animateMotion>
				</circle>
				<circle
					class="circle-dot"
					id="dot5"
					cx="0"
					cy="0"
					r="8"
					fill="#00c16a"
					filter="url(#drop-shadow)"
				>
					<animateMotion repeatCount="indefinite" dur="5s">
						<mpath href="#path5" />
					</animateMotion>
				</circle>
				<circle
					class="circle-dot"
					id="dot6"
					cx="0"
					cy="0"
					r="8"
					fill="#00c16a"
					filter="url(#drop-shadow)"
				>
					<animateMotion repeatCount="indefinite" dur="5s">
						<mpath href="#path6" />
					</animateMotion>
				</circle>
				<circle
					class="circle-dot"
					id="dot7"
					cx="0"
					cy="0"
					r="8"
					fill="#00c16a"
					filter="url(#drop-shadow)"
				>
					<animateMotion repeatCount="indefinite" dur="5s">
						<mpath href="#path7" />
					</animateMotion>
				</circle>
				<circle
					class="circle-dot"
					id="dot8"
					cx="0"
					cy="0"
					r="8"
					fill="#00c16a"
					filter="url(#drop-shadow)"
				>
					<animateMotion repeatCount="indefinite" dur="5s">
						<mpath href="#path8" />
					</animateMotion>
				</circle>
			</svg>

			<div class="absolute inset-0">
				<picture>
					<img
						src="images/python.png"
						width="100"
						height="100"
						alt="Avatar of the user califa"
						class="team-avatar team-avatar--lg icon rounded-full shadow-md"
						style="top: 3%; left: 4.25%;"
					/>
				</picture>
				<picture>
					<img
						src="images/python.png"
						width="100"
						height="100"
						alt="Avatar of the user ohjoycelau"
						class="team-avatar team-avatar--lg rounded-full shadow-md"
						style="top: 6%; left: 83.5%;"
					/>
				</picture>
				<picture>
					<img
						src="images/python.png"
						width="100"
						height="100"
						alt="Avatar of the user lerebear"
						class="team-avatar team-avatar--lg rounded-full shadow-md"
						style="top: 35%; left: 12%;"
					/>
				</picture>
				<picture>
					<img
						src="images/kubernetes.png"
						width="200"
						height="200"
						alt="kubernetes"
						class="team-avatar team-avatar--lg rounded-full shadow-md"
						style="top: 44%; right: 1%;"
					/>
				</picture>

				<picture>
					<img
						src="images/kubernetes.png"
						width="100"
						height="100"
						alt="kubernetes"
						class="team-avatar team-avatar--lg rounded-full shadow-md"
						style="top: 71%; left: 8%;"
					/>
				</picture>
				<picture>
					<img
						src="images/kubernetes.png"
						width="100"
						height="100"
						alt="kubernetes"
						class="team-avatar team-avatar--lg rounded-full shadow-md"
						style="top: 84%; left: 50%;"
					/>
				</picture>
				<picture>
					<img
						src="images/kubernetes.png"
						width="100"
						height="100"
						alt="Avatar of the user benbalter"
						class="team-avatar team-avatar--lg rounded-full shadow-md"
						style="top: 86%; left: 84%;"
					/>
				</picture>
			</div>
		</div>
	</div>
</div>
<div class="mt-5 overflow-x-clip py-10">
	<div class="mx-auto max-w-screen-xl px-5">
		<div class="sectionabout relative flex flex-col items-start px-8 py-12 lg:flex-row">
			<!-- Left Side Content -->
			<div class="flex w-full justify-end pr-8 lg:w-1/2">
				<div class="flex flex-col items-end space-y-12 text-right">
					<div>
						<div class="mb-2 text-sm uppercase tracking-wide">Est. In</div>

						<div class="mb-4 text-2xl font-medium [text-wrap:balance]">2011</div>
					</div>
					<div>
						<div class="mb-2 text-sm uppercase tracking-wide">Powered By</div>
						<div class="mb-4 text-2xl font-medium [text-wrap:balance]">>50+ employees</div>
					</div>
					<div>
						<div class="mb-2 text-sm uppercase tracking-wide">Provide</div>
						<div class="mb-4 text-2xl font-medium [text-wrap:balance]">50+ services</div>
					</div>
				</div>
			</div>

			<!-- Center Vertical Dotted Line with Moving Dot -->
			<div class="relative mx-8 flex flex-col items-center">
				<div
					id="scroll-dot"
					class="bg-theme absolute h-4 w-4 -translate-x-1/2 rounded-full shadow-md"
				></div>
			</div>

			<!-- Right Side Content -->
			<div class="w-full pl-8 lg:w-1/2">
				<span
					class="rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600"
					>ABOUT US</span
				>
				<h1 class="mb-4 mt-4 text-4xl font-bold lg:text-5xl lg:tracking-tight">
					Who We <span class="text-theme">Are?</span>
				</h1>
				<p
					class="mt-4 max-w-lg text-center text-lg text-slate-600 [text-wrap:balance] lg:text-start"
				>
					Improwised Technologies is a leading IT company founded with a desire to become a top
					software development company in scalable, data-intensive, and cloud-native applications in
					2011.
				</p>
				<p
					class="mt-4 max-w-lg text-center text-lg text-slate-600 [text-wrap:balance] lg:text-start"
				>
					Since then, we have worked tirelessly to achieve our objective of giving our customers and
					their products an edge with our expertise in cutting-edge technologies.
				</p>
			</div>
		</div>
	</div>
</div>
<div class="mt-5 overflow-x-clip">
	<div class="mx-auto max-w-screen-xl px-5">
		<div class="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
			<!-- Card 1 -->


			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
  class="flex flex-col items-center text-center shadow-lg p-6 bg-white card-custom relative overflow-hidden"
  on:mousemove={updateGradient}
  style="--gradient-x: {gradientX}px; --gradient-y: {gradientY}px;"
>
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
					<!-- Icon here (replace with your icon) -->
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="text-theme"
						data-icon="fluent:trophy-24-regular"
						><symbol id="ai:fluent:trophy-24-regular"
							><path
								fill="currentColor"
								d="M15.254 2a2.25 2.25 0 0 1 2.236 2h1.268a1.75 1.75 0 0 1 1.744 1.606l.006.144v3a3.25 3.25 0 0 1-3.066 3.245l-.21.006a5.758 5.758 0 0 1-4.731 3.95V17.5h1.753a3.25 3.25 0 0 1 3.244 3.066l.006.184v.5a.75.75 0 0 1-.649.743l-.101.007H6.75a.75.75 0 0 1-.744-.648L6 21.25v-.5a3.25 3.25 0 0 1 3.065-3.245l.185-.005H11v-1.549a5.758 5.758 0 0 1-4.729-3.95L6.246 12a3.25 3.25 0 0 1-3.25-3.25v-3c0-.966.784-1.75 1.75-1.75h1.268a2.25 2.25 0 0 1 2.237-2zm-1 17H9.25a1.75 1.75 0 0 0-1.705 1.352l-.028.148h8.468a1.75 1.75 0 0 0-1.578-1.493zm1-15.5H8.25a.75.75 0 0 0-.75.75v5.999a4.252 4.252 0 0 0 8.503 0V4.25a.75.75 0 0 0-.75-.75m3.504 2h-1.254v4.983A1.75 1.75 0 0 0 19 8.904l.007-.154v-3a.25.25 0 0 0-.193-.243zM6 5.5H4.746a.25.25 0 0 0-.25.25v3a1.75 1.75 0 0 0 1.505 1.733z"
							></path></symbol
						><use xlink:href="#ai:fluent:trophy-24-regular"></use></svg
					>
				</div>
				<h3 class="text-xl font-semibold">Our Vision</h3>
				<p class="mt-2 text-gray-600">
					Integer vel elit congue ligula placerat mi uisque tempor saen justo sed accumsan tortor.
				</p>
			</div>

			<!-- Card 2 -->
			<!-- <div class="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg"> -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
				class="flex flex-col items-center text-center shadow-lg p-6 bg-white card-custom relative overflow-hidden"
				on:mousemove={updateGradient}
				style="--gradient-x: {gradientX}px; --gradient-y: {gradientY}px;"
			  >
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
					<!-- Icon here (replace with your icon) -->
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="text-theme"
						data-icon="fluent:box-multiple-24-regular"
						><symbol id="ai:fluent:box-multiple-24-regular"
							><path
								fill="currentColor"
								d="M15.78 3.737a2.25 2.25 0 0 0-1.56 0L9.913 5.33a.25.25 0 0 0-.163.234v2.793a4.75 4.75 0 0 0-1.5 0V5.563a1.75 1.75 0 0 1 1.143-1.641L13.7 2.33a3.75 3.75 0 0 1 2.6 0l4.307 1.592a1.75 1.75 0 0 1 1.143 1.641v10.67a1.75 1.75 0 0 1-1.143 1.642l-4.018 1.484c.105-.292.161-.604.161-.927v-.731l3.337-1.233a.25.25 0 0 0 .163-.235V5.563a.25.25 0 0 0-.163-.234zm-4.01 3.93a.75.75 0 1 1 .49-1.418l2.658.92a.25.25 0 0 0 .163 0l2.65-.92a.75.75 0 1 1 .492 1.418l-2.65.919a1.75 1.75 0 0 1-1.145 0zm-6 7a.75.75 0 0 1 .49-1.418l2.74.948l2.732-.947a.75.75 0 1 1 .49 1.417l-2.472.857v2.7a.75.75 0 0 1-1.5 0v-2.7zM10.3 9.53a3.75 3.75 0 0 0-2.6 0l-4.307 1.592a1.75 1.75 0 0 0-1.143 1.641v5.67a1.75 1.75 0 0 0 1.143 1.642L7.7 21.666a3.75 3.75 0 0 0 2.6 0l4.307-1.592a1.75 1.75 0 0 0 1.143-1.642v-5.67a1.75 1.75 0 0 0-1.143-1.641zm-2.08 1.407a2.25 2.25 0 0 1 1.56 0l4.307 1.592a.25.25 0 0 1 .163.234v5.67a.25.25 0 0 1-.163.235L9.78 20.259a2.25 2.25 0 0 1-1.56 0l-4.307-1.592a.25.25 0 0 1-.163-.235v-5.67a.25.25 0 0 1 .163-.234z"
							></path></symbol
						><use xlink:href="#ai:fluent:box-multiple-24-regular"></use></svg
					>
				</div>
				<h3 class="text-xl font-semibold">Our Mission</h3>
				<p class="mt-2 text-gray-600">
					Integer vel elit congue ligula placerat mi uisque tempor saen justo sed accumsan tortor.
				</p>
			</div>
			<!-- Card 3 -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
  class="flex flex-col items-center text-center shadow-lg p-6 bg-white card-custom relative overflow-hidden"
  on:mousemove={updateGradient}
  style="--gradient-x: {gradientX}px; --gradient-y: {gradientY}px;"
>
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
					<!-- Icon here (replace with your icon) -->
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="text-theme"
						data-icon="fluent:people-community-24-regular"
						><symbol id="ai:fluent:people-community-24-regular"
							><path
								fill="currentColor"
								d="M7.5 3.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M4.5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-.732 4C2.79 9 2 9.791 2 10.768v.36c0 .207 0 1.408.7 2.575c.548.91 1.477 1.727 2.975 2.093a2.777 2.777 0 0 1 1.062-1.335c-1.603-.171-2.361-.883-2.75-1.53c-.484-.806-.487-1.664-.487-1.806v-.357c0-.148.12-.268.268-.268H8.03A3.974 3.974 0 0 1 8.535 9zm11.697 0c.261.452.437.959.504 1.5h4.263c.148 0 .268.12.268.268v.357c0 .142-.003 1-.487 1.805c-.389.648-1.147 1.36-2.75 1.531c.48.32.856.786 1.062 1.335c1.498-.366 2.427-1.183 2.974-2.093c.701-1.167.701-2.367.701-2.576v-.36C22 9.792 21.209 9 20.232 9zM15 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6M12 9.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M9 11a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-2.5 5.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zm1.768-.268a.268.268 0 0 0-.268.268v.357c0 .142.003 1 .487 1.805c.446.743 1.377 1.57 3.513 1.57s3.067-.827 3.513-1.57c.484-.805.487-1.663.487-1.805v-.357a.268.268 0 0 0-.268-.268z"
							></path></symbol
						><use xlink:href="#ai:fluent:people-community-24-regular"></use></svg
					>
				</div>
				<h3 class="text-xl font-semibold">Core Values</h3>
				<p class="mt-2 text-gray-600">
					Integer vel elit congue ligula placerat mi uisque tempor saen justo sed accumsan tortor.
				</p>

			</div>
			<!-- Card 4 -->
		</div>
	</div>
</div>

<div class="mt-5 overflow-x-clip">
	<div class="mx-auto max-w-screen-xl px-5">
		<main class="relative grid place-items-center lg:grid-cols-5">
			<div
				class="bg-gradient-radial absolute right-0 top-0 -z-10 h-96 w-96 from-indigo-200 blur-2xl"
			></div>
			<div
				class="bg-gradient-radial absolute right-56 top-10 -z-10 h-96 w-96 from-purple-200 blur-2xl"
			></div>
			<div class="max-w-sm md:max-w-max lg:col-span-2">
				<h1
					class="text-center text-3xl font-bold [text-wrap:balance] lg:text-start lg:text-4xl lg:tracking-tight xl:text-6xl xl:tracking-tighter"
				>
					Leading IT company
				</h1>
				<p
					class="mt-4 max-w-lg text-center text-lg text-slate-600 [text-wrap:balance] lg:text-start"
				>
					Improwised Technologies is a leading IT company founded with a desire to become a top
					software development company in scalable, data-intensive, and cloud-native applications in
					2011
				</p>
				<div class="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
					<a
						href="/"
						target="_blank"
						rel="noopener"
						class="focus-visible:shadow-outline-indigo flex items-center justify-center gap-1 rounded-full bg-indigo-600 px-7 py-2.5 text-center text-white transition hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
					>
						Contact Us
					</a>
					<a
						href="/"
						rel="noopener"
						target="_blank"
						class="focus-visible:shadow-outline-indigo flex items-center justify-center gap-1 rounded-full border-2 border-indigo-500 bg-white px-7 py-2.5 text-center text-indigo-600 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
					>
						Book a Demo
					</a>
				</div>
			</div>
			<div class="py-3 lg:col-span-3 lg:-mr-44">
				<img
					src="images/hero-screenshot.HaV5_ts2_10u77m.png"
					srcset="images/hero-screenshot.HaV5_ts2_ZSMuoP.png 240w, images/hero-screenshot.HaV5_ts2_2fuB1b.png 540w, images/hero-screenshot.HaV5_ts2_ZMCIo6.png 720w, images/hero-screenshot.HaV5_ts2_10u77m.png 1183w"
					alt="Astronaut in the air"
					sizes="(max-width: 1024px) 100vw, 50vw"
					loading="eager"
					fetchpriority="high"
					width="1183"
					height="787"
					decoding="async"
				/>
			</div>
		</main>
	</div>
</div>
<div class="mx-auto max-w-screen-xl px-5">
	<div>
		<h2 class="text-center text-slate-500">Trusted by popular startups you know</h2>
		<div
			class="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-20 lg:gap-28"
		>
			<div class="my-2 h-7 text-gray-500 md:h-9">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					fill="currentColor"
					height="48"
					viewBox="0 0 97 48"
					width="97"
					class="h-full w-auto"
				>
					<clipPath id="a">
						<path d="m0 0h97v48h-97z"></path>
					</clipPath>
					<g clip-path="url(#a)" fill="current">
						<path
							clip-rule="evenodd"
							d="m52.5131 4v5.42063l-6.763 1.44197v-5.44736zm14.0657 8.4375c-2.6406 0-4.3381 1.2283-5.2812 2.0828l-.3502-1.6556h-5.9278v31.1353l6.7361-1.4153.0269-7.5568c.97.6943 2.3981 1.6823 4.7692 1.6823 4.8231 0 9.215-3.8452 9.215-12.3099-.0269-7.7438-4.4728-11.9628-9.188-11.9628zm-1.6167 18.3981c-1.5897 0-2.5328-.5608-3.1795-1.255l-.0269-9.9067c.7006-.7744 1.6706-1.3084 3.2064-1.3084 2.4519 0 4.1494 2.7236 4.1494 6.2217 0 3.5781-1.6705 6.2484-4.1494 6.2484zm32.0382-6.1683c0-6.8359-3.3412-12.2298-9.727-12.2298-6.4128 0-10.2928 5.3939-10.2928 12.1764 0 8.0375 4.5806 12.0962 11.155 12.0962 3.2064 0 5.6314-.7209 7.4637-1.7356v-5.3405c-1.8323.9079-3.9339 1.4686-6.6014 1.4686-2.6137 0-4.9309-.9079-5.2273-4.0588h13.1759c0-.1463.0096-.4776.0206-.86l.0002-.006v-.0004-.0003-.0007l.0001-.0006v-.0004c.0151-.523.033-1.1393.033-1.5081zm-13.3106-2.5368c0-3.0174 1.8592-4.2724 3.5567-4.2724 1.6436 0 3.395 1.255 3.395 4.2724zm-31.1766-9.2399h-6.763v23.3648h6.763zm-14.4391.0026.4311 1.976c1.5897-2.8839 4.7422-2.2964 5.6045-1.976v6.1416c-.8353-.2937-3.5298-.6676-5.1195 1.3885v15.8347h-6.7361v-23.3648zm-13.0429-5.79554-6.5744 1.38853-.027 21.38881c0 3.9519 2.9909 6.8625 6.9787 6.8625 2.2094 0 3.8261-.4005 4.7153-.8812v-5.4206c-.8623.3472-5.1195 1.5755-5.1195-2.3765v-9.4794h5.1195v-5.6877h-5.1195zm-15.9238 11.13434c-1.42806 0-2.29029.4005-2.29029 1.4419 0 1.137 1.4839 1.6372 3.32489 2.2577 3.0011 1.0116 6.9512 2.3431 6.9679 7.2751 0 4.7798-3.8531 7.5302-9.45751 7.5302-2.31722 0-4.85-.454-7.35584-1.5221v-6.3552c2.26334 1.2283 5.11945 2.1362 7.35584 2.1362 1.50889 0 2.58671-.4005 2.58671-1.6289 0-1.2594-1.60861-1.8351-3.5506-2.5301-2.95752-1.0585-6.68833896-2.3937-6.68833896-6.8425 0-4.7263 3.63750896-7.5568 9.10723896-7.5568 2.2364 0 4.4458.3471 6.6822 1.2283v6.2751c-2.0478-1.0948-4.6344-1.7089-6.6822-1.7089z"
							fill-rule="evenodd"
						></path>
					</g>
				</svg>
			</div>
			<div class="my-2 h-7 text-gray-500 md:h-9">
				<svg
					viewBox="0 0 106 31"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width="106"
					height="31"
					class="h-full w-auto"
				>
					<g clip-path="url(#clip-hubspot-mono)">
						<path
							d="M11.5651 5.62866V14.0394H3.8408V5.62866H0.173584V25.7058H3.8408V17.5682H11.5651V25.7058H15.2323V5.62866H11.5651Z"
						>
						</path>
						<path
							d="M26.9691 19.2163C26.9691 20.0209 26.6495 20.7926 26.0805 21.3616C25.5116 21.9305 24.7399 22.2502 23.9353 22.2502C23.1306 22.2502 22.359 21.9305 21.79 21.3616C21.221 20.7926 20.9014 20.0209 20.9014 19.2163V10.6169H17.4229V19.2163C17.4229 20.9418 18.1083 22.5967 19.3285 23.8168C20.5486 25.037 22.2034 25.7224 23.929 25.7224C25.6545 25.7224 27.3094 25.037 28.5295 23.8168C29.7496 22.5967 30.4351 20.9418 30.4351 19.2163V10.6169H26.9691V19.2163Z"
						>
						</path>
						<path
							d="M52.7417 11.5023C52.7417 9.73968 53.9078 9.18088 55.1853 9.18088C56.2148 9.18088 57.575 9.96428 58.4644 10.9148L60.7427 8.23039C59.6053 6.69235 57.2983 5.62866 55.4099 5.62866C51.6367 5.62866 48.9074 7.83869 48.9074 11.5023C48.9074 18.2995 57.2156 16.1434 57.2156 19.9472C57.2156 21.1204 56.0765 22.1572 54.772 22.1572C52.7147 22.1572 52.0481 21.151 51.103 20.0873L48.575 22.716C50.192 24.7014 52.1865 25.7094 54.5762 25.7094C58.1607 25.7094 61.0446 23.4724 61.0446 19.9759C61.0446 12.4295 52.7363 14.7742 52.7363 11.5023"
						>
						</path>
						<path
							d="M104.141 22.4985C102.085 22.4985 101.501 21.6091 101.501 20.2471V14.219H104.696V11.1644H101.501V7.13428L97.9741 8.71724V20.9964C97.9741 24.1372 100.141 25.7201 103.113 25.7201C103.579 25.7286 104.045 25.6913 104.504 25.6087L105.364 22.441C104.976 22.4679 104.531 22.4949 104.141 22.4949"
						>
						</path>
						<path
							d="M40.2095 10.7176C38.4864 10.7176 37.2844 11.2171 36.1219 12.358V5.74951H32.6379V17.9981C32.6379 22.5835 35.953 25.7242 39.6777 25.7242C43.8103 25.7242 47.4452 22.5278 47.4452 18.2227C47.4452 13.9715 44.0996 10.7194 40.2095 10.7194V10.7176ZM40.188 22.2187C39.4062 22.2187 38.6419 21.9869 37.9919 21.5526C37.3418 21.1182 36.8352 20.5008 36.536 19.7785C36.2368 19.0563 36.1585 18.2615 36.311 17.4947C36.4636 16.7279 36.84 16.0235 37.3929 15.4707C37.9457 14.9179 38.65 14.5414 39.4168 14.3889C40.1836 14.2364 40.9784 14.3146 41.7007 14.6138C42.423 14.913 43.0404 15.4197 43.4747 16.0697C43.9091 16.7198 44.1409 17.484 44.1409 18.2658C44.1409 19.3142 43.7244 20.3196 42.9831 21.061C42.2418 21.8023 41.2364 22.2187 40.188 22.2187Z"
						>
						</path>
						<path
							d="M78.0389 18.0389C78.0389 13.7266 74.4112 10.5374 70.2714 10.5374C66.5467 10.5374 63.2317 13.6781 63.2317 18.2635V30.5193H66.7156V23.9018C67.8763 25.0409 69.0802 25.5422 70.8015 25.5422C74.6915 25.5422 78.0371 22.2919 78.0371 18.0389H78.0389ZM74.74 17.9958C74.74 18.7776 74.5082 19.5418 74.0738 20.1919C73.6395 20.8419 73.0221 21.3486 72.2998 21.6478C71.5775 21.947 70.7827 22.0252 70.0159 21.8727C69.2492 21.7202 68.5448 21.3437 67.992 20.7909C67.4392 20.2381 67.0627 19.5337 66.9102 18.7669C66.7577 18.0001 66.8359 17.2054 67.1351 16.4831C67.4343 15.7608 67.941 15.1434 68.591 14.709C69.2411 14.2747 70.0053 14.0429 70.7871 14.0429C71.8355 14.0429 72.8409 14.4593 73.5822 15.2006C74.3236 15.942 74.74 16.9474 74.74 17.9958Z"
						>
						</path>
						<path
							opacity="var(--svg-path-opacity)"
							d="M89.2939 10.3688V6.86871C89.7565 6.65259 90.1481 6.30952 90.4233 5.87946C90.6984 5.44939 90.8458 4.95002 90.8481 4.43948V4.35862C90.8481 3.64382 90.5642 2.9583 90.0587 2.45285C89.5533 1.94741 88.8678 1.66346 88.153 1.66346H88.0721C87.3573 1.66346 86.6718 1.94741 86.1664 2.45285C85.6609 2.9583 85.377 3.64382 85.377 4.35862V4.43948C85.3793 4.95002 85.5267 5.44939 85.8018 5.87946C86.077 6.30952 86.4686 6.65259 86.9312 6.86871V10.3688C85.6017 10.5722 84.3497 11.1233 83.3017 11.9662L73.7033 4.48979C73.7713 4.24324 73.8075 3.98905 73.8111 3.73334C73.8122 3.1327 73.6351 2.54522 73.3022 2.04524C72.9694 1.54525 72.4957 1.15521 71.9412 0.924446C71.3866 0.693685 70.7761 0.632572 70.1868 0.748837C69.5975 0.865103 69.056 1.15352 68.6306 1.57762C68.2053 2.00171 67.9152 2.54243 67.7972 3.13137C67.6792 3.72031 67.7385 4.33102 67.9676 4.88625C68.1968 5.44149 68.5854 5.9163 69.0844 6.25063C69.5834 6.58496 70.1703 6.76379 70.771 6.7645C71.2962 6.76215 71.8117 6.62214 72.2659 6.35843L81.7187 13.7126C80.8694 14.9955 80.4262 16.5045 80.447 18.0429C80.4679 19.5813 80.9517 21.0778 81.8355 22.3371L78.9607 25.212C78.7282 25.1377 78.486 25.0984 78.242 25.0952C77.7489 25.0955 77.2669 25.2421 76.8571 25.5162C76.4473 25.7904 76.1279 26.1799 75.9393 26.6356C75.7508 27.0912 75.7016 27.5925 75.7979 28.0761C75.8941 28.5597 76.1316 29.0039 76.4803 29.3526C76.829 29.7013 77.2732 29.9387 77.7568 30.035C78.2404 30.1313 78.7417 30.0821 79.1973 29.8935C79.653 29.705 80.0425 29.3856 80.3166 28.9758C80.5908 28.5659 80.7373 28.084 80.7377 27.5909C80.7346 27.3469 80.6952 27.1047 80.6209 26.8722L83.4652 24.0279C84.3927 24.7416 85.4712 25.2336 86.6181 25.4661C87.7651 25.6987 88.95 25.6657 90.0822 25.3696C91.2144 25.0735 92.2639 24.5222 93.1501 23.7579C94.0364 22.9936 94.736 22.0367 95.1953 20.9603C95.6546 19.8839 95.8615 18.7167 95.8001 17.548C95.7386 16.3793 95.4106 15.2402 94.841 14.2179C94.2713 13.1956 93.4753 12.3172 92.5138 11.6501C91.5524 10.9829 90.4509 10.5446 89.2939 10.3688ZM88.1152 21.879C87.3372 21.8783 86.5769 21.6469 85.9303 21.2142C85.2837 20.7815 84.7799 20.1668 84.4826 19.4478C84.1852 18.7288 84.1077 17.9378 84.2598 17.1748C84.4119 16.4118 84.7868 15.711 85.3371 15.161C85.8873 14.611 86.5883 14.2364 87.3514 14.0847C88.1145 13.9329 88.9054 14.0108 89.6243 14.3085C90.3431 14.6061 90.9576 15.1102 91.39 15.757C91.8224 16.4037 92.0534 17.1642 92.0538 17.9422C92.0538 18.9858 91.6392 19.9867 90.9013 20.7247C90.1633 21.4626 89.1624 21.8772 88.1188 21.8772"
						>
						</path>
					</g>
					<defs>
						<clipPath id="clip-hubspot-mono">
							<rect
								width="105.19"
								height="29.8175"
								fill="current"
								transform="translate(0.174072 0.692871)"
							></rect>
						</clipPath>
					</defs>
				</svg>
			</div>
			<div class="my-2 h-7 text-gray-500 md:h-9">
				<svg
					fill="currentColor"
					viewBox="0 0 175 48"
					width="175"
					height="48"
					class="h-full w-auto"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g fill="current">
						<path
							d="m37.6816794 0h-32.06106871c-2.9509542 0-5.34351145 2.39255725-5.34351145 5.34351145v32.06106875c0 2.9509542 2.39255725 5.3435114 5.34351145 5.3435114h32.06106871c2.9509542 0 5.3435114-2.3925572 5.3435114-5.3435114v-32.06106875c0-2.9509542-2.3925572-5.34351145-5.3435114-5.34351145zm-10.3316794 7.83759542c0-.78683206.6385496-1.42538168 1.4253817-1.42538168.786832 0 1.4253817.63854962 1.4253817 1.42538168v19.03759538c0 .7868321-.6385497 1.4253817-1.4253817 1.4253817-.7868321 0-1.4253817-.6385496-1.4253817-1.4253817zm-7.1242366-.72137405c0-.78683206.6385496-1.42538168 1.4253816-1.42538168.7868321 0 1.4253817.63854962 1.4253817 1.42538168v20.66202293c0 .786832-.6385496 1.4253817-1.4253817 1.4253817-.786832 0-1.4253816-.6385497-1.4253816-1.4253817zm-7.1242367.72137405c0-.78683206.6385496-1.42538168 1.4253817-1.42538168s1.4240458.63854962 1.4240458 1.42538168v19.03759538c0 .7868321-.6372137 1.4253817-1.4240458 1.4253817s-1.4253817-.6385496-1.4253817-1.4253817zm-7.12423662 2.84942748c0-.78683206.63721374-1.42538168 1.4240458-1.42538168s1.42538168.63854962 1.42538168 1.42538168v12.8164122c0 .7868321-.63854962 1.4253817-1.42538168 1.4253817s-1.4240458-.6385496-1.4240458-1.4253817zm30.85076332 21.7347328c-.2190839.1896947-5.4984732 4.6181298-15.1769084 4.6181298-9.6784351 0-14.95515263-4.4284351-15.17690836-4.6181298-.5971374-.5116412-.66793893-1.410687-.15496183-2.0091603.51030534-.5958015 1.40801527-.666603 2.00515267-.1562977.08282443.0694657 4.79713742 3.9341603 13.32538172 3.9341603 8.6351145 0 13.2759542-3.8927481 13.321374-3.9314885.5958015-.5129771 1.4975191-.4435115 2.0078244.1536259.5156489.5984733.4461832 1.4975191-.1509542 2.0091603zm.4969466-8.9183206c0 .7868321-.6385496 1.4253817-1.4253817 1.4253817-.786832 0-1.4240458-.6385496-1.4240458-1.4253817v-12.8164122c0-.78683206.6372138-1.42538168 1.4240458-1.42538168.7868321 0 1.4253817.63854962 1.4253817 1.42538168z"
							transform="translate(1 3)"
						></path>
						<g transform="translate(57.442748 16.358779)">
							<path
								d="m3.54007634 14.1950382c0 .7133587-.54503817 1.2998091-1.32118321 1.2998091-.75477099 0-1.29980916-.5877862-1.29980916-1.2998091v-12.39293896c0-.71335878.54503817-1.29980916 1.32118321-1.29980916.75477099 0 1.29980916.58778626 1.29980916 1.29980916z"
							>
							</path>
							<path
								d="m20.4830153 1.80209924v11.32423666c0 1.530916-.8175573 2.3912214-2.1173664 2.3912214h-.1041985c-1.2370229 0-1.8248092-.7133588-2.3484733-1.7620229l-2.6423664-5.13778631-2.3484733-5.30477099.0627863 5.13778626.021374 5.72423664c0 .7133588-.5450382 1.2998092-1.3211832 1.2998092-.75477099 0-1.29980916-.5877863-1.29980916-1.2998092v-11.32423664c0-1.40534351.81755726-2.39122137 2.24427486-2.39122137h.1041984c1.3211832 0 1.8662214.71335877 2.3912214 1.7620229l2.5996183 5.09637404 2.2229008 4.94942747-.0627863-4.73969464-.021374-5.72423665c0-.71335877.5450381-1.29980916 1.3211832-1.29980916.7534351-.00133587 1.2984733.58511451 1.2984733 1.29847329z"
							>
							</path>
							<path
								d="m30.9896947 14.175c0 .7133588-.5450382 1.2998092-1.3211832 1.2998092-.754771 0-1.2998092-.5877863-1.2998092-1.2998092v-11.21870229h-3.2501908c-.6706107 0-1.2156489-.50362595-1.2156489-1.2370229 0-.71335878.5450382-1.21564886 1.2156489-1.21564886h9.121374c.6706107 0 1.2156489.50362596 1.2156489 1.2370229 0 .71335878-.5450382 1.21564886-1.2156489 1.21564886h-3.2501908z"
							>
							</path>
							<path
								d="m38.8740458 13.7555344v-11.63816799c0-1.09007633.6078244-1.69790076 1.7192748-1.65648855h7.5490458c.6706107 0 1.2156489.52366413 1.2156489 1.2370229 0 .71335878-.5450382 1.21564886-1.2156489 1.21564886h-6.6687023v3.60687023h5.8925573c.6505725 0 1.1742366.48225191 1.1742366 1.17423664s-.5236641 1.17423664-1.1742366 1.17423664h-5.8925573v4.15190837h6.6687023c.6706107 0 1.2156489.5236641 1.2156489 1.2370229s-.5450382 1.2156511-1.2156489 1.2156511h-7.611832c-1.0900764.0013337-1.6979008-.6064908-1.6564886-1.7179411z"
							>
							</path>
							<path
								d="m64.2477099 13.7755725c.3566794.6078244.1255725 1.3839695-.6078244 1.7620229-.7133588.3566794-1.4895038.0841603-1.8448473-.5236641l-2.9148855-5.3889313h-2.767939l.0213741 4.571374c0 .7133588-.5450382 1.2998092-1.3211832 1.2998092-.754771 0-1.2998092-.5877863-1.2998092-1.2998092v-12.07900759c0-1.09007633.6078244-1.69790076 1.7192748-1.65648855h4.9694657c3.4185114 0 4.8438931 2.22290077 4.8438931 4.48721374 0 2.16011451-1.2583969 3.7538168-3.4185114 4.17328245zm-8.136832-6.52175571h4.1519084c1.4053435 0 2.1387404-.90171755 2.1387404-2.18148855 0-1.27977099-.776145-2.1601145-2.1601145-2.1601145h-4.1305343z"
							>
							</path>
							<path
								d="m70.4541985 14.3633588c-1.5723283-1.4053435-2.285687-3.6068703-2.285687-6.37480918 0-2.78931298.6919847-4.96946565 2.2442748-6.35343512.9645038-.83893129 2.2643129-1.40534351 4.1519084-1.40534351 1.6564885 0 2.9362595.37805344 3.9007633 1.19561069.8389313.67061069 1.4467557 1.61507634 1.8034351 2.93625954.1883588.69198473-.2938931 1.38396947-1.0900763 1.53091603-.754771.12557252-1.3625954-.35667939-1.5937023-1.04866412-.251145-.67061069-.5877863-1.1528626-.9858779-1.48950382-.5450381-.48225191-1.2156488-.69198473-2.0973282-.69198473-.9431298 0-1.7620229.27251908-2.3698473.88034351-.8803435.88034351-1.258397 2.45400764-1.258397 4.44580153 0 1.97175572.3566794 3.54408398 1.279771 4.42442748.6078244.6078244 1.4053435.8803435 2.3270993.8803435.9645038 0 1.6979007-.251145 2.307061-.8175572.3139313-.2938932.5877863-.6706107.7761451-1.1114504.272519-.6505725.8389313-1.1328245 1.5723282-.9645038.7333969.1683206 1.1956107.8803435.9645038 1.5723282-.3780534 1.1528626-1.0272901 2.0759542-1.9076336 2.7051527-.9645038.6919847-2.1601145 1.0486641-3.6696565 1.0486641-1.9290076 0-3.1459923-.5664122-4.0690839-1.3625954z"
							>
							</path>
							<path
								d="m83.2251908 7.98854962c0-4.69694657 1.9290077-7.75877863 6.4803436-7.75877863 4.5085877 0 6.4589694 2.97767176 6.4589694 7.75877863 0 4.84389308-1.9717557 7.75877858-6.4589694 7.75877858-4.5713741 0-6.4803436-2.9148855-6.4803436-7.75877858zm10.2541985 0c0-3.56545802-1.2998091-5.30477099-3.795229-5.30477099-2.4540076 0-3.7538168 1.74064885-3.7538168 5.30477099 0 3.56545798 1.258397 5.30477098 3.7538168 5.30477098 2.4740458 0 3.795229-1.7406488 3.795229-5.30477098z"
							>
							</path>
							<path
								d="m116.50458 14.175c0 .7133588-.545038 1.2998092-1.321183 1.2998092-.754771 0-1.299809-.5877863-1.299809-1.2998092v-5.62003817l.062786-5.4730916-1.824809 5.55725191-1.844847 5.47309156c-.313932.9645039-.964504 1.3425573-1.782062 1.3425573-.860305 0-1.489503-.3980916-1.824809-1.3625954l-1.887595-5.45171758-1.740649-5.47309161.062786 5.3889313v5.62003819c0 .7133588-.545038 1.2998091-1.321183 1.2998091-.754771 0-1.299809-.5877862-1.299809-1.2998091v-11.21870231c0-1.55229008.838931-2.45400764 2.307061-2.45400764 1.383969 0 2.160115.73339695 2.599618 2.0759542l1.929008 5.72423664 1.174237 3.90076341 1.19561-3.90076341 1.929008-5.72423664c.44084-1.34255725 1.195611-2.0759542 2.57958-2.0759542 1.46813 0 2.285687.88034352 2.285687 2.45400764z"
							>
							</path>
						</g>
					</g>
				</svg>
			</div>
			<div class="my-2 h-7 text-gray-500 md:h-9">
				<svg
					viewBox="0 0 175 48"
					width="175"
					height="48"
					class="h-full w-auto"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
				>
					<g fill="current" transform="translate(3 7)">
						<path
							d="m56.6548259 25.3816928c-4.1385107 0-7.493381-3.4354677-7.493381-7.6740785 0-4.2375322 3.3548703-7.6729999 7.493381-7.6729999s7.4930223 3.4354677 7.4930223 7.6729999c0 4.2386108-3.3545116 7.6740785-7.4930223 7.6740785zm7.5167037.9731908c.1033371 1.1773918 1.0441361 2.6765442 2.6742084 2.6765442h.9537161c.3695739 0 .6727681-.3034255.6727681-.6737198v-20.9992784h-.0043057c-.0190169-.35375682-.311088-.6374094-.6684624-.6374094h-2.9551564c-.3573744 0-.6494455.28365258-.66918.6374094h-.0035881v1.70622957c-1.8109123-2.23434825-4.665602-3.16188139-7.5281855-3.16188139-6.5070133 0-11.782233 5.28514132-11.782233 11.80483652 0 6.5204142 5.2752197 11.8055555 11.782233 11.8055555v.0007191c2.8625835 0 5.9824335-1.1130398 7.5278267-3.1618814zm40.8858944-.9731908c-4.138215 0-7.4934948-3.4354677-7.4934948-7.6740785 0-4.2375322 3.3552798-7.6729999 7.4934948-7.6729999 4.138574 0 7.493136 3.4354677 7.493136 7.6729999 0 4.2386108-3.354562 7.6740785-7.493136 7.6740785zm7.516818.9731908c.103339 1.1773918 1.044152 2.6765442 2.674249 2.6765442h.954089c.36958 0 .67242-.3034255.67242-.6737198v-20.9992784h-.003947c-.019376-.35375682-.311452-.6374094-.668473-.6374094h-2.95556c-.357379 0-.649096.28365258-.66919.6374094h-.003588v1.70622957c-1.81094-2.23434825-4.665673-3.16188139-7.5283-3.16188139-6.5071121 0-11.7820531 5.28514132-11.7820531 11.80483652 0 6.5204142 5.274941 11.8055555 11.7820531 11.8055555v.0007191c2.862627 0 5.982524-1.1130398 7.527941-3.1618814z"
						>
						</path>
						<path
							d="m158.204594 25.1860427c-4.064988 0-7.359971-3.3675788-7.359971-7.5224295 0-4.1537935 3.294983-7.5213723 7.359971-7.5213723 4.064282 0 7.358914 3.3675788 7.358914 7.5213723 0 4.1548507-3.294632 7.5224295-7.358914 7.5224295zm7.382172.9539594c.101493 1.1541251 1.025498 2.6236526 2.626472 2.6236526h.937044c.362977 0 .660759-.2974295.660759-.6604063v-20.58430769h-.004229c-.01903-.34676617-.305535-.62481343-.65653-.62481343h-2.902757c-.350995 0-.6375.27804726-.656882.62481343h-.003877v1.67251244c-1.778234-2.19019486-4.581965-3.09939884-7.393449-3.09939884-6.391211 0-11.571912 5.18070069-11.571912 11.57155889 0 6.3915631 5.180701 11.5722637 11.571912 11.5722637v.0007048c2.811484 0 5.875642-1.0910448 7.393097-3.0993989z"
						>
						</path>
						<path
							d="m142.84652 26.386958-.001406-10.5372015h.000352c0-5.93987885-3.776327-9.94697872-9.798285-9.94697872-2.874492 0-5.504816 1.63540156-6.063061 3.06650865-.179876-1.10793139-.772903-2.27268871-2.611003-2.27268871h-.936967c-.36221 0-.658372.29458842-.658372.65367254v18.38754724.002789 1.9390543.0359084h.003864c.018621.3423501.304945.6177641.654859.6177641h1.959657.933805c.044266 0 .08783-.0052294.129637-.0135963.019322-.0034863.037239-.0108074.055859-.0160368.021431-.0066239.043916-.0118532.064292-.0202203.025646-.0104588.049184-.0247524.073074-.0380002.011594-.0069725.024242-.0122019.035484-.019523.028808-.0184771.055157-.0407891.080803-.0634498.004216-.0041835.009486-.0069726.01335-.0108074.028808-.0275414.055157-.0578717.078344-.0895967l.000352-.0006972c.072371-.0986611.116286-.2175423.123664-.3458364h.003513v-.0359084-1.2923542-.3395612-10.3614942c0-3.189922 2.606435-5.77637355 5.821706-5.77637355 3.214919 0 5.821355 2.58645155 5.821355 5.77637355l.002809 10.054704.000703-.0031377c0 .0087157.001406.01778.001406.0275414v1.9143019.0359084h.003513c.019322.3423501.305295.6177641.65521.6177641h1.958603.934859c.044618 0 .08783-.0052294.129637-.0135963.017215-.0031377.033024-.0097615.049887-.0146423.023539-.0066239.047779-.0125505.070615-.0216148.023539-.0097616.04532-.0230093.067453-.0359084.013702-.0073212.028106-.0128992.041105-.0216148.027051-.0174312.051293-.0383488.075182-.059615.006323-.0052293.012999-.0094128.018972-.0153394.027402-.0261469.051643-.0543856.074128-.0843673.001757-.0020919.003512-.0038349.005269-.0059267.071318-.0979638.114882-.2157991.122259-.3433959 0-.0010459.000352-.0017432.000352-.0017432h.003864v-.0359084-1.2923542zm-68.0938885-3.0398982c2.019354 1.3696875 4.2238214 2.0343993 6.3423435 2.0343993 2.0178847 0 4.103718-1.0238504 4.103718-2.8062416 0-2.3795174-4.5459338-2.7498003-7.4019717-3.6999536-2.8567726-.9501533-5.3172404-2.9140909-5.3172404-6.095289 0-4.86688419 4.4306051-6.87719712 8.5662773-6.87719712 2.6202386 0 5.3234843.84589884 7.0761866 2.05704768.6038228.44757504.2361667.96201671.2361667.96201671l-1.6733679 2.33853463c-.1876845.2635121-.5167754.4914338-.9887415.2059924-.4719662-.285082-2.1273369-1.4318807-4.6502439-1.4318807-2.5232742 0-4.0431154 1.1406873-4.0431154 2.5542334 0 1.6950333 1.9752793 2.2281688 4.2891989 2.8058822 4.0317296 1.0637547 8.4303805 2.3424891 8.4303805 7.1806134 0 4.288452-4.0982087 6.9386714-8.6272472 6.9386714-3.4326815 0-6.3548314-.9577027-8.8057497-2.7181646-.5108988-.5000617-.1542613-.9645331-.1542613-.9645331l1.6649202-2.3270307c.3386404-.4349926.7657972-.2832845.9527473-.1571007z"
						>
						</path>
						<path
							d="m27.1527778 8.26333583c0 4.56415467-3.6997975 8.26444197-8.2638889 8.26444197s-8.2638889-3.7002873-8.2638889-8.26444197c0-4.56304855 3.6997975-8.26333583 8.2638889-8.26333583s8.2638889 3.70028728 8.2638889 8.26333583"
						>
						</path>
						<path
							d="m8.23160463 17.773563c-4.54624074 0-8.2315679 3.6845926-8.2315679 8.2308333 0 4.5462408 3.68532716 8.2319352 8.2315679 8.2319352 4.54624077 0 8.23193527-3.6856944 8.23193527-8.2319352 0-4.5462407-3.6856945-8.2308333-8.23193527-8.2308333"
						>
						</path>
						<path
							d="m29.3846129 17.7727549c-4.4470501 0-8.0526208 3.6853272-8.0526208 8.2319352 0 4.5458734 3.6055707 8.2315679 8.0526208 8.2315679 4.4474094 0 8.0529801-3.6856945 8.0529801-8.2315679 0-4.546608-3.6055707-8.2319352-8.0529801-8.2319352"
						>
						</path>
					</g>
				</svg>
			</div>
		</div>
	</div>
	<div class="mx-auto mt-24 flex max-w-4xl flex-col items-center justify-center">
		<span
			class="rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600"
		>
			TWO-COL FEATURES
		</span>
		<h2 class="mt-4 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
			Supercharge Your Workflows
		</h2>
		<p class="mt-4 text-center text-lg text-slate-600 [text-wrap:pretty]">
			Unlock your team's true potential with our state-of-the-art SaaS platform. From intelligent
			task management to real-time collaboration and top-notch data security, we have everything you
			need to streamline your workflows and achieve high productivity.
		</p>
	</div>
	<div class="grid py-10 md:grid-cols-2">
		<div class="grid place-items-center">
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img
				src="images/6.Ep0jo6kx_Z2s10bH.png"
				alt="Feature Image"
				loading="lazy"
				width="730"
				height="584"
				decoding="async"
			/>
		</div>
		<div class="grid place-items-center">
			<div class="max-w-lg">
				<span
					class="-ml-px rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600"
				>
					Simplified Workflows
				</span>
				<h3 class="mt-4 text-2xl font-medium [text-wrap:balance]">
					Experience the Ultimate Boost in Productivity with Our Intuitive Platform
				</h3>
				<p class="mt-4 text-slate-600 [text-wrap:balance]">
					Streamline your tasks and collaborate seamlessly with our cutting-edge SaaS startup
					platform. Unlock the potential of your team and take productivity to new heights.
				</p>
				<ul class="mt-6 grid gap-y-4 text-left">
					<li class="flex items-center gap-3 text-neutral-800">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 256 256"
							class="h-5 w-5"
							data-icon="ph:check-circle-fill"
						>
							<symbol id="ai:ph:check-circle-fill">
								<path
									fill="currentColor"
									d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"
								>
								</path>
							</symbol>
							<use xlink:href="#ai:ph:check-circle-fill"></use>
						</svg> <span class="text-sm">Intelligent Task Management</span>
					</li>
					<li class="flex items-center gap-3 text-neutral-800">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 256 256"
							class="h-5 w-5"
							data-icon="ph:check-circle-fill"
						>
							<use xlink:href="#ai:ph:check-circle-fill"></use>
						</svg> <span class="text-sm">Real-time Collaboration</span>
					</li>
					<li class="flex items-center gap-3 text-neutral-800">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 256 256"
							class="h-5 w-5"
							data-icon="ph:check-circle-fill"
						>
							<use xlink:href="#ai:ph:check-circle-fill"></use>
						</svg> <span class="text-sm">Data Security &amp; Privacy</span>
					</li>
				</ul>
				<div class="mt-6 flex items-center gap-4">
					<a
						href="/"
						class="focus-visible:shadow-outline-indigo group inline-flex items-center gap-px rounded-full bg-indigo-600 px-4 py-2 text-center text-sm text-white transition hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
					>
						<span>Start 14-day trial</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="mt-px h-4 w-4 transition-transform group-hover:translate-x-1"
						>
							<path
								fill-rule="evenodd"
								d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
								clip-rule="evenodd"
							></path>
						</svg>
					</a>
					<a
						href="/"
						class="focus-visible:shadow-outline-indigo rounded-full px-2 py-1 text-sm text-slate-600 transition hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
					>
						Contact Sales</a
					>
				</div>
			</div>
		</div>
	</div>
	<div class="grid py-10 md:grid-cols-2">
		<div class="grid place-items-center pb-10 md:order-2 md:pb-0">
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img
				src="images/2.ldT67BXv_ZgktxF.png"
				alt="Feature Image"
				loading="lazy"
				width="1280"
				height="800"
				decoding="async"
			/>
		</div>
		<div class="grid place-items-center">
			<div class="max-w-lg">
				<span
					class="-ml-px rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600"
				>
					AI-Powered Insights
				</span>
				<h3 class="mt-4 text-2xl font-medium [text-wrap:balance]">
					Supercharge Your Marketing Strategy with Advanced Analytics
				</h3>
				<p class="mt-4 text-slate-600 [text-wrap:balance]">
					Harness the potential of AI-driven marketing analytics to optimize your campaigns,
					understand your audience better, and achieve unprecedented growth.
				</p>
				<ul class="mt-6 grid gap-y-4 text-left">
					<li class="flex items-center gap-3 text-neutral-800">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 256 256"
							class="h-5 w-5"
							data-icon="ph:check-circle-fill"
						>
							<use xlink:href="#ai:ph:check-circle-fill"></use>
						</svg> <span class="text-sm">Smart Audience Segmentation</span>
					</li>
					<li class="flex items-center gap-3 text-neutral-800">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 256 256"
							class="h-5 w-5"
							data-icon="ph:check-circle-fill"
						>
							<use xlink:href="#ai:ph:check-circle-fill"></use>
						</svg> <span class="text-sm">Predictive Campaign Performance</span>
					</li>
					<li class="flex items-center gap-3 text-neutral-800">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 256 256"
							class="h-5 w-5"
							data-icon="ph:check-circle-fill"
						>
							<use xlink:href="#ai:ph:check-circle-fill"></use>
						</svg> <span class="text-sm">Real-time Data Visualization</span>
					</li>
				</ul>
				<div class="mt-6 flex items-center gap-4">
					<a
						href="/"
						class="focus-visible:shadow-outline-indigo group inline-flex items-center gap-px rounded-full bg-indigo-600 px-4 py-2 text-center text-sm text-white transition hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
					>
						<span>Start 14-day trial</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="mt-px h-4 w-4 transition-transform group-hover:translate-x-1"
						>
							<path
								fill-rule="evenodd"
								d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
								clip-rule="evenodd"
							></path>
						</svg>
					</a>
					<a
						href="/"
						class="focus-visible:shadow-outline-indigo rounded-full px-2 py-1 text-sm text-slate-600 transition hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
						>Contact Sales</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="mx-auto max-w-screen-xl px-5">
	<div class="mt-24">
		<h2 class="text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
			Client <span class="text-indigo-600">Testimonials</span>
		</h2>
		<p class="mt-4 text-center text-lg text-slate-600">
			Improwised is trusted by the world's leading companies and brands.
		</p>
	</div>
</div>
<div class="relative mt-10 overflow-x-clip">
	<div
		class="bg-gradient-radial absolute -top-10 right-1/3 -z-10 h-96 w-96 from-indigo-100 blur-2xl"
	></div>
	<div
		class="bg-gradient-radial absolute right-1/3 top-10 -z-10 h-96 w-96 translate-x-2/3 from-purple-100 blur-2xl"
	></div>
	<div class="group relative gap-10 overflow-hidden py-5 md:flex">
		<div
			class="md:motion-safe:animate-marquee flex w-auto min-w-full shrink-0 snap-x snap-mandatory flex-nowrap items-stretch gap-10 overflow-x-auto px-5 py-5"
		>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Improwised has transformed the way we manage our projects. Its well-designed interface and
					powerful features make it a must-have tool for any startup. We've seen a great increase in
					our productivity and collaboration.
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/photo-1624298357597-fd92dfbec01d_Z9mHXD.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="John Doe"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">John Doe</h2>
						<p class="text-sm text-slate-600">CEO at TechCorp</p>
					</div>
				</div>
			</div>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					As a marketing professional, I love using Improwised to streamline our marketing
					campaigns. The automation features and data analytics help us make data-driven decisions
					and optimize our business strategies.
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/
								photo-1607746882042-944635dfe10e_9mPL0.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="Jane Smith"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">Jane Smith</h2>
						<p class="text-sm text-slate-600">Marketing Manager at InnovateTech</p>
					</div>
				</div>
			</div>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Improwised has revolutionized the way we handle customer support. The ticketing system and
					knowledge base have significantly reduced response times, leading to happier customers.
					Thanks to this incredible tool.
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/
								photo-1639149888905-fb39731f2e6c_Z28s6qs.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="Mike Johnson"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">Mike Johnson</h2>
						<p class="text-sm text-slate-600">CTO at CloudNine</p>
					</div>
				</div>
			</div>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Improwised has simplified our employee management processes. From onboarding to
					performance evaluations, everything is now seamlessly organized in one place. It's made my
					job much more manageable and enjoyable!
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/photo-1586297135537-94bc9ba060aa_Z1yFbul.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="Emily Brown"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">Emily Brown</h2>
						<p class="text-sm text-slate-600">HR Manager at ConnectCo</p>
					</div>
				</div>
			</div>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Our sales team swears by Improwised's CRM capabilities. The lead tracking and pipeline
					management tools have resulted in a significant boost in sales. It's a versatile platform
					that has truly optimized our sales processes.
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/
								photo-1601455763557-db1bea8a9a5a_2gmhW0.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="David Lee"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">David Lee</h2>
						<p class="text-sm text-slate-600">Sales Director at Linkify</p>
					</div>
				</div>
			</div>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Improwised has been a lifesaver for our finance department. Its robust accounting features
					and automated invoicing have saved us countless hours of manual work. It's the perfect
					financial companion for any business!
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/
								photo-1544725176-7c40e5a71c5e_17087H.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="Sarah Martinez"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">Sarah Martinez</h2>
						<p class="text-sm text-slate-600">Finance Controller at MoneyMakers</p>
					</div>
				</div>
			</div>
		</div>
		<!--  ↓↓ Shadow DOM to make the animation smooth (clone) ↓↓ -->
		<div
			class="md:motion-safe:animate-marquee hidden min-w-full shrink-0 items-center gap-10 md:flex md:motion-reduce:hidden"
		>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Improwised has transformed the way we manage our projects. Its well-designed interface and
					powerful features make it a must-have tool for any startup. We've seen a great increase in
					our productivity and collaboration.
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/
								photo-1624298357597-fd92dfbec01d_Z9mHXD.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="John Doe"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">John Doe</h2>
						<p class="text-sm text-slate-600">CEO at TechCorp</p>
					</div>
				</div>
			</div>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					As a marketing professional, I love using Improwised to streamline our marketing
					campaigns. The automation features and data analytics help us make data-driven decisions
					and optimize our business strategies.
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/
								photo-1607746882042-944635dfe10e_9mPL0.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="Jane Smith"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">Jane Smith</h2>
						<p class="text-sm text-slate-600">Marketing Manager at InnovateTech</p>
					</div>
				</div>
			</div>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Improwised has revolutionized the way we handle customer support. The ticketing system and
					knowledge base have significantly reduced response times, leading to happier customers.
					Thanks to this incredible tool.
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/
								photo-1639149888905-fb39731f2e6c_Z28s6qs.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="Mike Johnson"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">Mike Johnson</h2>
						<p class="text-sm text-slate-600">CTO at CloudNine</p>
					</div>
				</div>
			</div>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Improwised has simplified our employee management processes. From onboarding to
					performance evaluations, everything is now seamlessly organized in one place. It's made my
					job much more manageable and enjoyable!
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/
								photo-1586297135537-94bc9ba060aa_Z1yFbul.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="Emily Brown"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">Emily Brown</h2>
						<p class="text-sm text-slate-600">HR Manager at ConnectCo</p>
					</div>
				</div>
			</div>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Our sales team swears by Improwised's CRM capabilities. The lead tracking and pipeline
					management tools have resulted in a significant boost in sales. It's a versatile platform
					that has truly optimized our sales processes.
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/
								photo-1601455763557-db1bea8a9a5a_2gmhW0.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="David Lee"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">David Lee</h2>
						<p class="text-sm text-slate-600">Sales Director at Linkify</p>
					</div>
				</div>
			</div>
			<div
				class=" relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Improwised has been a lifesaver for our finance department. Its robust accounting features
					and automated invoicing have saved us countless hours of manual work. It's the perfect
					financial companion for any business!
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/
								photo-1544725176-7c40e5a71c5e_17087H.png"
							class="h-12 w-12 rounded-full bg-slate-100 object-cover"
							alt="Sarah Martinez"
							loading="lazy"
							width="48"
							height="48"
							decoding="async"
						/>
					</div>
					<div>
						<h2 class="font-medium text-slate-800">Sarah Martinez</h2>
						<p class="text-sm text-slate-600">Finance Controller at MoneyMakers</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="mx-auto max-w-screen-xl px-5">
	<div class="mt-24">
		<h2 class="text-4xl font-bold lg:text-5xl lg:tracking-tight">
			Everything you need to <span class="text-indigo-600">start a website</span>
		</h2>
		<p class="mt-4 text-lg text-slate-600">
			Astro comes batteries included. It takes the best parts of state-of-the-art tools and adds its
			own innovations.
		</p>
	</div>
	<div class="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
		<div
			class="rounded-2xl bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg lg:col-span-3"
		>
			<div class="relative flex h-auto items-start justify-center overflow-hidden lg:h-80">
				<div class="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>

				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src="images/
						2.ldT67BXv_ZgktxF.png"
					alt="Fea</picture>ture image"
					class="h-full w-full object-contain"
					loading="lazy"
					width="1280"
					height="800"
					decoding="async"
				/>
			</div>
			<div class="mt-2">
				<span
					class="rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600"
				>
					<span>Improwised</span>
				</span>
				<h3 class="mt-2 text-xl font-medium lg:text-2xl"><span>Responsive Website</span></h3>
				<p class="mt-2 text-slate-600 [text-wrap:balance]">
					<span>
						Improwised is a creative and modern mobile responsive website that helps you create any
						kind of marketing websites or landing pages.
					</span>
				</p>
			</div>
		</div>
		<div
			class="rounded-2xl bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg lg:col-span-2"
		>
			<div class="relative flex h-auto items-start justify-center overflow-hidden lg:h-80">
				<div class="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>

				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src="images/
						2.ldT67BXv_ZgktxF.png"
					alt="Feature image"
					class="h-full w-full object-contain"
					loading="lazy"
					width="1280"
					height="800"
					decoding="async"
				/>
			</div>
			<div class="mt-2">
				<span
					class="rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600"
				>
					<span>Creative</span>
				</span>
				<h3 class="mt-2 text-xl font-medium lg:text-2xl"><span>Next Level Company</span></h3>
				<p class="mt-2 text-slate-600 [text-wrap:balance]">
					<span>
						Improwised is a new kind of website that integrates your favorite tools and workflows.</span
					>
				</p>
			</div>
		</div>
	</div>
	<div class="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
		<div
			class="rounded-2xl bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg"
		>
			<div class="relative flex h-auto items-start justify-center overflow-hidden lg:h-60">
				<div class="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>

				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src="images/
						3.XiLsQFjx_Z1hzmJI.png"
					alt="Feature image"
					class="h-full w-full object-contain"
					loading="lazy"
					width="1280"
					height="800"
					decoding="async"
				/>
			</div>
			<div class="mt-2">
				<span
					class="rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600"
				>
					<span>Company</span>
				</span>
				<h3 class="mt-2 text-xl font-medium lg:text-2xl"><span>Modern Design</span></h3>
				<p class="mt-2 text-slate-600 [text-wrap:balance]">
					<span> Feeling old? Try this company and be a part of the modern design.</span>
				</p>
			</div>
		</div>
		<div
			class="rounded-2xl bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg"
		>
			<div class="relative flex h-auto items-start justify-center overflow-hidden lg:h-60">
				<div class="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>

				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src="images/
						2.ldT67BXv_ZgktxF.png"
					alt="Feature image"
					class="h-full w-full object-contain"
					loading="lazy"
					width="1280"
					height="800"
					decoding="async"
				/>
			</div>
			<div class="mt-2">
				<span
					class="rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600"
				>
					<span>Product</span>
				</span>
				<h3 class="mt-2 text-xl font-medium lg:text-2xl"><span>Highlight Features</span></h3>
				<p class="mt-2 text-slate-600 [text-wrap:balance]">
					<span> You can highlight your features in a trendy grid like this one.</span>
				</p>
			</div>
		</div>
		<div
			class="rounded-2xl bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg"
		>
			<div class="relative flex h-auto items-start justify-center overflow-hidden lg:h-60">
				<div class="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src="images/
					integrations.HhfHOMQB.svg"
					alt="Feature image"
					class="h-full w-full object-contain"
					loading="lazy"
					width="909"
					height="823"
					decoding="async"
				/>
			</div>
			<div class="mt-2">
				<span
					class="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
				>
					<span>Webhooks</span>
				</span>
				<h3 class="mt-2 text-xl font-medium lg:text-2xl"><span>100+ Integrations</span></h3>
				<p class="mt-2 text-slate-600 [text-wrap:balance]">
					<span> Improwised can be integrated with hundreds of tools using Zapier.</span>
				</p>
			</div>
		</div>
	</div>
	<!-- <div class="mt-16">
	  <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
		We have got more awesome <span class="text-indigo-600">features</span>
	  </h2>
	  <p class="text-lg mt-4 text-slate-600">
		Use this section to highlight not so important features of your product.
	  </p>
	</div> -->
	<div class="mx-auto mt-24 flex max-w-3xl flex-col items-center justify-center">
		<span
			class="rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600"
		>
			MORE FEATURES
		</span>
		<h2 class="mt-4 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
			We've got you covered
		</h2>
		<p class="mt-4 text-center text-lg text-slate-600 [text-wrap:pretty]">
			Our template covers all things SAAS. If you don't find what you're looking for, contact us and
			we'll either help you or steer you in the right direction.
		</p>
	</div>
	<div class="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5"
		>
			<div
				class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-indigo-500"
					data-icon="fluent:document-javascript-24-regular"
				>
					<symbol id="ai:fluent:document-javascript-24-regular">
						<path
							fill="currentColor"
							d="M18 20.5h-7.034a2.939 2.939 0 0 1-.702 1.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828a.491.491 0 0 0-.049-.04a.63.63 0 0 1-.036-.03a2.072 2.072 0 0 0-.219-.18a.652.652 0 0 0-.08-.044l-.048-.024l-.05-.029c-.054-.031-.109-.063-.166-.087a1.977 1.977 0 0 0-.624-.138a.56.56 0 0 1-.059-.007a.605.605 0 0 0-.082-.007H6a2 2 0 0 0-2 2v10.018a1.745 1.745 0 0 1 1.5.508V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5m-.622-12H14a.5.5 0 0 1-.5-.5V4.621zM4.25 15a.75.75 0 0 1 .75.75V20a2 2 0 1 1-4 0v-.25a.75.75 0 0 1 1.5 0V20a.5.5 0 0 0 1 0v-4.25a.75.75 0 0 1 .75-.75m3.7 0A1.95 1.95 0 0 0 6 16.95v.234c0 .614.323 1.184.85 1.5l1.529.918a.25.25 0 0 1 .121.214v.234a.45.45 0 0 1-.45.45h-.1a.45.45 0 0 1-.45-.45V20A.75.75 0 0 0 6 20v.05A1.95 1.95 0 0 0 7.95 22h.1A1.95 1.95 0 0 0 10 20.05v-.234a1.75 1.75 0 0 0-.85-1.5l-1.529-.918a.25.25 0 0 1-.121-.214v-.234a.45.45 0 0 1 .45-.45h.1a.45.45 0 0 1 .45.45V17a.75.75 0 0 0 1.5 0v-.05A1.95 1.95 0 0 0 8.05 15z"
						>
						</path>
					</symbol>
					<use xlink:href="#ai:fluent:document-javascript-24-regular"></use>
				</svg>
			</div>
			<div>
				<h3 class="text-lg font-semibold">Bring Your Own Framework</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML +
					JavaScript.
				</p>
			</div>
		</div>
		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5"
		>
			<div
				class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-indigo-500"
					data-icon="fluent:trophy-24-regular"
				>
					<symbol id="ai:fluent:trophy-24-regular">
						<path
							fill="currentColor"
							d="M15.254 2a2.25 2.25 0 0 1 2.236 2h1.268a1.75 1.75 0 0 1 1.744 1.606l.006.144v3a3.25 3.25 0 0 1-3.066 3.245l-.21.006a5.758 5.758 0 0 1-4.731 3.95V17.5h1.753a3.25 3.25 0 0 1 3.244 3.066l.006.184v.5a.75.75 0 0 1-.649.743l-.101.007H6.75a.75.75 0 0 1-.744-.648L6 21.25v-.5a3.25 3.25 0 0 1 3.065-3.245l.185-.005H11v-1.549a5.758 5.758 0 0 1-4.729-3.95L6.246 12a3.25 3.25 0 0 1-3.25-3.25v-3c0-.966.784-1.75 1.75-1.75h1.268a2.25 2.25 0 0 1 2.237-2zm-1 17H9.25a1.75 1.75 0 0 0-1.705 1.352l-.028.148h8.468a1.75 1.75 0 0 0-1.578-1.493zm1-15.5H8.25a.75.75 0 0 0-.75.75v5.999a4.252 4.252 0 0 0 8.503 0V4.25a.75.75 0 0 0-.75-.75m3.504 2h-1.254v4.983A1.75 1.75 0 0 0 19 8.904l.007-.154v-3a.25.25 0 0 0-.193-.243zM6 5.5H4.746a.25.25 0 0 0-.25.25v3a1.75 1.75 0 0 0 1.505 1.733z"
						>
						</path>
					</symbol>
					<use xlink:href="#ai:fluent:trophy-24-regular"></use>
				</svg>
			</div>
			<div>
				<h3 class="text-lg font-semibold">100% Static HTML, No JS</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					Astro renders your entire page to static HTML, removing all JavaScript from your final
					build by default.
				</p>
			</div>
		</div>
		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5"
		>
			<div
				class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-indigo-500"
					data-icon="fluent:box-24-regular"
				>
					<symbol id="ai:fluent:box-24-regular">
						<path
							fill="currentColor"
							d="M10.591 2.513a3.75 3.75 0 0 1 2.818 0l7.498 3.04A1.75 1.75 0 0 1 22 7.175v9.653a1.75 1.75 0 0 1-1.093 1.621l-7.498 3.04a3.75 3.75 0 0 1-2.818 0l-7.498-3.04A1.75 1.75 0 0 1 2 16.827V7.176a1.75 1.75 0 0 1 1.093-1.622zm2.254 1.39a2.25 2.25 0 0 0-1.69 0L9.24 4.68l7.527 2.927l2.669-1.03zm1.846 4.505L7.215 5.5L4.59 6.564l7.411 2.882zM3.5 16.828a.25.25 0 0 0 .156.231l7.499 3.04c.031.013.063.025.095.036v-9.371L3.5 7.75zm9.345 3.271l7.499-3.04a.25.25 0 0 0 .156-.232V7.774l-7.75 2.992v9.37a2.18 2.18 0 0 0 .095-.036"
						>
						</path>
					</symbol>
					<use xlink:href="#ai:fluent:box-24-regular"></use>
				</svg>
			</div>
			<div>
				<h3 class="text-lg font-semibold">On-Demand Components</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					Need some JS? Astro can automatically hydrate interactive components when they become
					visible on the page.
				</p>
			</div>
		</div>
		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5"
		>
			<div
				class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-indigo-500"
					data-icon="fluent:box-multiple-24-regular"
				>
					<symbol id="ai:fluent:box-multiple-24-regular">
						<path
							fill="currentColor"
							d="M15.78 3.737a2.25 2.25 0 0 0-1.56 0L9.913 5.33a.25.25 0 0 0-.163.234v2.793a4.75 4.75 0 0 0-1.5 0V5.563a1.75 1.75 0 0 1 1.143-1.641L13.7 2.33a3.75 3.75 0 0 1 2.6 0l4.307 1.592a1.75 1.75 0 0 1 1.143 1.641v10.67a1.75 1.75 0 0 1-1.143 1.642l-4.018 1.484c.105-.292.161-.604.161-.927v-.731l3.337-1.233a.25.25 0 0 0 .163-.235V5.563a.25.25 0 0 0-.163-.234zm-4.01 3.93a.75.75 0 1 1 .49-1.418l2.658.92a.25.25 0 0 0 .163 0l2.65-.92a.75.75 0 1 1 .492 1.418l-2.65.919a1.75 1.75 0 0 1-1.145 0zm-6 7a.75.75 0 0 1 .49-1.418l2.74.948l2.732-.947a.75.75 0 1 1 .49 1.417l-2.472.857v2.7a.75.75 0 0 1-1.5 0v-2.7zM10.3 9.53a3.75 3.75 0 0 0-2.6 0l-4.307 1.592a1.75 1.75 0 0 0-1.143 1.641v5.67a1.75 1.75 0 0 0 1.143 1.642L7.7 21.666a3.75 3.75 0 0 0 2.6 0l4.307-1.592a1.75 1.75 0 0 0 1.143-1.642v-5.67a1.75 1.75 0 0 0-1.143-1.641zm-2.08 1.407a2.25 2.25 0 0 1 1.56 0l4.307 1.592a.25.25 0 0 1 .163.234v5.67a.25.25 0 0 1-.163.235L9.78 20.259a2.25 2.25 0 0 1-1.56 0l-4.307-1.592a.25.25 0 0 1-.163-.235v-5.67a.25.25 0 0 1 .163-.234z"
						>
						</path>
					</symbol>
					<use xlink:href="#ai:fluent:box-multiple-24-regular"></use>
				</svg>
			</div>
			<div>
				<h3 class="text-lg font-semibold">Broad Integration</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any
					other npm packages.
				</p>
				Pages
			</div>
		</div>
		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5"
		>
			<div
				class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-indigo-500"
					data-icon="fluent:book-search-24-regular"
				>
					<symbol id="ai:fluent:book-search-24-regular">
						<path
							fill="currentColor"
							d="M14.819 11.795a3.724 3.724 0 1 0-1.024 1.024l2.476 2.475l.067.058l.008.006a.724.724 0 0 0 .942-1.093zm-3.095-4.348a2.276 2.276 0 1 1 0 4.553a2.276 2.276 0 0 1 0-4.553M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2zM19 18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1z"
						>
						</path>
					</symbol>
					<use xlink:href="#ai:fluent:book-search-24-regular"></use>
				</svg>
			</div>
			<div>
				<h3 class="text-lg font-semibold">SEO Enabled</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and
					syndication. It just works!
				</p>
			</div>
		</div>
		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5"
		>
			<div
				class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-indigo-500"
					data-icon="fluent:people-community-24-regular"
				>
					<symbol id="ai:fluent:people-community-24-regular">
						<path
							fill="currentColor"
							d="M7.5 3.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M4.5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-.732 4C2.79 9 2 9.791 2 10.768v.36c0 .207 0 1.408.7 2.575c.548.91 1.477 1.727 2.975 2.093a2.777 2.777 0 0 1 1.062-1.335c-1.603-.171-2.361-.883-2.75-1.53c-.484-.806-.487-1.664-.487-1.806v-.357c0-.148.12-.268.268-.268H8.03A3.974 3.974 0 0 1 8.535 9zm11.697 0c.261.452.437.959.504 1.5h4.263c.148 0 .268.12.268.268v.357c0 .142-.003 1-.487 1.805c-.389.648-1.147 1.36-2.75 1.531c.48.32.856.786 1.062 1.335c1.498-.366 2.427-1.183 2.974-2.093c.701-1.167.701-2.367.701-2.576v-.36C22 9.792 21.209 9 20.232 9zM15 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6M12 9.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M9 11a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-2.5 5.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zm1.768-.268a.268.268 0 0 0-.268.268v.357c0 .142.003 1 .487 1.805c.446.743 1.377 1.57 3.513 1.57s3.067-.827 3.513-1.57c.484-.805.487-1.663.487-1.805v-.357a.268.268 0 0 0-.268-.268z"
						>
						</path>
					</symbol>
					<use xlink:href="#ai:fluent:people-community-24-regular"></use>
				</svg>
			</div>
			<div>
				<h3 class="text-lg font-semibold">Community</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					Astro is an open source project powered by hundreds of contributors making thousands of
					individual contributions.
				</p>
			</div>
		</div>
	</div>
</div>
<div
	class="mt-20 flex flex-col items-center bg-gradient-to-bl from-indigo-900 to-indigo-700 p-8 text-center md:px-20 md:py-20"
>
	<h2 class="text-4xl tracking-tight text-white md:text-6xl">Build faster websites.</h2>
	<p class="mt-4 text-lg text-white/70 md:text-xl">
		Pull content from anywhere and serve it fast with Astro's next-gen island architecture.
	</p>
	<div class="mt-5 flex">
		<a
			href="/"
			class="focus-visible:shadow-outline-indigo rounded-full border-2 border-transparent bg-white px-7 py-2.5 text-center text-indigo-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
			>Sign up for a 14-day Trial
		</a>
	</div>
</div>
