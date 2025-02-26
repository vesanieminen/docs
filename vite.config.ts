import type { UserConfigFn } from 'vite';
import { overrideVaadinConfig } from './vite.generated';

const customConfig: UserConfigFn = (env) => ({
  // Here you can add custom Vite parameters
  // https://vitejs.dev/config/
  plugins: [
    {
      name: 'filter-out-external-deps',
      transform(code, id) {
        if (id.endsWith('frontend/generated/flow/generated-flow-webcomponent-imports.js')) {
          return code
            .split('\n')
            .filter((row) => {
              if (!row.startsWith('import')) return false;
              if (row.includes('@vaadin')) return false;
              if (row.includes('@polymer')) return false;
              if (row.includes('generated/jar-resources')) return false;
              return true;
            })
            .join('\n');
        }
      },
    },
    {
      name: 'apply-theme-fallback',
      transform(_code, id) {
        // The docs app has its own bundle with all the Vaadin resources.
        // Polymer etc dependencies have purposefully been excluded from the
        // docs project (Vaadin) bundle. However, the embedded Flow examples
        // (like frontend/generated/flow/web-components/accordion-basic-wc.ts)
        // now import "applyTheme" which has an indirect dependency to Polymer
        // so we need to direct the applyTheme function to use the version
        // bundled with docs-app. Otherwise we'd end up with conflicting imports
        // (Vaadin/Polymer) originating from two separate bundles loaded on the same page.
        // We'll do this by declaring "generated/theme" (generated by Vaadin to embedded components)
        // as an external, which gets registered to the global namespace by docs-app bundle
        // (in frontend/demo/example-resources.ts).
        if (id.endsWith('generated/theme.js')) {
          return 'export const applyTheme = window.__applyTheme.applyTheme;';
        }
      },
    },
  ],
});

export default overrideVaadinConfig(customConfig);
