<script>
	import { onMount } from 'svelte';
	import Granim from 'granim';

	/**
	 * @type {HTMLCanvasElement}
	 */
	let granimCanvas;

	onMount(() => {
		const GObj = new Granim({
			element: granimCanvas,
			name: 'basic-gradient',
			direction: 'left-right',
			opacity: [1, 1],
			states: {
				'default-state': {
					gradients: [
						['#4876BD', '#5448BD'],
						['#8F48BD', '#BD48B1']
					],
					transitionSpeed: 1000
				}
			}
		});
	});
</script>

<canvas bind:this={granimCanvas}></canvas>
