export default function wrapErrorHandling(
  callback: (request: Request) => Promise<void | Response>
) {
  return async function (request: Request) {
    try {
      return await callback(request);
    } catch (error) {
      return Response.json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  };
}
