export default {
  apps: [
    {
      name: "yakir-cohen-productions",
      script: ".next/standalone/server.js",
      cwd: "/var/www/yakir-cohen-productions",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        HOSTNAME: "127.0.0.1",
        PORT: "3000",
        NEXT_PUBLIC_SITE_URL: "https://TEMPORARY_DEPLOYMENT_HOST",
      },
      max_memory_restart: "512M",
      time: true,
    },
  ],
};
