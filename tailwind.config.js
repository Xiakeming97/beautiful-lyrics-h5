module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  theme:{
    colors:{
      'cayn-100':'#e6fffb',
      'cayn-200':'#b5f5ec',
      'cayn-300':'#87e8de',
      'cayn-400':'#5cdbd3',
      'cayn-500':'#36cfc9',
      'cayn-600':'#13c2c2',
      'cayn-700':'#08979c',
      'cayn-800':'#006d75',
      'cayn-900':'#00474f',
      'cayn-1000':'#002329',
    }
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
}
