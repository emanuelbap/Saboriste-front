import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Premium Clássica - Saboriste
        // Cores principais
        fundo: '#0E0E0E',           // Preto carvão (fundo do site)
        'preto-suave': '#1A1A1A',   // Preto secundário
        dourado: '#C9A24D',         // Dourado quente (CTA/botão)
        'dourado-hover': '#E6C77A', // Champagne (hover do botão)
        
        // Neutros
        'branco-principal': '#F5F5F5', // Off-white (texto principal)
        'cinza-texto': '#B5B5B5',      // Cinza médio
        'cinza-divisor': '#2A2A2A',    // Cinza escuro
        
        // Cores de apoio (produto)
        chocolate: '#4A2E1F',       // Marrom cacau
        caramelo: '#887A3B',        // Dourado doce
      },
    },
  },
  plugins: [],
}
export default config
