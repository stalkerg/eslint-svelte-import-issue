module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:svelte/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  plugins: [
    'import'
  ],
  rules: {
    'import/named': 'error',
    'import/no-cycle': ['error', { maxDepth: '∞' }],
  },
  settings: {
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
    ],
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
    'import/resolver': {
        node: {
            extensions: [".js", ".ts", ".tsx"],
            moduleDirectory: ["src", "node_modules"]
        },
        'eslint-import-resolver-custom-alias': {
            alias: {
              "$lib": 'src/lib',
              "$app": 'node_modules/@sveltejs/kit/src/runtime/app',
              "@sveltejs/kit": 'node_modules/@sveltejs/kit/src/exports/index.js'
            },
            extensions: ['.js']
        },
    }
}
};
