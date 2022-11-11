const config = {
  user: "SmartGardenWeb",
  password: "WebUser@2022",
  database: "SmartGarden",
  server: "imet.com.vn",
  port: 1435,
  autoLoadEntities: true,
  synchronize: true,

  options: {
    trustedConnection: false,
    trustServerCertificate: true,
    synchronize: true,
    cryptoCredentialsDetails: {
      minVersion: "TLSv1",
    },
  },
};

module.exports = config;
