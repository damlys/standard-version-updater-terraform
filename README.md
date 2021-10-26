# `standard-version-updater-terraform`

The
[conventional-changelog/standard-version](https://github.com/conventional-changelog/standard-version)
updater for Terraform `.tfvars` files.

## Installation

```shell
$ npm install --save-dev @damlys/standard-version-updater-terraform
```

## Configuration

Just use following updaters within
`.versionrc.json` config file.

```json
{
  "bumpFiles": [
    {
      "filename": "terraform.tfvars",
      "updater": "node_modules/@damlys/standard-version-updater-terraform/dist/tfvars.js"
    }
  ]
}
```

## Examples

`terraform.tfvars` file might look like that:

```text
deployment_name = "foo"
version = "1.0.0"

availability_zone_names = [
  "eu-central-1a",
  "eu-central-1b"
]
```

The `tfvars.js` updater looks for
a `version = "<semver>"` pattern and updates it.
