export const config = {
  matcher: '/admin/:path*'
};

export default function middleware(request) {
  const authHeader = request.headers.get('authorization');

  if (authHeader && authHeader.startsWith('Basic ')) {
    const decoded = atob(authHeader.slice(6));
    const colonIndex = decoded.indexOf(':');
    const user = decoded.slice(0, colonIndex);
    const pass = decoded.slice(colonIndex + 1);

    if (user === process.env.ADMIN_USERNAME && pass === process.env.ADMIN_PASSWORD) {
      return;
    }
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Admin Portal"' }
  });
}
