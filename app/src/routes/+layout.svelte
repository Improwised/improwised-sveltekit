<script>
   import { PUBLIC_BASE_URL } from "$env/static/public";

    export const baseUrl = PUBLIC_BASE_URL

	import Header from "$lib/components/Header.svelte";

	import Footer from "$lib/components/Footer.svelte";
	import "../app.css";

</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width" />
	<link rel="icon" type="image/x-icon" href={baseUrl + "/favicon.ico"}  />
	<meta name="generator" content="Improwised Technologies Pvt. Ltd." />
	<title>Improwised Technologies Pvt. Ltd.</title>

	<meta name="description" content="Let us help you with cloud infrastructure and SAAS software development services to create revenue channels. Our technical support, IT Managed Services will let you focus on your strength while we are managing your software and IT assets." />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="Improwised Technologies Pvt. Ltd." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={baseUrl + "/opengraph.jpg"} />
	<meta property="og:url" content="https://www.improwised.com/" />
	<meta property="og:image:url" content={baseUrl + "/opengraph.jpg"} />
	<meta property="og:image:alt" content="Improwised Technologies Pvt. Ltd." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@improwised" />
	<link rel="canonical" href={baseUrl + "/"} />
	<meta
		name="twitter:creator"
		content="@improwised"
	/>

	<link href={baseUrl + "/css/style.css"}  rel="stylesheet" type="text/css" />



</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
	<script  src={baseUrl + "/js/custom.js"}></script>
</div>
