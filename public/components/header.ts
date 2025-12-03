export function Header() {
    const element = document.getElementById('header');
    const header = document.createElement('header');
    header.innerHTML = `
          <header class="bgvideo h-screen flex items-center justify-center">
    <!-- Background video (with audio) -->
    <video autoplay loop playsinline class="absolute inset-0 w-auto h-full min-w-full min-h-full  z-[-1]">
      <source src="/imagesandvideos/luxurystay-intro.mp4" type="video/mp4" />
    </video>
    <!-- Overlay Content -->
    <div class="relative bg-gray-500 bg-opacity-50">
      <div class="text-center p-6 fade-in-up">
        <h1 class="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Welcome to LuxuryStay
        </h1>
        <p class="text-lg md:text-2xl text-white drop-shadow mb-6">
          Experience comfort and elegance at the finest hotels.
        </p>
      </div>
    </div>
  </header>
    `;
    return header;
}