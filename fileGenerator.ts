
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
    const templatesPath = path.join(process.cwd(), 'templates');

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

        const templateContent = await fs.readFile(templatePath, 'utf-8');
        const fileContent = templateContent.replace(/{{name}}/g, routeName);

        console.log(
            dryRun
                ? chalk.gray(`[Dry Run] Would create: ${filePath}`)
                : chalk.green(`Creating file: ${filePath}`)
        );

        if (!dryRun) {
            await fs.ensureDir(routePath);
            await fs.writeFile(filePath, fileContent, 'utf-8');
        }
    }
}