export class NuSpecFile
{
    src: string;
    target: string;
}

export class NuSpec
{
    id: string;
    version: string;
    title: string;
    description: string;
    authors: string;
    owners: string;
    copyright: string;

    serviceable: boolean;

    iconUrl: string;
    requireLicenseAcceptance: boolean;
    repository: string;
    license: string;
    contentFiles: NuSpecFile[];
}

