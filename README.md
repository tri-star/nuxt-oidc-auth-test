# nuxt-oidc-auth-test

## Description

This repository is for testing the integration between the nuxt-oidc-auth module and Auth0.

As of v0.18.0 (2024-10-27), we believe that integrating with an Auth0 application results in an `Invalid JWT token` error during the processing of the response from Auth0's OAuth Token Endpoint (/oauth/token).

This repository includes the minimal content to confirm this issue.

## Setup

Make sure to install dependencies:

```bash
# npm
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```
