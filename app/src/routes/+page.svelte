<script>
	import Card from '$lib/components/Card.svelte';
	let gradientX1 = 45.5;
	let gradientY1 = -200;
	// Update gradient position relative to the specific card
	function updateGradient1(event) {
		const rect = event.currentTarget.getBoundingClientRect();
		gradientX1 = event.clientX - rect.left;
		gradientY1 = event.clientY - rect.top;
	}
</script>

<div class="overflow-x-clip transition duration-500 ease-in-out" id="section2">
	<div class="section-hero build-in-animate relative overflow-hidden">
		<div class="relative z-10 md:absolute md:bottom-0 md:left-0 md:right-0 md:top-0">
			<div class="container-lg p-responsive">
				<div class="mx-auto my-5 px-5 pt-[15%] text-center md:w-2/3 lg:w-5/6 xl:w-full">
					<main class="relative place-items-center">

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
							We are providing effective <span class="text-theme"> development strategies.</span>
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

		<div class="hero-artwork absolute top-0 hidden md:relative md:block">

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
				class="hero-branches relative block"
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

						<feComposite in="flood" in2="SourceAlpha" operator="in" />
						<feGaussianBlur stdDeviation="1" />

						<feOffset dx="1" dy="1" result="offsetblur" />

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
						class="logo-avatar logo-avatar--lg icon rounded-full shadow-md"
						style="top: 3%; left: 4.25%;"
					/>
				</picture>
				<picture>
					<img
						src="images/python.png"
						width="100"
						height="100"
						alt="Avatar of the user ohjoycelau"
						class="logo-avatar logo-avatar--lg rounded-full shadow-md"
						style="top: 6%; left: 83.5%;"
					/>
				</picture>
				<picture>
					<img
						src="images/python.png"
						width="100"
						height="100"
						alt="Avatar of the user lerebear"
						class="logo-avatar logo-avatar--lg rounded-full shadow-md"
						style="top: 35%; left: 12%;"
					/>
				</picture>
				<picture>
					<img
						src="images/kubernetes.png"
						width="200"
						height="200"
						alt="kubernetes"
						class="logo-avatar logo-avatar--lg rounded-full shadow-md"
						style="top: 44%; right: 1%;"
					/>
				</picture>

				<picture>
					<img
						src="images/kubernetes.png"
						width="100"
						height="100"
						alt="kubernetes"
						class="logo-avatar logo-avatar--lg rounded-full shadow-md"
						style="top: 71%; left: 8%;"
					/>
				</picture>
				<picture>
					<img
						src="images/kubernetes.png"
						width="100"
						height="100"
						alt="kubernetes"
						class="logo-avatar logo-avatar--lg rounded-full shadow-md"
						style="top: 84%; left: 50%;"
					/>
				</picture>
				<picture>
					<img
						src="images/kubernetes.png"
						width="100"
						height="100"
						alt="Avatar of the user benbalter"
						class="logo-avatar logo-avatar--lg rounded-full shadow-md"
						style="top: 86%; left: 84%;"
					/>
				</picture>
			</div>
		</div>
	</div>
</div>
<div class="bg-image-custom mt-1 overflow-x-clip py-10">
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
						<div class="mb-4 text-2xl font-medium [text-wrap:balance]">50+ employees</div>
					</div>
					<div>
						<div class="mb-2 text-sm uppercase tracking-wide">Clients</div>
						<div class="mb-4 text-2xl font-medium [text-wrap:balance]">120+ Worldwide</div>
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
					class="border-theme bg-theme-100 text-theme rounded-full border px-3 py-1 text-xs font-medium"
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
<div class="mt-20 overflow-x-clip">
	<div class="mx-auto max-w-screen-xl px-5">
		<div class="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
			<!-- Card 1 -->

			<Card
				title="Our Vision"
				description="Integer vel elit congue ligula placerat mi uisque tempor saen justo sed accumsan tortor."
				icon='<svg
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
					>'
			/>

			<Card
				title="Our Mission"
				description="Integer vel elit congue ligula placerat mi uisque tempor saen justo sed accumsan tortor."
				icon='<svg
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
					>'
			/>

			<Card
				title="Core Values"
				description="Integer vel elit congue ligula placerat mi uisque tempor saen justo sed accumsan tortor."
				icon='<svg
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
					>'
			/>
		</div>
	</div>
</div>

<div class="mx-auto max-w-screen-xl px-5">
	<div class="mt-24">
		<h2 class="text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
			Client <span class="text-theme">Testimonials</span>
		</h2>
		<p class="mt-4 text-center text-lg text-slate-600">
			Improwised Technologies Pvt. Ltd. is trusted by the world's leading company.
		</p>
	</div>
</div>

<div class="relative mt-10 overflow-x-clip">
	<div
		class="bg-gradient-radial from-blues-100 absolute -top-10 right-1/3 -z-10 h-96 w-96 blur-2xl"
	></div>
	<div
		class="bg-gradient-radial absolute right-1/3 top-10 -z-10 h-96 w-96 translate-x-2/3 from-green-100 blur-2xl"
	></div>
	<div class="group relative gap-10 overflow-hidden py-5 md:flex">
		<div
			class="md:motion-safe:animate-marquee flex w-auto min-w-full shrink-0 snap-x snap-mandatory flex-nowrap items-stretch gap-10 overflow-x-auto px-5 py-5"
		>
			<div
				class="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 419" class="bg-shape-custom"
					><g clip-path="url(#clip0_302_2944)"
						><g
							><g stroke="currentColor" stroke-opacity="0.1"
								><path
									d="M882-29c0 78-31.096 176.998-220.184 176.998C537.454 147.998 464 259.996 464 353.086V495"
								></path><path
									d="M883 8c0 68-7.369 176.361-193.548 176.361-124.362 0-192.725 109.089-192.725 202.179V489"
								></path><path
									d="M882 89c0 68.363-22.369 133.178-184.548 133.178-124.363 0-160.726 100.363-160.726 193.453V503"
								></path><path
									d="M881 138c0 73-12.101 119.087-146.458 119.087-124.362 0-158.543 92.363-158.543 185.452V479"
								></path></g
							></g
						></g
					><defs
						><clipPath id="clip0_302_2944"
							><path fill="#fff" d="M0 0H800V419H0z" transform="matrix(-1 0 0 1 800 0)"
							></path></clipPath
						></defs
					></svg
				>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Improwised has transformed the way we manage our projects. Its well-designed interface and
					powerful features make it a must-have tool for any startup. We've seen a great increase in
					our productivity and collaboration.
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/photo.png"
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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 419" class="bg-shape-custom"
					><g clip-path="url(#clip0_302_2944)"
						><g
							><g stroke="currentColor" stroke-opacity="0.1"
								><path
									d="M882-29c0 78-31.096 176.998-220.184 176.998C537.454 147.998 464 259.996 464 353.086V495"
								></path><path
									d="M883 8c0 68-7.369 176.361-193.548 176.361-124.362 0-192.725 109.089-192.725 202.179V489"
								></path><path
									d="M882 89c0 68.363-22.369 133.178-184.548 133.178-124.363 0-160.726 100.363-160.726 193.453V503"
								></path><path
									d="M881 138c0 73-12.101 119.087-146.458 119.087-124.362 0-158.543 92.363-158.543 185.452V479"
								></path></g
							></g
						></g
					><defs
						><clipPath id="clip0_302_2944"
							><path fill="#fff" d="M0 0H800V419H0z" transform="matrix(-1 0 0 1 800 0)"
							></path></clipPath
						></defs
					></svg
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
								photo2.png"
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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 419" class="bg-shape-custom"
					><g clip-path="url(#clip0_302_2944)"
						><g
							><g stroke="currentColor" stroke-opacity="0.1"
								><path
									d="M882-29c0 78-31.096 176.998-220.184 176.998C537.454 147.998 464 259.996 464 353.086V495"
								></path><path
									d="M883 8c0 68-7.369 176.361-193.548 176.361-124.362 0-192.725 109.089-192.725 202.179V489"
								></path><path
									d="M882 89c0 68.363-22.369 133.178-184.548 133.178-124.363 0-160.726 100.363-160.726 193.453V503"
								></path><path
									d="M881 138c0 73-12.101 119.087-146.458 119.087-124.362 0-158.543 92.363-158.543 185.452V479"
								></path></g
							></g
						></g
					><defs
						><clipPath id="clip0_302_2944"
							><path fill="#fff" d="M0 0H800V419H0z" transform="matrix(-1 0 0 1 800 0)"
							></path></clipPath
						></defs
					></svg
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
								photo3.png"
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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 419" class="bg-shape-custom"
					><g clip-path="url(#clip0_302_2944)"
						><g
							><g stroke="currentColor" stroke-opacity="0.1"
								><path
									d="M882-29c0 78-31.096 176.998-220.184 176.998C537.454 147.998 464 259.996 464 353.086V495"
								></path><path
									d="M883 8c0 68-7.369 176.361-193.548 176.361-124.362 0-192.725 109.089-192.725 202.179V489"
								></path><path
									d="M882 89c0 68.363-22.369 133.178-184.548 133.178-124.363 0-160.726 100.363-160.726 193.453V503"
								></path><path
									d="M881 138c0 73-12.101 119.087-146.458 119.087-124.362 0-158.543 92.363-158.543 185.452V479"
								></path></g
							></g
						></g
					><defs
						><clipPath id="clip0_302_2944"
							><path fill="#fff" d="M0 0H800V419H0z" transform="matrix(-1 0 0 1 800 0)"
							></path></clipPath
						></defs
					></svg
				>
				<blockquote class="text-lg [text-wrap:balance] md:text-xl">
					Improwised has simplified our employee management processes. From onboarding to
					performance evaluations, everything is now seamlessly organized in one place. It's made my
					job much more manageable and enjoyable!
				</blockquote>
				<div class="mt-10 flex items-center gap-3">
					<div class="shrink-0">
						<img
							src="images/photo4.png"
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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 419" class="bg-shape-custom"
					><g clip-path="url(#clip0_302_2944)"
						><g
							><g stroke="currentColor" stroke-opacity="0.1"
								><path
									d="M882-29c0 78-31.096 176.998-220.184 176.998C537.454 147.998 464 259.996 464 353.086V495"
								></path><path
									d="M883 8c0 68-7.369 176.361-193.548 176.361-124.362 0-192.725 109.089-192.725 202.179V489"
								></path><path
									d="M882 89c0 68.363-22.369 133.178-184.548 133.178-124.363 0-160.726 100.363-160.726 193.453V503"
								></path><path
									d="M881 138c0 73-12.101 119.087-146.458 119.087-124.362 0-158.543 92.363-158.543 185.452V479"
								></path></g
							></g
						></g
					><defs
						><clipPath id="clip0_302_2944"
							><path fill="#fff" d="M0 0H800V419H0z" transform="matrix(-1 0 0 1 800 0)"
							></path></clipPath
						></defs
					></svg
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
								photo5.png"
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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 419" class="bg-shape-custom"
					><g clip-path="url(#clip0_302_2944)"
						><g
							><g stroke="currentColor" stroke-opacity="0.1"
								><path
									d="M882-29c0 78-31.096 176.998-220.184 176.998C537.454 147.998 464 259.996 464 353.086V495"
								></path><path
									d="M883 8c0 68-7.369 176.361-193.548 176.361-124.362 0-192.725 109.089-192.725 202.179V489"
								></path><path
									d="M882 89c0 68.363-22.369 133.178-184.548 133.178-124.363 0-160.726 100.363-160.726 193.453V503"
								></path><path
									d="M881 138c0 73-12.101 119.087-146.458 119.087-124.362 0-158.543 92.363-158.543 185.452V479"
								></path></g
							></g
						></g
					><defs
						><clipPath id="clip0_302_2944"
							><path fill="#fff" d="M0 0H800V419H0z" transform="matrix(-1 0 0 1 800 0)"
							></path></clipPath
						></defs
					></svg
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
								photo6.png"
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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 419" class="bg-shape-custom"
					><g clip-path="url(#clip0_302_2944)"
						><g
							><g stroke="currentColor" stroke-opacity="0.1"
								><path
									d="M882-29c0 78-31.096 176.998-220.184 176.998C537.454 147.998 464 259.996 464 353.086V495"
								></path><path
									d="M883 8c0 68-7.369 176.361-193.548 176.361-124.362 0-192.725 109.089-192.725 202.179V489"
								></path><path
									d="M882 89c0 68.363-22.369 133.178-184.548 133.178-124.363 0-160.726 100.363-160.726 193.453V503"
								></path><path
									d="M881 138c0 73-12.101 119.087-146.458 119.087-124.362 0-158.543 92.363-158.543 185.452V479"
								></path></g
							></g
						></g
					><defs
						><clipPath id="clip0_302_2944"
							><path fill="#fff" d="M0 0H800V419H0z" transform="matrix(-1 0 0 1 800 0)"
							></path></clipPath
						></defs
					></svg
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
								photo.png"
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
				class="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg"
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
								photo2.png"
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
								photo3.png"
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
								photo4.png"
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
								photo5.png"
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
								photo6.png"
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

<div class="mx-auto mt-24 max-w-screen-xl px-5">
	<!-- <div class="mx-auto mt-24 flex max-w-4xl flex-col items-center justify-center">
		<span
			class="border-theme bg-theme-100 text-theme rounded-full border px-3 py-1 text-xs font-medium"
			>Standard</span
		>
		<h2 class="mb-10 mt-4 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
			Trusted By <span class="text-theme">Management</span>
		</h2>
	</div> -->
	<h2 class="mb-2 text-center font-bold text-slate-500">Trusted by popular startups you know</h2>
	<div class="logosInfiniteSection">
		<div class="logosInfiniteScrollingWrapper">
			<div class="logosInfiniteScrolling">
				<div class="logosInfiniteScrollingImg">
					<img
						alt="cloudinary"
						loading="lazy"
						width="150"
						height="100"
						decoding="async"
						data-nimg="1"
						style="color:transparent"
						src="images/cloudinary.svg"
					/>
				</div>
				<div class="logosInfiniteScrollingImg">
					<img
						alt="cloudinary"
						loading="lazy"
						width="150"
						height="100"
						decoding="async"
						data-nimg="1"
						style="color:transparent"
						src="images/cloudinary.svg"
					/>
				</div>
				<div class="logosInfiniteScrollingImg">
					<img
						alt="cloudinary"
						loading="lazy"
						width="150"
						height="100"
						decoding="async"
						data-nimg="1"
						style="color:transparent"
						src="images/cloudinary.svg"
					/>
				</div>
				<div class="logosInfiniteScrollingImg">
					<img
						alt="cloudinary"
						loading="lazy"
						width="150"
						height="100"
						decoding="async"
						data-nimg="1"
						style="color:transparent"
						src="images/cloudinary.svg"
					/>
				</div>
				<div class="logosInfiniteScrollingImg">
					<img
						alt="cloudinary"
						loading="lazy"
						width="150"
						height="100"
						decoding="async"
						data-nimg="1"
						style="color:transparent"
						src="images/cloudinary.svg"
					/>
				</div>
				<div class="logosInfiniteScrollingImg">
					<img
						alt="cloudinary"
						loading="lazy"
						width="150"
						height="100"
						decoding="async"
						data-nimg="1"
						style="color:transparent"
						src="images/cloudinary.svg"
					/>
				</div>
				<div class="logosInfiniteScrollingImg">
					<img
						alt="cloudinary"
						loading="lazy"
						width="150"
						height="100"
						decoding="async"
						data-nimg="1"
						style="color:transparent"
						src="images/cloudinary.svg"
					/>
				</div>
				<div class="logosInfiniteScrollingImg">
					<img
						alt="cloudinary"
						loading="lazy"
						width="150"
						height="100"
						decoding="async"
						data-nimg="1"
						style="color:transparent"
						src="images/cloudinary.svg"
					/>
				</div>

				<div class="logosInfiniteScrollingImg">
					<img
						alt="cloudinary"
						loading="lazy"
						width="150"
						height="100"
						decoding="async"
						data-nimg="1"
						style="color:transparent"
						src="images/cloudinary.svg"
					/>
				</div>
			</div>
		</div>
	</div>
	<div></div>
</div>
<div class="mx-auto max-w-screen-xl px-5">
	<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
		<div class="lg:col-span-2">
			<div class="mt-24">
				<span
					class="border-theme bg-theme-100 text-theme rounded-full border px-3 py-1 text-xs font-medium"
				>
					Creative
				</span>
				<h2 class="mt-4 text-4xl font-bold lg:text-5xl lg:tracking-tight">
					What We <span class="text-theme">Offer</span>
				</h2>

				<p class="mt-4 text-lg text-slate-600">
					Boost developer efficiency with platform engineering, delivering scalable internal
					developer platforms across cloud-native, hybrid, and multicloud architectures.
				</p>
				<div class="mt-6 flex items-center gap-4">
					<a
						href="/"
						class="focus-visible:shadow-outline-green bg-theme hover:bg-grenn-800 group inline-flex items-center gap-px rounded-full px-4 py-2 text-center text-sm text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
					>
						<span>Get More</span>
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
				</div>
			</div>
		</div>
		<div
			class="card-service group bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg lg:col-span-3"
		>
			<div
				class="icon-container transition-al mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow ring-1 ring-gray-200/50 hover:shadow-lg group-hover:shadow-lg"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-theme"
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

			<div class="mb-2">
				<h3 class="mt-2 text-xl font-medium lg:text-2xl"><span>Platform Engineering</span></h3>
				<p class="mt-2 text-slate-600 [text-wrap:balance]">
					<span>
						Empowering your business with tailored tech solutions, transparent communication, and a
						dedicated, startup- minded team focused on growth.
					</span>
				</p>
			</div>
			<div class="relative mt-2 flex h-auto items-start justify-center overflow-hidden lg:h-80">
				<div class="absolute inset-0 z-10 bg-gradient-to-t from-green-50 via-transparent"></div>

				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src="images/
						dashboard1.png"
					alt="Fea</picture>ture image"
					class="h-full w-full object-contain"
					loading="lazy"
					width="1280"
					height="800"
					decoding="async"
				/>
			</div>
		</div>
	</div>

	<div class="mt-10 grid gap-10 md:grid-cols-3 lg:grid-cols-3">
		<div
			class="card-service group relative bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg"
		>
			<div
				class="icon-container transition-al mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow ring-1 ring-gray-200/50 hover:shadow-lg group-hover:shadow-lg"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-theme"
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
			<div class="bt-2">
				<h3 class="mt-2 text-xl font-medium lg:text-2xl">
					<span>Cloud Infrastructure Services</span>
				</h3>
				<p class="mt-2 text-slate-600 [text-wrap:balance]">
					<span>
						Empowering your business with tailored tech solutions, transparent communication</span
					>
				</p>
			</div>
			<div class="relative mt-2 flex h-auto items-start justify-center overflow-hidden lg:h-60">
				<div class="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>

				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src="images/
						dashboard1.png"
					alt="Feature image"
					class="h-full w-full object-contain"
					loading="lazy"
					width="1280"
					height="800"
					decoding="async"
				/>
			</div>
		</div>
		<div
			class="card-service group bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg"
		>
			<div
				class="icon-container transition-al mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow ring-1 ring-gray-200/50 hover:shadow-lg group-hover:shadow-lg"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-theme"
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
			<div class="mb-2">
				<h3 class="mt-2 text-xl font-medium lg:text-2xl"><span>Product Modernization</span></h3>
				<p class="mt-2 text-slate-600 [text-wrap:balance]">
					<span>
						Empowering your business with tailored tech solutions, transparent communication, and a
						dedicated.</span
					>
				</p>
			</div>
			<div class="relative flex h-auto items-start justify-center overflow-hidden lg:h-60">
				<div class="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>

				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src="images/
						dashboard2.png"
					alt="Feature image"
					class="h-full w-full object-contain"
					loading="lazy"
					width="1280"
					height="800"
					decoding="async"
				/>
			</div>
		</div>
		<div
			class="card-service group bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg"
		>
			<div
				class="icon-container transition-al mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow ring-1 ring-gray-200/50 hover:shadow-lg group-hover:shadow-lg"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-theme"
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

			<div class="mb-2">
				<h3 class="mt-2 text-xl font-medium lg:text-2xl"><span>Technology Consulting</span></h3>
				<p class="mt-2 text-slate-600 [text-wrap:balance]">
					<span>
						Empowering your business with tailored tech solutions, transparent communication, and a
						dedicated.</span
					>
				</p>
			</div>
			<div class="relative mt-2 flex h-auto items-start justify-center overflow-hidden lg:h-60">
				<div class="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>

				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src="images/
					integrations.svg"
					alt="Feature image"
					class="h-full w-full object-contain"
					loading="lazy"
					width="909"
					height="823"
					decoding="async"
				/>
			</div>
		</div>
	</div>
</div>

<div class="mx-auto max-w-screen-xl px-5">
	<!-- svelte-ignore a11y_no_static_element_interactions -->

	<div
		class="rounded-0 card-custom group mt-10 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg lg:col-span-3"
		on:mousemove={updateGradient1}
		style="--gradient-x: {gradientX1}px; --gradient-y: {gradientY1}px;"
	>
		<div class="grid md:grid-cols-2">
			<div class="grid place-items-center py-10">
				<div class="max-w-lg">
					<span
						class="border-theme bg-theme-100 text-theme rounded-full border px-3 py-1 text-xs font-medium"
					>
						Platform Engineering
					</span>
					<h2 class="mt-4 text-4xl font-bold [text-wrap:balance] lg:text-5xl lg:tracking-tight">
						What we are best in
					</h2>
					<p class="mt-4 text-lg text-slate-600 [text-wrap:pretty]">
						Unlock Maximum Cloud Performance with Streamlined Infrastructure Solutions.
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
										fill="#00c16a"
										d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"
									>
									</path>
								</symbol>
								<use xlink:href="#ai:ph:check-circle-fill"></use>
							</svg> <span class="text-md font-500">Intelligent Task Management</span>
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
							</svg> <span class="text-md font-500">Real-time Collaboration</span>
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
							</svg> <span class="text-md font-500">Data Security &amp; Privacy</span>
						</li>
					</ul>

					<div class="mt-6 flex items-center gap-4">
						<a
							href="/"
							class="focus-visible:shadow-outline-green bg-theme group inline-flex items-center gap-px rounded-full px-4 py-2 text-center text-sm text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
						>
							<span>Visit Site</span>
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
					</div>
					<!-- svelte-ignore a11y_img_redundant_alt -->
					<img
						src="images/dashboard3.png"
						alt="Feature Image"
						loading="lazy"
						width="730"
						height="584"
						decoding="async"
					/>
				</div>
			</div>
			<div class="grid place-items-end">
				<!-- svelte-ignore a11y_img_redundant_alt -->

				<div class="styles-module--right">
					<img
						class="styles-module--mainImage"
						src="images/Performance.svg"
						alt="Improwised"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="mx-auto max-w-screen-xl px-5">
	<div class="mx-auto mt-24 flex max-w-3xl flex-col items-center justify-center">
		<span
			class="border-theme bg-theme-100 text-theme rounded-full border px-3 py-1 text-xs font-medium"
		>
			MORE FEATURES
		</span>

		<h2 class="mt-4 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
			Why Choose <span class="text-theme">Us</span>
		</h2>
		<p class="mt-4 text-center text-lg text-slate-600 [text-wrap:pretty]">
			Boost developer efficiency with platform engineering, delivering scalable internal developer
			platforms across cloud-native, hybrid, and multicloud architectures.
		</p>
	</div>
	<div class="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 hover:shadow md:-m-5"
		>
			<div
				class="bg-theme-100 mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-green-100 p-2 shadow shadow-green-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-theme"
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
				<h3 class="text-lg font-semibold">Customer first</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					For us, the interest of our clients is always a priority, even if it means recommending a
					ready-made software in place of being hired to build a new one from scratch.
				</p>
			</div>
		</div>
		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 hover:shadow md:-m-5"
		>
			<div
				class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-green-100 bg-green-100 p-2 shadow shadow-green-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-theme"
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
				<h3 class="text-lg font-semibold">Holistic approach</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					While you focus on growing your business, we take care of all your technical needs, from
					server infrastructure to database design to code development.
				</p>
			</div>
		</div>
		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 hover:shadow md:-m-5"
		>
			<div
				class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-green-100 bg-green-100 p-2 shadow shadow-green-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-theme"
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
				<h3 class="text-lg font-semibold">Proactively transparent</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					We ensure that communication between you and the tech team happens without barriers by
					using tools like Slack. The purpose is simple - everybody is always on the same page.
				</p>
			</div>
		</div>
		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 hover:shadow md:-m-5"
		>
			<div
				class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-green-100 bg-green-100 p-2 shadow shadow-green-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-theme"
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
				<h3 class="text-lg font-semibold">Process automation</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					Utilizing automation early on has a compounding effect on everything. continuous delivery,
					monitoring, and alerting, infrastructure-as-code, etc. allows us to move faster.
				</p>
				Pages
			</div>
		</div>
		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 hover:shadow md:-m-5"
		>
			<div
				class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-green-100 bg-green-100 p-2 shadow shadow-green-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-theme"
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
				<h3 class="text-lg font-semibold">Right tool for the job</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					Every business is different, and technology is just means to an end. We help you select
					the right vendors, make informed build-or-buy decisions, and more.
				</p>
			</div>
		</div>

		<div
			class="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 hover:shadow md:-m-5"
		>
			<div
				class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-green-100 bg-green-100 p-2 shadow shadow-green-100/50 transition-colors"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-theme"
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
				<h3 class="text-lg font-semibold">Startup-minded team</h3>
				<p class="mt-2 leading-relaxed text-slate-500">
					All our teams are responsible for their work - design, development, deployment, and
					support. Additionally, we stay current and help our clients benefit from the latest
					innovations in the industry.
				</p>
			</div>
		</div>
	</div>
</div>

<div
	class="mt-20 flex flex-col items-center bg-gradient-to-bl from-green-900 to-green-700 p-8 text-center md:px-20 md:py-20"
>
	<h2 class="text-4xl tracking-tight text-white md:text-6xl">Get in Touch with Us</h2>
	<p class="mt-4 text-lg text-white/70 md:text-xl">
		We will do our best to answer you within 24 hours or less.
	</p>
	<div class="mt-5 flex">
		<a
			href="/"
			class="focus-visible:shadow-outline-green rounded-full border-2 border-transparent bg-white px-7 py-2.5 text-center text-green-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
			>Contact Us
		</a>
	</div>
</div>
