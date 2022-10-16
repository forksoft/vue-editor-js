import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/entry.esm.ts',
    output: [
        {
            file: 'dist/vue3-editor-js.ssr.js',
            format: 'cjs',
            name: 'Vue3EditorJS',
            exports: 'auto',
        },
        {
            file: 'dist/vue3-editor-js.esm.js',
            format: 'esm',
            exports: 'named',
        }
    ],
    plugins: [typescript()],
};
