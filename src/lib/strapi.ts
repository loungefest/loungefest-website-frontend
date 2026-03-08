interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from (e.g. 'artists')
 * @param query - Additional query parameters
 * @param wrappedByKey - The key to unwrap the response from (e.g. 'data')
 * @param wrappedByList - Whether the response is a list
 * @returns The fetched data
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const strapiUrl = import.meta.env.STRAPI_URL;

  if (!strapiUrl) {
    throw new Error(
      "STRAPI_URL is not defined in your environment variables. Please check your .env file or GitHub Secrets."
    );
  }

  const url = new URL(`${strapiUrl}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const headers: HeadersInit = {};

  if (import.meta.env.STRAPI_API_TOKEN) {
    headers.Authorization = `Bearer ${import.meta.env.STRAPI_API_TOKEN}`;
  }

  const res = await fetch(url.toString(), { headers });

  if (!res.ok) {
    throw new Error(`Strapi request failed: ${res.status} ${res.statusText}`);
  }

  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}

/**
 * Prepends the Strapi URL to the provided path
 * @param path - The path to prepend the URL to (e.g. '/uploads/image.png')
 * @returns The full URL to the image
 */
export function getStrapiURL(path = "") {
  return `${import.meta.env.STRAPI_URL}${path}`;
}

/**
 * Returns the full URL to the provided media object from Strapi
 * @param media - The media object from Strapi (with url property)
 * @returns The full URL to the media
 */
export function getStrapiMedia(media: any) {
  if (!media) return null;
  const { url } = media.attributes || media;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return getStrapiURL(url);
}
