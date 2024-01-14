
// begin::navbar
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar1'); //memanggil id navbar

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { //jika scroll vertikal lebih dari 50 px mka add kelas scrolled
            navbar.classList.add('scrolled');
        } else { //jika tidak scroll vertikal lebih dari 50 px mka remove kelas scrolled
            navbar.classList.remove('scrolled');
        }
    });
});
//end::navbar

//begin::pop berhasil addcart
// document.addEventListener('DOMContentLoaded', function () {
//     const openBtn = document.getElementById('addcart');
//     const closeBtn = document.getElementById('closepopup');
//     const popupContainer = document.getElementById('popup');

//     openBtn.addEventListener('click', function () {
//         popupContainer.style.display = 'block';
//     });

//     closeBtn.addEventListener('click', function () {
//         popupContainer.style.display = 'none';
//     });

//     // Tutup pop-up jika pengguna mengklik di luar area pop-up
//     window.addEventListener('click', function (event) {
//         if (event.target === popupContainer) {
//             popupContainer.style.display = 'none';
//         }
//     });
// });

//end::pop berhasil addcart

// begin::slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let currentIndex = 0;

    function updateSlider() {
        const translateValue = -currentIndex * 100;
        slider.style.transform = `translateX(${translateValue}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
        updateSlider();
    }

    setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
});

// end::slider