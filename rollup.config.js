import rollupPluginJson from '@rollup/plugin-json';
import rollupPluginTypeScript from '@wessberg/rollup-plugin-ts';

export default {
  experimentalCodeSplitting: true,
  input: './src/index.ts',
  output: [
    {
      exports: 'named',
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      exports: 'named',
      file: 'dist/index.cjs.js',
      format: 'commonjs',
      sourcemap: true
    },
    {
      exports: 'named',
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'VueFilterPluralize',
      sourcemap: true
    }
  ],
  plugins: [
    rollupPluginJson(),
    rollupPluginTypeScript()
  ]
};
