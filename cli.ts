import chalk from 'chalk';
import inquirer from 'inquirer';
import { generateFiles } from './fileGenerator';

async function runCLI() {
    console.log(chalk.green('Welcome to the SvelteKit File Generator!'));

    const { routeName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'routeName',
            message: 'Enter the route name:',
            validate: (input) => input ? true : 'Route name cannot be empty.',
        },
    ]);

    const { files: filesToGenerate } = await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'files',
            message: 'Select the files to generate:',
            choices: [
                '+layout.svelte',
                '+layout.server.ts',
                '+page.svelte',
                '+page.server.ts',
                '(name).schema.ts',
                '(name)-form.svelte',
            ],
        },
    ]);

    const { overwrite } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'overwrite',
            message: 'Allow overwriting existing files?',
            default: false,
        },
    ]);

    const { dryRun } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'dryRun',
            message: 'Run in dry-run mode?',
            default: false,
        },
    ]);

    await generateFiles(routeName, filesToGenerate, overwrite, dryRun);

    console.log(chalk.blue('File generation complete.'));
}

runCLI();