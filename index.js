const navToggle = document.querySelector(' .nav-toggle');
const navLinks = document.querySelectorAll(' .nav__link')



navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

// Filtering for the MY WORK section

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio__items");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelector(".filter-btn.active")?.classList.remove("active");
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        // freeze animations for layout change
        portfolioItems.forEach(item => item.classList.add("is-moving"));

        requestAnimationFrame(() => {
            portfolioItems.forEach(item => item.classList.remove("is-moving"));

            portfolioItems.forEach(item => {
                const categories = item.dataset.category || "";

                if (filter === "all" || categories.includes(filter)) {
                    item.style.display = "block";

                    requestAnimationFrame(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    });

                } else {
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.9)";

                    setTimeout(() => {
                        item.style.display = "none";
                    }, 250);
                }
            });
        });
    });
});



// //this is for the filtering in the MY WORK section to filter the works in different cathegories

// const filterButtons = document.querySelectorAll(".filter-btn");
// const portfolioItems = document.querySelectorAll(".portfolio__items");

// filterButtons.forEach(btn => {
//     btn.addEventListener("click", () => {

//         document.querySelector(".filter-btn.active")?.classList.remove("active");
//         btn.classList.add("active");

//         const filter = btn.dataset.filter;

//         portfolioItems.forEach(item => {
//             const categories = item.dataset.category || "";

//             if (filter === "all" || categories.includes(filter)) {
//                 item.style.display = "block";

//                 // small delay so display applies before animation
//                 setTimeout(() => {
//                     item.style.opacity = "1";
//                     item.style.transform = "scale(1)";
//                 }, 10);

//             } else {
//                 item.style.opacity = "0";
//                 item.style.transform = "scale(0.9)";

//                 setTimeout(() => {
//                     item.style.display = "none";
//                 }, 300); // matches CSS transition time
//             }
//             // if (filter === "all" || categories.includes(filter)) {
//             //     item.style.display = "block";
//             // } else {
//             //     item.style.display = "none";
//             // }
//         });
//     });
// });
