import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Quản lý chung cư',
  webDir: 'dist',
  server: {
    androidScheme: "http",
  },
};

export default config;
