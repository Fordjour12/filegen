
# FileGen

FileGen is a Svelte-based project that automates the generation of files using predefined templates. It streamlines the process of creating repetitive files, saving time and reducing errors.

## Features

- Generate files from customizable templates
- Easy integration with existing Svelte projects
- Supports various file types
- Configurable output directories

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Bun](https://bun.sh/) (version 0.1.0 or higher)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/filegen.git
cd filegen
npm install
```

### Usage

To generate files using FileGen, run:

```bash
npm run generate
```

This command processes the templates and creates files in the specified output directory.

### Customizing Templates

- Edit templates in the `templates` directory to match your requirements.
- Use placeholders in templates for dynamic content.
- Define template variables in the configuration file.

### Configuration

Adjust settings in `config.js`:

- **Output Directory**: Specify where generated files are saved.
- **Template Variables**: Define variables used in templates.
- **File Naming Conventions**: Customize the naming scheme for generated files.

## Suggestions

- **Add More Templates**: Expand the `templates` directory with additional templates for other file types.
- **Command-Line Arguments**: Implement CLI options to input variables at runtime.
- **GUI Tool**: Develop a graphical interface for users who prefer not to use the command line.

## Contributing

Contributions are welcome! Please:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License.
