<script>
	export let image;
	export let name;
</script>

<div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6 tool">
	<div class="boxed boxed--border text-center">
		<img height="300" width="300" style="object-fit: contain" src={image} alt={name} />
		<h3 class="h6 remove-height">{name}</h3>
	</div>
</div>

<style>
	.tool {
		display: grid;
	}
</style>
