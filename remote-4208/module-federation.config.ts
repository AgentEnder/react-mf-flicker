import {ModuleFederationConfig} from '@nx/webpack';

const config: ModuleFederationConfig = {
    name: 'remote-4208',
    exposes: {
        './Module': './src/remote-entry.ts',
    },
};

export default config;
