import rollupPluginJson from '@rollup/plugin-json';
import rollupPluginTypeScript from '@wessberg/rollup-plugin-ts';

export default {
  input: './src/vue-filter-pluralize.ts',
  output: [
    {
      exports: 'named',
      file: 'dist/vue-filter-pluralize.esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      exports: 'named',
      file: 'dist/vue-filter-pluralize.cjs.js',
      format: 'commonjs',
      sourcemap: true
    },
    {
      exports: 'named',
      file: 'dist/vue-filter-pluralize.umd.js',
      format: 'umd',
      name: 'VueFilterDateFormat',
      sourcemap: true
    }
  ],
  plugins: [
    rollupPluginJson(),
    rollupPluginTypeScript()
  ]
};
