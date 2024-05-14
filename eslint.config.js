module.exports = [
  {
    rules: {
      'no-unused-vars': 'warn',
      complexity: ['error', 2],
      'no-var': 'error',
      quotes: ['error', 'single'],
      'sort-imports': [
        'warn',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
    },
  },
];
