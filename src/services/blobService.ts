import { list, put } from "@vercel/blob";

export const uploadFile = async (filename: string, data: string) => {
  const { url } = await put(filename, data, {
    access: "public",
    allowOverwrite: true,
  });
  return url;
};

export const getFile = async (filename: string) => {
  const response = await list();
  return response.blobs;
};
