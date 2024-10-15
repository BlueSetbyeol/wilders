import chalk from "chalk";
import "dotenv/config";

const log = console.log;
log(chalk.blue.bold(`${process.env.NAME1}`));
