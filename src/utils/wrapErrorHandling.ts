export default function wrapErrorHandling(
  request: Request,
  callback: (params: unknown) => unknown
) {
  return (function () {
    try {
      callback(request);
    } catch (error: unknown) {
      return Response.json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  })();
}
