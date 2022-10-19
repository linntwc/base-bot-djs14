process.on('multipleResolves', (type, reason, promise) => {
    console.log(`🚨 | [Erro]\n\n` + type, promise, reason);
  });
  process.on('unhandRejection', (reason, promise) => {
    console.log(`🚨 | [Erro]\n\n` + reason, promise);
  });
  process.on('uncaughtException', (error, origin) => {
    console.log(`🚨 | [Erro]\n\n` + error, origin);
  });
  process.on('uncaughtExceptionMonitor', (error, origin) => {
    console.log(`🚨 | [Erro]\n\n` + error, origin);
  });