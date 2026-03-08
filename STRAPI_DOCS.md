# Strapi Connection

This project is connected to a locally running Strapi API.

## Configuration

Environment variables are stored in `.env`.

- `STRAPI_URL`: The base URL of your Strapi instance (default: `http://localhost:1337`).
- `STRAPI_API_TOKEN`: The API token used to authenticate requests. You can generate this in the Strapi Admin Panel under Settings -> API Tokens.

## Usage

You can use the `fetchApi` utility from `src/lib/strapi.ts` to fetch data:

```typescript
import fetchApi from '../lib/strapi';

const artists = await fetchApi({
  endpoint: 'artists',
  wrappedByKey: 'data',
});
```

To handle images:

```typescript
import { getStrapiMedia } from '../lib/strapi';

const imageUrl = getStrapiMedia(artist.attributes.image.data);
```

## Strapi Backend Details

For reference, the locally running Strapi backend uses the following configuration:

- **Host:** 0.0.0.0
- **Port:** 1337
- **Admin Panel:** [http://localhost:1337/admin](http://localhost:1337/admin)

(Secrets and salts are managed in the Strapi project's own `.env` file.)
