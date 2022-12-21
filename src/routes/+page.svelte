<script>
/* export const prerender = true; */
  import Svelvet from "svelvet";
  import { onMount } from 'svelte';
  import { Button, FileDropzone, DatePicker } from 'attractions';
  import Counter from './Counter.svelte';
  import * as blobs2 from "blobs/v2";
  import * as blobs2Animate from "blobs/v2/animate";
  console.log('blobs2:', blobs2)
  console.log('blobs2Animate:', blobs2Animate)

  const svgString = blobs2.svg(
    {
        seed: Math.random(),
        extraPoints: 8,
        randomness: 4,
        size: 256,
    },
    {
        fill: "white", // 🚨 NOT SANITIZED
        stroke: "black", // 🚨 NOT SANITIZED
        strokeWidth: 4,
    },
  );
  let message = 'Hello, World!';


		const initialNodes = [
		  {
		    id: 1,
		    position: { x: 250, y: 250 },
		    data: { label: "Parent" },
		    width: 75,
		    height: 75,
		    bgColor: "white",
		    borderRadius: 50,
		    borderColor: "red",
		    childNodes: [2, 3, 4, 5, 6, 7]
		  },
		  {
		    id: 2,
		    position: { x: 100, y: 100 },
		    data: { label: "borderColor" },
		    width: 150,
		    height: 40,
		    borderColor: "red",
		    bgColor: "white"
		  },
		  {
		    id: 3,
		    position: { x: 400, y: 100 },
		    data: { label: "textColor" },
		    width: 150,
		    height: 40,
		    textColor: "#3F6FD6",
		    bgColor: "white"
		  },
		  {
		    id: 4,
		    position: { x: 50, y: 300 },
		    data: { label: "Danny Pink" },
		    width: 150,
		    height: 40,
		    textColor: "white",
		    borderColor: "transparent",
		    bgColor: "#FF9ABD"
		  },
		  {
		    id: 5,
		    position: { x: 500, y: 250 },
		    data: { label: "width and height" },
		    width: 90,
		    height: 110,
		    bgColor: "white"
		  },
		  {
		    id: 6,
		    position: { x: 500, y: 500 },
		    data: { label: "borderRadius" },
		    width: 100,
		    height: 100,
		    bgColor: "orange",
		    borderRadius: 30,
		    borderColor: "blue"
		  },
		  {
		    id: 7,
		    position: { x: 50, y: 500 },
		    data: { label: "clickCallback" },
		    width: 150,
		    height: 40,
		    bgColor: "white",
		    childNodes: [8, 9],
		    clickCallback: node => console.log(node)
		  },
		  {
		    id: 8,
		    position: { x: 50, y: 575 },
		    data: { label: "childNode1" },
		    width: 75,
		    height: 50
		  },
		  {
		    id: 9,
		    position: { x: 150, y: 575 },
		    data: { label: "childNode2" },
		    width: 100,
		    height: 50
		  }
		];

		const initialEdges = [
		  { id: "e1-2", source: 1, target: 2, label: "connection" },
		  { id: "e2-3", source: 2, target: 3, label: "label" },
		  {
		    id: "e1-4",
		    source: 1,
		    target: 4,
		    label: "box",
		    animate: true,
		    arrow: true
		  },
		  { id: "e2-5", source: 1, target: 5, animate: true },
		  { id: "e1-6", source: 1, target: 6, arrow: true },
		  { id: "e1-7", source: 1, target: 7, animate: true },
		  {
		    id: "e7-8",
		    source: 7,
		    target: 8,
		    arrow: true,
		    animate: true,
		    label: "child"
		  },
		  {
		    id: "e7-8",
		    source: 7,
		    target: 9,
		    arrow: true,
		    animate: true,
		    label: "child"
		  }
		];

  /* on:create={() => { */
  /*   console.log('Component created'); */
  /*   message = 'Hello, Svelte!'; */
  /* }} */
  /* on:create={() => console.log('Component created')} */

  /* onMount(() => { */
  /* console.log('the component has mounted'); */
  /*       console.log('>>', document.querySelector('.placeholder')) */
  /*       document.querySelector('.placeholder').innerHTML = svgString; */
  /* }); */

  console.log('svgString:', svgString)
</script>

<svelte:head>
	<title>CloudMap</title>
	<meta name="description" content="MX Cloud Map" />
</svelte:head>

<h1>{message}</h1>

<Counter />

<div class="placeholder"></div>

<Svelvet nodes={initialNodes} edges={initialEdges} background />

<FileDropzone accept="image/*" max={3} />

<style lang="scss">
  /* because the directory of `theme.scss` is in `includePaths` */
  @use 'theme.scss';

  $main: red;
  p {
    color: theme.$main;
  }
  a {
    color: theme.$foo;
  }
</style>


