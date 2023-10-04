import {ModuleFederationConfig} from '@nx/webpack';

const config: ModuleFederationConfig = {
    name: 'remote-4203',
    exposes: {
        './Module': './src/remote-entry.ts',
    },
};

export default config;
