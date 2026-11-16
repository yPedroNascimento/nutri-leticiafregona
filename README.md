# LeticiaNutricionista

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Mobile layout tests

The project includes Playwright-based scripts (`scripts/`) that audit the responsive layout in real mobile viewports (360px, 375px, 390px): they detect horizontal overflow, small touch targets, small text, console errors and capture per-section screenshots to `test-results/` (gitignored).

The scripts are self-contained — they serve `dist/` automatically if nothing is running on `localhost:4000`. Run `npm run build` first so the tested output matches production.

```bash
npm run test:mobile          # all mobile tests, headless (no window)
npm run test:mobile:headed   # all mobile tests, with a visible browser window
```

Individual suites:

```bash
npm run test:layout          # layout audit across mobile viewports + screenshots
npm run test:layout:headed
npm run test:drawer          # mobile menu open/close smoke test (PASS/FAIL)
npm run test:drawer:headed
```

To audit another URL (e.g. the production deploy), pass it directly:

```bash
node scripts/mobile-audit.mjs --url=https://your-site.com
```

Requires Node and a one-time `npx playwright install chromium` (already done if `playwright-core` is installed).

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
