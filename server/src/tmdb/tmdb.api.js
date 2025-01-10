import axiosClient from "../axios/axios.client.js";
import tmdbPath from "./tmdb.path.js";

// Define the TMDB API
const tmdbApi = {
  // Function to get the list of media
  mediaList: async ({ mediaType, mediaCategory, page }) =>
    await axiosClient.get(
      tmdbPath.mediaList({ mediaType, mediaCategory, page })
    ),
  mediaSearch: async ({ mediaType, query, page }) =>
    await axiosClient.get(tmdbPath.mediaSearch({ mediaType, query, page })),
  mediaDetail: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbPath.mediaDetail({ mediaType, mediaId })),
  mediaCredits: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbPath.mediaCredits({ mediaType, mediaId })),
  mediaVideo: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbPath.mediaVideo({ mediaType, mediaId })),
  mediaRecommend: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbPath.mediaRecommend({ mediaType, mediaId })),
  mediaImages: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbPath.mediaImages({ mediaType, mediaId })),
  mediaGenres: async ({ mediaType }) =>
    await axiosClient.get(tmdbPath.mediaGenres({ mediaType })),
  personMedias: async ({ personId }) =>
    await axiosClient.get(tmdbPath.personMedias({ personId })),
};

export default tmdbApi;
