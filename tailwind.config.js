export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E88E5',
        'primary-hover': '#1565C0',
        accent: '#2196F3',
        success: '#4CAF50',
        'success-bg': '#E8F5E9',
        error: '#E53935',
        'error-bg': '#FFEBEE',
        warning: '#FB8C00',
        'warning-bg': '#FFF3E0',
        'bg-primary': '#E3F2FD',
        'bg-surface': '#FFFFFF',
        'bg-subtle': '#F5F9FC',
        'text-main': '#263238',
        'text-muted': '#546E7A',
        'color-border': '#CFD8DC'
      },
      borderRadius: {
        'standard': '8px',
        'large': '12px'
      }
    }
  },
  plugins: []
}
