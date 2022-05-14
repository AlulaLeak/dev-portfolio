export default function animations() {
  const showTitle = {
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
    config: { duration: 3000 },
    hide: true,
  };
  const hideTitle = {
    to: { opacity: 0 },
    from: { opacity: 1 },
    delay: 500,
    config: { duration: 1000 },
    hide: true,
  };

  return { showTitle, hideTitle };
}
