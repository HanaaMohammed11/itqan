export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // تأكد من عدم وجود مسافات غريبة في الأسماء
        'islamic-blue': '#0f1419',
        'islamic-gold': '#d4af37',
        'islamic-green': '#2e8b57',
      },
    },
  },
  plugins: [],
}