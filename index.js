import chalk from "chalk";
import "dotenv/config";

const log = console.log;
log(
	chalk.blue.bold(process.env.NAME1),
	chalk.white.bgRed(process.env.NAME2),
	chalk.yellow.italic(process.env.NAME3),
	chalk.green.underline(process.env.NAME4),
);
