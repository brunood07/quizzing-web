module.exports = {
  testEnvironment: "jsdom", // Tipo de ambiente que vamos ter para teste
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // Pastas que não queremos que o jest verifique quando rodarmos os testes
  collectCoverage: true, // Ele irá fazer os testes de coberturas para dizer se estamos cobrindo todas as funções e variáveis
  collectCoverageFrom: ["src/**/*.ts(x)"], // De onde ele deve coletar os testes de cobertura
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"], //Onde iremos colocar algumas informações do jest,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
