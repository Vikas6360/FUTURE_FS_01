/**
 * Footer and Floating Back-to-Top button
 */
export default function Footer({ showTopButton }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="footer">
        <p>© {new Date().getFullYear()} VIKAS S M. ALL RIGHTS RESERVED.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>

      {showTopButton && (
        <button
          className="top-button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  )
}
