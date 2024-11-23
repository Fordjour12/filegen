import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

export async function generateFiles(
    routeName: string,
    files: string[],
    overwrite: boolean,
    dryRun: boolean
) {
    const routePath = path.join(process.cwd(), 'src', 'routes', routeName);
    const templatesPath = path.join(__dirname, 'templates');

    // Ensure the routePath directory exists
    if (!dryRun) {
        await fs.ensureDir(routePath);
    }

    for (const file of files) {
        const fileName = file.includes('(name)')
            ? file.replace('(name)', routeName)
            : file;
        const filePath = path.join(routePath, fileName);
        const templatePath = path.join(templatesPath, file);

        if (!overwrite && (await fs.pathExists(filePath))) {
            console.log(chalk.yellow(`File already exists: ${filePath}`));
            continue;
        }

        // Check if the template file exists
        if (!(await fs.pathExists(templatePath))) {
            console.log(chalk.red(`Template file not found: ${templatePath}`));
            continue;
        }

        const templateContent = await fs.readFile(templatePath, 'utf-8');
        const fileContent = templateContent.replace(/{{name}}/g, routeName);

        if (dryRun) {
            console.log(chalk.green(`[Dry Run] Would write file: ${filePath}`));
        } else {
            await fs.writeFile(filePath, fileContent);
            console.log(chalk.green(`File written: ${filePath}`));
        }
    }
}