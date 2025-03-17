import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Ensure it listens on all network interfaces
    port: 5173,       // Keep the port consistent
    strictPort: true  // Ensures Vite doesn't switch ports automatically
  }
});
