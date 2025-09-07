const BACKEND_PORT = 2337;

export enum Environment {
  Local = "local",
  Docker = "docker",
  Production = "production",
}

const local = {
  apiUrl: `http://localhost:${BACKEND_PORT}/api`,
  uploadsUrl: `http://localhost:${BACKEND_PORT}/uploads`,
};

const docker = {
  apiUrl: `http://strapi:${BACKEND_PORT}/api`,
  uploadsUrl: `http://strapi:${BACKEND_PORT}/uploads`,
};

const production = {
  apiUrl: `http://host.docker.internal:${BACKEND_PORT}/api`,
  uploadsUrl: `http://host.docker.internal:${BACKEND_PORT}/uploads`,
};

const environments = {
  [Environment.Local]: local,
  [Environment.Docker]: docker,
  [Environment.Production]: production,
};

export const getEnvironment = () => {
  const currentEnvironment = getCurrentEnvironment();
  return {
    [Environment.Local]: local,
    [Environment.Docker]: docker,
    [Environment.Production]: production,
  }[currentEnvironment];
};

const getCurrentEnvironment = () => {
  return (process.env.ENVIRONMENT as Environment) || Environment.Local;
};
