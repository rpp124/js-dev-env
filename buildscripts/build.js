/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk'

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating production build'));

webpack(webpackConfig).run((err, stats) => {
	if(err) {
		console.log(chalk.red(err));
		return 1;
	} else {
		const jsonStats = stats.toJson();

		if(jsonStats.hasErrors) {
			return jsonStats.errors.map(error => console.log(chalk.red(error)));
		}


		if(jsonStats.hasWarnings) {
			console.log(chalk.yellow('WebPack generated the following warnings:'));
			jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
		}

		console.log(`WebPack stats: ${stats}`);

		console.log(chalk.green('Production build complete and written to /dist'));
		return 0;
	}
});
