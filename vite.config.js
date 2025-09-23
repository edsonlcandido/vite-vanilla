// filepath: c:\Users\CandidED\OneDrive - Chart Industries Inc\Visual Studio Projects\edsonlcandido\vite-vanilla\vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    //tailwindcss(),
  ],
  build:{
    rollupOptions:{
      input:{
        main:'./index.html',
        dashboard:'./dashboard.html',
        configuração:'./configuracao.html',
        login:'./login.html',
      },
      output: {
        // Mantém uma estrutura de bundles mais consolidada
        manualChunks: {
          // Agrupa bibliotecas externas
          vendor: [], // Adicionar libs externas quando houver
          // Agrupa código compartilhado
          shared: [
            './src/components/checkLogin.js',
            './src/components/navbar.js',
          ],
        },
        // Reduz a quantidade de arquivos de assets
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Configura os nomes dos arquivos JS
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
      }
    },
    // Minimiza o tamanho dos arquivos
    minify: true,
    // Combina CSS em arquivos menores
    cssCodeSplit: false,
    // Otimiza o tamanho dos chunks
    chunkSizeWarningLimit: 1000,
  }
})