# \<my-card-le>

![Example](https://github.com/mauriciogc/my-card-le/blob/master/asset/example.png)

## Installation

```bash
npm i
```

```bash
yarn install
```

## Demo

```bash
npm start
```

```bash
yarn start
```

Runs the app in the development mode.
Open http://localhost:8001/demo/ to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Usage

```html
<my-card-le></my-card-le>

<script type="module">
	/** Watch the demo for more examples **/
	import "my-card-le/my-card-le";

	const data = {
		title: "Mulan",
		genre: ["Action", "Adventure", "Drama", "Fantasy", "War"],
		date: "2020",
		vote: 7.6,
		description:
			"When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
		poster:
			"//image.tmdb.org/t/p/w220_and_h330_face/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
		backdrop:
			"//image.tmdb.org/t/p/w1920_and_h800_multi_faces/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
	};

	<my-card-le
			.title=${title}
			.genre=${genre}
			.date=${date}
			.vote=${vote}
			.description=${description}
			.poster=${poster}
			.backdrop=${backdrop}
		>
		</my-card-le>
</script>
```

## Testing with Karma

To run the suite of karma tests, run

```bash
npm run test
```

```bash
yarn test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```

```bash
yarn test:watch
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.
If you customize the configuration a lot, you can consider moving them to individual files.

## Tips

Does not work "husky"? test...

```bash
rm -rf .git/hooks/
rm -rf node_modules
yarn
```
