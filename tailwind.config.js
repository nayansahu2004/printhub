/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core System Colors
        background: 'var(--color-background)', // white
        foreground: 'var(--color-foreground)', // slate-800
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // gray-50
        ring: 'var(--color-ring)', // blue-800
        
        // Card Colors
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // slate-800
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // slate-800
        },
        
        // Muted Colors
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-50
          foreground: 'var(--color-muted-foreground)' // gray-500
        },
        
        // Brand Primary Colors
        primary: {
          DEFAULT: 'var(--color-primary)', // blue-800
          foreground: 'var(--color-primary-foreground)' // white
        },
        
        // Brand Secondary Colors
        secondary: {
          DEFAULT: 'var(--color-secondary)', // orange-300
          foreground: 'var(--color-secondary-foreground)' // slate-800
        },
        
        // Action Colors
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-600
          foreground: 'var(--color-destructive-foreground)' // white
        },
        
        // Accent Colors
        accent: {
          DEFAULT: 'var(--color-accent)', // orange-600
          foreground: 'var(--color-accent-foreground)' // white
        },
        
        // Status Colors
        success: {
          DEFAULT: 'var(--color-success)', // green-600
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // yellow-500
          foreground: 'var(--color-warning-foreground)' // slate-800
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-600
          foreground: 'var(--color-error-foreground)' // white
        },
        
        // Brand Conversion Colors
        whatsapp: {
          DEFAULT: 'var(--color-whatsapp)', // whatsapp-green
          foreground: 'var(--color-whatsapp-foreground)' // white
        },
        
        // Surface Colors
        surface: {
          DEFAULT: 'var(--color-surface)', // gray-50
          foreground: 'var(--color-surface-foreground)' // slate-800
        },
        
        // Text Hierarchy
        'text-primary': 'var(--color-text-primary)', // slate-800
        'text-secondary': 'var(--color-text-secondary)', // gray-500
        
        // Canvas Colors
        canvas: {
          DEFAULT: 'var(--color-canvas)', // gray-25
          foreground: 'var(--color-canvas-foreground)' // slate-800
        },
        
        // Trust Builder
        trust: {
          DEFAULT: 'var(--color-trust)', // gray-500
          foreground: 'var(--color-trust-foreground)' // white
        },
        
        // Brand Energy
        'brand-energy': {
          DEFAULT: 'var(--color-brand-energy)', // orange-500
          foreground: 'var(--color-brand-energy-foreground)' // white
        },
        
        // Professional Trust
        professional: {
          DEFAULT: 'var(--color-professional)', // blue-600
          foreground: 'var(--color-professional-foreground)' // white
        },
        
        // CTA Action
        cta: {
          DEFAULT: 'var(--color-cta)', // orange-400
          foreground: 'var(--color-cta-foreground)' // white
        }
      },
      fontFamily: {
        'headline': ['Inter', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'cta': ['Inter', 'sans-serif'],
        'accent': ['Playfair Display', 'serif'],
        'brand': ['Poppins', 'sans-serif']
      },
      fontSize: {
        'brand-hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'brand-title': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'brand-subtitle': ['1.25rem', { lineHeight: '1.4' }],
        'brand-body': ['1rem', { lineHeight: '1.6' }],
        'brand-caption': ['0.875rem', { lineHeight: '1.5' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'brand': '8px',
        'brand-lg': '12px',
        'brand-xl': '16px'
      },
      boxShadow: {
        'brand': '0 4px 6px -1px rgba(255, 107, 53, 0.15), 0 2px 4px -1px rgba(255, 107, 53, 0.06)',
        'brand-lg': '0 10px 15px -3px rgba(255, 107, 53, 0.15), 0 4px 6px -2px rgba(255, 107, 53, 0.05)',
        'neutral': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'neutral-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      animation: {
        'whatsapp-pulse': 'whatsapp-pulse 2s infinite',
        'logo-morph': 'logo-morph 2s ease-in-out forwards',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        'whatsapp-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
          '70%': { boxShadow: '0 0 0 20px rgba(37, 211, 102, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' }
        },
        'logo-morph': {
          'to': { strokeDashoffset: '0' }
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slideUp': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'scaleIn': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      },
      screens: {
        'xs': '475px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ],
}