<script>
	import { baseUrl } from '$lib/config';
</script>

<header
	class="impronav-sticky-header sticky top-0 z-20 border-b border-transparent py-5 transition-all"
	data-impro-cid-eo7fz7pr=""
>
	<div class="mx-auto max-w-screen-xl px-5">
		<div
			class="relative z-10 flex flex-col items-center justify-between lg:flex-row"
			data-impro-transition-scope="impro-o7bz76pi-1"
		>
			<div class="flex w-full items-center justify-between lg:w-auto">
				<a href={baseUrl} class="logodefault -ml-2 flex items-center px-2 transition transition"
					><img
						src={baseUrl + '/images/logo.png'}
						class="logo"
						alt="logo"
						loading="lazy"
						decoding="async"
					/>
				</a>
				<div class="block lg:hidden">
					<button id="impronav-menu" aria-label="Toggle Menu">
						<svg
							fill="currentColor"
							class="text-white-800 h-4 w-4"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							xmlns="https://www.w3.org/2000/svg"
						>
							<title>Toggle Menu</title>
							<path
								class="impronav-close-icon impronav-toggle hidden"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
							>
							</path>
							<path
								class="impronav-open-icon impronav-toggle"
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
							>
							</path>
						</svg>
					</button>
				</div>
			</div>
			<nav class="impronav-items impronav-toggle mt-2 hidden w-full lg:mt-0 lg:flex lg:w-auto">
				<ul class="flex flex-col lg:flex-row lg:gap-3">
					<li>
						<a
							href={baseUrl}
							class="active focus-visible:shadow-outline-theme text-md text-slate-bold hover:text-theme-600 flex rounded-full py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-500 focus-visible:ring-offset-2 lg:px-3"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href={baseUrl}
							class="focus-visible:shadow-outline-theme text-md text-slate-bold hover:text-theme-600 flex rounded-full py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-500 focus-visible:ring-offset-2 lg:px-3"
						>
							About Us
						</a>
					</li>
					<li class="relative isolate z-50">
						<!-- svelte-ignore a11y_role_supports_aria_props_implicit -->
						<menu class="impronav-dropdown group">
							<button
								class="focus-visible:shadow-outline-theme text-md text-slate-bold hover:text-slate-bold flex w-full items-center gap-1 rounded-full py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-500 focus-visible:ring-offset-2 lg:w-auto lg:px-3"
							>
								<span>Services</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="3"
									stroke="currentColor"
									class="mt-0.5 h-3 w-3 group-open:rotate-180"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									></path>
								</svg>
							</button>
							<div class="impronav-dropdown dropdown-toggle hidden">
								<div
									class="z-50 mt-2 w-56 w-full origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none lg:absolute lg:left-0 lg:w-48"
								>
									<div class="flex flex-col shadow-lg lg:rounded-md lg:bg-white lg:py-2">
										<a href="/" class="hover:text-theme-600 block px-4 py-2 text-sm text-gray-700">
											Platform Engineering
										</a><a
											href="/"
											class="hover:text-theme-600 block px-4 py-2 text-sm text-gray-700"
										>
											Cloud Infrastructure Services
										</a><a
											href="/"
											class="hover:text-theme-600 block px-4 py-2 text-sm text-gray-700"
										>
											Product Modernization
										</a><a
											href="/"
											class="hover:text-theme-600 block px-4 py-2 text-sm text-gray-700"
										>
											Technology Consulting
										</a>
									</div>
								</div>
							</div>
						</menu>
					</li>

					<li>
						<a
							href={baseUrl}
							class="focus-visible:shadow-outline-theme text-md text-slate-bold hover:text-theme-600 flex rounded-full py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-500 focus-visible:ring-offset-2 lg:px-3"
						>
							Case Studies
						</a>
					</li>
					<li>
						<a
							href={baseUrl}
							class="focus-visible:shadow-outline-theme text-md text-slate-bold hover:text-theme-600 flex rounded-full py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-500 focus-visible:ring-offset-2 lg:px-3"
						>
							Careers
						</a>
					</li>
					<li>
						<a
							href={baseUrl}
							class="focus-visible:shadow-outline-theme text-md text-slate-bold hover:text-theme-600 flex rounded-full py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-500 focus-visible:ring-offset-2 lg:px-3"
						>
							Blogs
						</a>
					</li>
					<li class="relative isolate z-50">
						<!-- svelte-ignore a11y_role_supports_aria_props_implicit -->
						<menu class="impronav-dropdown group">
							<button
								class="focus-visible:shadow-outline-theme text-md text-slate-bold hover:text-slate-bold flex w-full items-center gap-1 rounded-full py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-500 focus-visible:ring-offset-2 lg:w-auto lg:px-3"
							>
								<span>Demos</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="3"
									stroke="currentColor"
									class="mt-0.5 h-3 w-3 group-open:rotate-180"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									></path>
								</svg>
							</button>
							<div class="impronav-dropdown dropdown-toggle hidden">
								<div
									class="z-50 mt-2 w-56 w-full origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none lg:absolute lg:left-0 lg:w-48"
								>
									<div class="flex flex-col shadow-lg lg:rounded-md lg:bg-white lg:py-2">
										<a
											href={baseUrl}
											class="hover:text-theme-600 block px-4 py-2 text-sm text-gray-700"
										>
											Version 1.1
										</a>
										<a
											href={baseUrl + '/home2'}
											class="hover:text-theme-600 block px-4 py-2 text-sm text-gray-700"
										>
											Version 1.0
										</a>
									</div>
								</div>
							</div>
						</menu>
					</li>
				</ul>
				<div class="mt-3 flex items-center gap-4 lg:hidden">
					<a
						href="/"
						class="contactusbtn focus-visible:shadow-outline-theme hover:bg-theme-light focus-visible:ring-theme group w-full rounded-full border-2 px-5 py-2 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
						>Contact Us
					</a>
				</div>
			</nav>
			<div>
				<div class="hidden items-center gap-4 lg:flex">
					<div class="relative isolate z-50">
						<menu class="impronav-dropdown group">
							<!-- svelte-ignore a11y_consider_explicit_label -->
							<button class=""
								><span
									><svg
										viewBox="0 0 24 24"
										fill="none"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="h-6 w-6"
										><path
											d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
											class="fill-slate-400/20 stroke-slate-500"
										></path><path
											d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
											class="stroke-slate-500"
										></path></svg
									></span
								></button
							>
							<div class="impronav-dropdown dropdown-toggle hidden">
								<div
									class="w-46 z-50 mt-2 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none lg:absolute lg:left-0 lg:w-48"
								>

									<div class="flex flex-col shadow-lg lg:rounded-md lg:bg-white lg:py-2">

										<!-- svelte-ignore a11y_invalid_attribute -->
										<a
											href="javascript:void(0)"
											class="hover:text-theme-600 block px-4 py-2 text-sm text-gray-700"
											on:click={changeThemeColor('green')}
										>
											<button
												type="button"
												class="items-center  rounded-md pr-1"
												><!----><span
													class="inline-block h-3 w-3 rounded-full"
													style="background-color: #6CB33F;"
												></span></button
											>
											Green
										</a>
										<!-- svelte-ignore a11y_invalid_attribute -->
										<a
											href="javascript:void(0)"
											class="hover:text-theme-600 block px-4 py-2 text-sm text-gray-700"

											 on:click={changeThemeColor('blue')}
										>
											<button
												type="button"
												class="items-center  rounded-md pr-1"
												><!----><span
													class="inline-block h-3 w-3 rounded-full"
													style="background-color: #00AFDB;"
												></span></button
											>
											Blue
										</a>
									</div>
								</div>
							</div>
						</menu>
					</div>

					<a
						href={baseUrl}
						class="contactusbtn focus-visible:shadow-outline-theme text-md hover:bg-theme focus-visible:ring-theme group inline-flex items-center gap-px rounded-full border-2 px-4 py-2 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
					>
						<span>Contact Us</span>
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
					<!-- svelte-ignore a11y_consider_explicit_label -->
				</div>
			</div>
		</div>
	</div>
</header>
